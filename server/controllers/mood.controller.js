const MoodTracker = require('../models/mood.model');
const jwt = require('jsonwebtoken')

//This is for the health check of the controller to ensure it is working.
const healthCheck = (req, res) => {
    res.send("Controller good to go!")
};

//This is to create the mood in the database.
const createMood = (req, res) => {
    const { body } = req;
    const newMoodObj = new MoodTracker(body);
    const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true})

    newMoodObj.createdBy = decodedJWT.payload.id;

    newMoodObj.save()
    .then((newMood) => res.json(newMood))
    .catch(err => res.status(400).json(err));
};

//This is to pull all moods in the database.
const getAllMoods = (req, res) => {
    MoodTracker.find()
    .populate("createdBy", "_id name")
    .then((allMoods) => res.json(allMoods))
    .catch(err => res.status(400).json(err));
};

// const getAllMoodsByUser = (req, res) => {
//     const { params } = req;
//     MoodTracker.find({ createdBy: params.userId })
//     .then((allUserMoods) => res.json(allUserMoods))
//     .catch(err => res.status(400).json(err));
// }

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
    //getAllMoodsByUser,
    getOneMood,
    updateMood,
    deleteMood
}