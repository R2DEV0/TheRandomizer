const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'There must be a project description'],
            minlength: [3, 'Project must have at least 3 characters']
        }
    },
    {timestamps: true}
);

module.exports.Project = mongoose.model('Project', ProjectSchema);