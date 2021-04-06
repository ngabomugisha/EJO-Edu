import Unit from './repo'
import Response from '../../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            name,
            subTopic,
            topic,
            numberOfPeriods,
            keyCompetency,
            content,
            activities
        } = req.body;

        Unit.create(name, subTopic, topic, numberOfPeriods, keyCompetency, content, activities)
        .then(results => {
            Response.Success(res, 200, "created successfully", results);
        })
        .catch(err => {
            console.log(err);
            Response.InternalServerError(res, "We are having issues! please try again soon");
        });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }
    
}

exports.update = async (req, res) => {
    try {
        const unitId = req.params.unitId;
        const {
            name, numberOfperiods, keyCompetency
        } = req.body;
        Unit.update(unitId, name, numberOfperiods, keyCompetency)
            .then(results => {
                Response.Success(res, 200, "updated successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }
    
}

exports.addFile = async (req, res) => {
    try {
        const unitId = req.params.unitId;
        const {
            topic,
            location,
            fileType
        } = req.body;
        const file = req.files.file[0].path
        
        Unit.addFile(unitId ,topic, location, file, fileType)
            .then(results => {
                Response.Success(res, 200, "updated successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }
    
}

exports.getAllSubTopicUnits = async (req, res) => {
    try {

        const subTopicId = req.params.subTopicId;
        Unit.getAllSubTopicUnits(subTopicId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }
    
}

exports.getAllTopicUnits = async (req, res) => {
    try {

        const topicId = req.params.topicId;
        Unit.getAllTopicUnits(topicId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }
    
}

exports.getOneUnit = async (req, res) => {
    try {
        const unitId = req.params.unitId;

        Unit.getOneUnit(unitId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }
    
}

exports.delete = async (req, res) => {
    try {
        const unitId = req.params.unitId;
        
        Unit.delete(unitId)
            .then(results => {
                Response.Success(res, 200, "deleted successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }
    
}