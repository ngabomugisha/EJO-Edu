import Marks from './model'
import Student from '../student/model'

exports.create = async (
    student,
    answers,
    totalMarks,
    subject,
    studentClass,
    assignment,
    started,
    ended,
    marksPublished
) => {
    try {
        const newMarks = new Marks({
            student,
            answers,
            totalMarks,
            subject,
            class: studentClass,
            assignment,
            started,
            ended,
            marksPublished
        })
        await newMarks.save()
        return newMarks;
    } catch (error) {
        throw error;
    }
};

exports.update = async (
    marksId,
    answers,
    totalMarks,
    subject,
    started,
    ended,
    marksPublished
) => {
    try {
        return await Marks.findByIdAndUpdate({
                _id: marksId
            }, {
                answers,
                totalMarks,
                subject,
                started,
                ended,
                marksPublished
            }, {
                new: true
            },
            (err, success) => {
                if (err) {
                    console.log(err);
                    return false;
                }
                return success;
            }
        );
    } catch (error) {
        throw error;
    }
}

exports.getStudentSubjectMarks = async (studentId, subjectId) => {
    try {
        return await Marks.find({
                student: studentId,
                subject: subjectId
            })
            .exec()
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
                return false;
            })
    } catch (error) {
        throw error;
    }
}

exports.getAssignmentMarks = async (assignmentId, subjectId) => {
    try {
        return await Marks.find({
                assignment: assignmentId
            })
            .exec()
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
                return false;
            })
    } catch (error) {
        throw error;
    }
}

exports.getClassMarks = async (classId) => {
    try {
        console.log(classId)
        return await Marks.aggregate([
        {
            $group: {
                _id: {
                    class: "$class",
                    student: "$student",
                    subject: "$subject"
                },
                totalMarks: {
                    $sum: "$totalMarks"
                }
            }
        },
        // {
        //     $match: {
        //         class: classId
        //     }
        // }
    ]
        ).then(async data => {
            return await Student.populate(data, {
                path: "_id.student"

            })
        })
    } catch (error) {
        throw error;
    }
}

exports.getClassSubjectMarks = async (classId, subjectId) => {
    try {
        return await Marks.aggregate([
        {
            $group: {
                _id: {
                    class: "$class",
                    student: "$student",
                    subject: "$subject"
                },
                totalMarks: {
                    $sum: "$totalMarks"
                }
            }
        },
        // {
        //     $match: {
        //         class: classId,
        //         subject: subjectId
        //     }
        // }
    ]
        ).then(async data => {
            return await Student.populate(data, {
                path: "_id.student"

            })
        })
    } catch (error) {
        throw error;
    }
}

exports.getOneMarks = async (marksId) => {
    try {
        return await Marks.findById(marksId)
            .populate({
                path: "teacher"
            })
            .exec()
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
                return false;
            })
    } catch (error) {
        throw error;
    }
}

exports.delete = async (marksId) => {
    try {
        return await Marks.findByIdAndDelete(marksId);
    } catch (error) {
        throw error;
    }
}