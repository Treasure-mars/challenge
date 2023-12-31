const User = require('../model/user');
const bcrypt = require('bcrypt');
const asyncWrapper = require('../middleware/async');

const signup = asyncWrapper(async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, password: hashedPassword });

  return res.status(201).json({ user });
});

const login = asyncWrapper(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ msg: 'Wrong username or password' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ msg: 'Wrong username or password' });
  }

  return res.status(200).json({ msg: "Successfully logged in" });
});


module.exports = {
    signup,
    login
}