import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    //We check for the user in the database and return a 404 not found error if it doesn't exists.
    if (!existingUser)
      return res.status(404).json({ message: 'User does not exist' });

    //We compare hashed passwords to know if they are the same
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    //We check the password to see if its correct and return a message when credentials are invalid
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      { expiresIn: '1h' }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
};
