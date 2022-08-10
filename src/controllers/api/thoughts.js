const { Thought } = require("../../models");

const getThoughts = async (req, res) => {
	try {
		const data = await Thought.find({});
		return res.json({ success: true, data });
	} catch (error) {
		console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);
		return res
			.status(500)
			.json({ success: false, error: "Failed to get thoughts" });
	}
};

const getThoughtById = async (req, res) => {};
const createThought = async (req, res) => {};
const updateThoughtById = async (req, res) => {};
const deleteThoughtById = async (req, res) => {};

module.exports = {
	getThoughts,
	getThoughtById,
	createThought,
	updateThoughtById,
	deleteThoughtById,
};
