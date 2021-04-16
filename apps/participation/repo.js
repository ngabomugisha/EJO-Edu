import {Participation, ParticipationComment} from './model'
import Student from '../student/repo'
exports.create = async (
    assignedClass,
    teacher,
    subject,
    students
) => {

    try {
        const newParticipation = new Participation({
            class: assignedClass,
            teacher,
            subject,
            students
        })
        await newParticipation.save()
        return newParticipation;
    } catch (error) {
        throw error;
    }
};

exports.addStudentParticipation = async (
    participationId,
    teacher,
    students,
    positive,
    firstLevel,
    record
) => {
    try {
        const participation = {
            positive,
            firstLevel,
            record,
            time: Date.now()
        }


        let participationList = {}
        await Promise.all(students.map( async student => {
            participationList = await Participation.findOneAndUpdate({
                _id: participationId,
                students: {
                    $elemMatch: {
                        student: student._id
                    }
                }

            }, {
                $push: {
                    "students.$.participation": participation
                }
            }, {
                new: true
            })
            .populate({
                path: 'students.student students.comments.author',
                select: 'firstName lastName gender'
            })
            .exec();
        }))

        let allStudentsConsidered = true
        await Promise.all(participationList.students.map(async student => {
            if(student.participation.length == 0){
                allStudentsConsidered = false
            }
        }))
        
        const classId = participationList.class;
        const subjectId = participationList.subject;
        if(allStudentsConsidered){//create a new cycle
            Participation.findByIdAndUpdate(participationId, {
                ended: Date.now()
            }, () => {
                console.log("updated")
            })
            const rawStudents = await Student.getAllClassStudents(classId);
            const students = [];

            rawStudents.map(student => {
                students.push({
                    student: student._id
                })
            })

            const newParticipation = new Participation({
                class: classId,
                teacher: teacher,
                subject: subjectId,
                students
            })

            await newParticipation.save()

            const participationList = await Participation.findById(newParticipation._id)
            .populate({
                path: 'students.student students.comments.author',
                select: 'firstName lastName gender'
            })
            .exec();

            return {participationList, cycleFinished: true}
        }

        return {participationList}
    } catch (error) {
        throw error;
    }
}


exports.getStudentParticipation = async (
    student,
    classId,
    subjectId
) => {
    try {

        return await Participation.find({
            class: classId,
            subject: subjectId,
            students: {
                $elemMatch: {
                    student: student
                }
            }
            },
            {'students.$': 1, createdAt: 1}
            ).sort({"createdAt": -1})

    } catch (error) {
        throw error;
    }
}


exports.addComment = async (
            studentClass,
            subject,
            student,
            comment,
            teacher
    ) => {
    try {
        return await ParticipationComment.create({
                subject,
                class: studentClass,
                comment,
                student,
                teacher,
            })
    } catch (error) {
        throw error;
    }
}

exports.getStudentComments = async (
        studentClass,
        subject,
        student
    ) => {
    try {
    return await ParticipationComment.find({
            subject,
            class: studentClass,
            student,
        })
    } catch (error) {
        throw error;
    }
}

exports.getClassParticipation = async (classId, subject, teacher) => {
    try {

        const participation = await Participation.findOne({
                class: classId,
                teacher: teacher,
                subject: subject
            },
            ).sort({"createdAt": -1}).limit(1)
            .populate({
                path: 'students.student students.comments.author',
                select: 'firstName lastName gender'
            })
            .exec()
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
                return false;
            })
        if (!participation) {
            const rawStudents = await Student.getAllClassStudents(classId);
            const students = [];
            rawStudents.map(student => {
                students.push({
                    student: student._id
                })
            })

            const newParticipation = new Participation({
                class: classId,
                teacher,
                subject,
                students
            })
            await newParticipation.save()
            const savedParticipation = await Participation.findById(newParticipation._id)
            .populate({
                path: 'students.student',
                select: 'firstName lastName gender'
            })
            .exec()
            return savedParticipation;

        }else{
            return participation
        }
        
    } catch (error) {
        throw error;
    }
}

exports.delete = async (participationId) => {
    try {
        return await Participation.findByIdAndDelete(participationId);
    } catch (error) {
        throw error;
    }
}
