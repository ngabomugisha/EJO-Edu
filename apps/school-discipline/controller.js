import SchoolDiscipline from './repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            firstLevel,
            secondLevel,
            thirdLevel,
            forthLevel,
            marks
        } = req.body;
        const school = req.user.school
        SchoolDiscipline.create(
            school,
            firstLevel,
            secondLevel,
            thirdLevel,
            forthLevel,
            marks
        )
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
        const schoolDisciplineId = req.params.schoolDisciplineId;
        const {
            firstLevel,
            secondLevel,
            thirdLevel,
            forthLevel,
            marks
        } = req.body;
        SchoolDiscipline.update(
            schoolDisciplineId, 
            firstLevel,
            secondLevel,
            thirdLevel,
            forthLevel,
            marks
            )
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

exports.getAllSchoolDisciplines = async (req, res) => {
    try {
        const school = req.user.school
        SchoolDiscipline.getAllSchoolDisciplines(school)
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


exports.getOneSchoolDiscipline = async (req, res) => {
    try {
        const schoolDisciplineId = req.params.schoolDisciplineId;

        SchoolDiscipline.getOneSchoolDiscipline(schoolDisciplineId)
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
        const schoolDisciplineId = req.params.schoolDisciplineId;
        
        SchoolDiscipline.delete(schoolDisciplineId)
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