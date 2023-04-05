const LabCounts = require("../models/labCountModel");
const mongoose = require("mongoose");

const getAllLabCounts = async (req, res) => {
	const labCounts = await LabCounts.find({}).sort({ createdAt: -1 });
	console.log(labCounts);
	res.status(200).json(labCounts);
};

const getSingleLabCount = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	const labCount = await LabCounts.findById(id);

	if (!labCount) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	res.status(200).json(labCount);
};

const createLabCount = async (req, res) => {
	console.log(req.body);
	const { testName, count, dateTaken } = req.body;
	try {
		const newLabCount = await LabCounts.create({
			testName,
			count,
			dateTaken,
		});
		res.status(200).json({ mssg: "POST a new labCount", newLabCount });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const deleteLabCount = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	const labCount = await LabCounts.findOneAndDelete({ _id: id });

	if (!labCount) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	res.status(200).json(labCount);
};

const updateLabCount = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	const updateLabCount = await LabCounts.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!updateLabCount) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	res.status(200).json(updateLabCount);
};

module.exports = {
	getAllLabCounts,
	getSingleLabCount,
	createLabCount,
	deleteLabCount,
	updateLabCount,
};
