const MoodTracker = require('../models/mood.model');

//This is for the health check of the controller to ensure it is working.
const healthCheck = (req, res) => {
    res.send("Controller good to go!")
};

//This is to create the mood in the database.
const createMood = (req, res) => {
    const { body } = req;
    MoodTracker.create(body)
    .then((newMood) => res.json(newMood))
    .catch(err => res.status(400).json(err));
};

//This is to pull all moods in the database.
const getAllMoods = (req, res) => {
    MoodTracker.find()
    .then((allMoods) => res.json(allMoods))
    .catch(err => res.status(400).json(err))
};

//This pulls a single mood from the database.
const getOneMood = (req, res) => {
    const { params } = req;
    MoodTracker.findOne({_id: params.id})
    .then((oneMood) => res.json(oneMood))
    .catch(err => res.status(400).json(err));
};

//This finds a single mood and updates it in the database.
const updateMood = (req, res) => {
    const { params } = req;
    MoodTracker.findOneAndUpdate({_id: params.id}, req.body, {new: true, runValidators: true})
    .then((updatedMood) => res.json(updatedMood))
    .catch(err => res.status(400).json(err));
};

//This finds a single mood and deletes it from the database.
const deleteMood = (req, res) => {
    const { params } = req;
    MoodTracker.deleteOne({_id: params.id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
};

module.exports = {
    healthCheck,
    createMood,
    getAllMoods,
    getOneMood,
    updateMood,
    deleteMood
}