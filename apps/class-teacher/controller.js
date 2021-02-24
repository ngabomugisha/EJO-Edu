import ClassTeacher from './repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            assignedClass,
            teacher,
            subject
        } = req.body;

        ClassTeacher.create(assignedClass, teacher, subject)
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
        const classTeacherId = req.params.classTeacherId;
        const {
            assignedClass,
            teacher,
            subject
        } = req.body;
        ClassTeacher.update(classTeacherId, assignedClass, teacher, subject)
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

exports.getOneClassTeachers = async (req, res) => {
    try {
        const classId = req.params.classId
        ClassTeacher.getOneClassTeachers(classId)
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

exports.getOneTeacherClasses = async (req, res) => {
    try {
        const teacherId = req.params.teacherId
        ClassTeacher.getOneTeacherClasses(teacherId)
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


exports.getOneClassTeacher = async (req, res) => {
    try {
        const classTeacherId = req.params.classTeacherId;

        ClassTeacher.getOneClassTeacher(classTeacherId)
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
        const classTeacherId = req.params.classTeacherId;

        ClassTeacher.delete(classTeacherId)
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