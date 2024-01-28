import express from "express";
const Auth_Router = express.Router();
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import auth from "../Middleware/auth.js";
import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import config from 'config'

// @route   GET api/auth
// @desc    Test Route
// @access  Public
Auth_Router.get("/login", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/auth
// @desc    Authenticate User & Get Token
// @access  Public
Auth_Router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Crendentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 }, // Change to 3600 during production
        (err, token) => {
          if (err) throw err;
          res.json({ token, userId: user.id });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

export default Auth_Router;
