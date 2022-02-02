const moodController = require('../controllers/mood.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/healthcheck', moodController.healthCheck);
    app.get('/api/mood', authenticate, moodController.getAllMoods);
    app.post('/api/mood', authenticate, moodController.createMood);
    app.get('/api/mood/:userId', authenticate, moodController.getAllMoodsByUser);
    app.get('/api/mood/:id', authenticate, moodController.getOneMood);
    app.put('/api/mood/:id', authenticate, moodController.updateMood);
    app.delete('/api/mood/:id', authenticate, moodController.deleteMood);
}