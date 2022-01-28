const moodController = require('../controllers/mood.controller');

module.exports = app => {
    app.get('/api/healthcheck', moodController.healthCheck);
    app.get('/api/mood', moodController.getAllMoods);
    app.post('/api/mood', moodController.createMood);
    app.get('/api/mood/:id', moodController.getOneMood);
    app.put('/api/mood/:id', moodController.updateMood);
    app.delete('/api/mood/:id', moodController.deleteMood);
}