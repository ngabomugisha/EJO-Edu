import Discipline from './model'
import School from '../school/repo'

exports.addStudentDiscipline = async (
    studentClass,
    schoolId,
    students,
    firstLevel,
    secondLevel,
    thirdLevel,
    forthLevel,
    marks,
    author
) => {
    try {
        const entry = {
            firstLevel,
            secondLevel,
            thirdLevel,
            forthLevel,
            time: Date.now(),
            marks,
            author
        }
        
        let updatedList = []
        await Promise.all(students.map( async student => {

            let studentData = await Discipline.findOneAndUpdate({
                student: student._id
            }, {
                $inc: {
                    total: marks
                },
                $push: {
                    "disciplineEntries": entry
                }
            }, {
                new: true
            })
            .populate({
                path: 'student'
            })
            .exec();
            if(!studentData){
                const schoolDetails = await School.getOneSchool(schoolId)
                if(!schoolDetails.disciplineMarks)
                    schoolDetails.disciplineMarks = 0
                studentData = await Discipline.create({
                    class: studentClass,
                    school: schoolId,
                    student: student._id,
                    total: schoolDetails.disciplineMarks + marks,
                    disciplineEntries: [entry]
                })
            }
            updatedList.push(studentData)
        }))
        
        return {updatedList}
    } catch (error) {
        throw error;
    }
}

exports.addComment = async (
            studentClass,
            student,
            comment,
            author,
            schoolId
) => {
    try {
        const record = {
            student,
            comment,
            author,
            time: Date.now()
        }
        let studentData = await Discipline.findOneAndUpdate({
            student
        }, {
            $push: {
                "comments": record
            }
        }, {
            new: true
        })
        .populate({
            path: 'student'
        })
        .exec();

        if(!studentData){
            const schoolDetails = await School.getOneSchool(schoolId)
            if(!schoolDetails.disciplineMarks)
                schoolDetails.disciplineMarks = 0
            studentData = await Discipline.create({
                class: studentClass,
                school: schoolId,
                student: student,
                total: schoolDetails.disciplineMarks,
                comments: [record]
            })
        }
        return studentData
            
    } catch (error) {
        throw error;
    }
}

exports.getClassDiscipline = async (classId) => {
    try {

        return await Discipline.find({
                class: classId
            })
            .populate({
                path: 'student comments.author'
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

exports.getStudentDiscipline = async (studentId) => {
    try {

        return await Discipline.findOne({
                student: studentId
            })
            .populate({
                path: 'student comments.author'
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

exports.delete = async (disciplineId) => {
    try {
        return await Discipline.findByIdAndDelete(disciplineId);
    } catch (error) {
        throw error;
    }
}
