const ProjectController = require('../controllers/project.controller');

module.exports = function(app){
    app.get('/api/projects', ProjectController.allProjects);
    app.post('/api/projects', ProjectController.createProject);
    app.get('/api/projects/:id', ProjectController.getOne);
    app.put('/api/update/:id', ProjectController.update);
    app.delete('/api/projects/:id', ProjectController.remove);
}