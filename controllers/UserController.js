const User = require("../models/UserModel");

const UserReg = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All field must be filled!" });
    }
    try {
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(200).json({ message: "Registration Success!", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { UserReg };