const { User } = require("../../models");

const getUsers = async (req, res) => {
	try {
		const data = await User.find({}).populate("thoughts").populate("friends");
		return res.json({ success: true, data });
	} catch (error) {
		console.log(`[ERROR]: Failed to get users | ${error.message}`);
		return res
			.status(500)
			.json({ success: false, error: "Failed to get users" });
	}
};

const getUserById = async (req, res) => {};

const createUser = async (req, res) => {};

const updateUserById = async (req, res) => {};

const deleteUserById = async (req, res) => {};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUserById,
	deleteUserById,
};
