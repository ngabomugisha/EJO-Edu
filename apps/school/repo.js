import School from './model'
import SchoolDiscipline from '../school-discipline/repo'

import {
    negative,
    positive,
    infraction,
    motivation
} from './discipline'


const setSchoolDisciplineSettings = (school) => {
    positive.map((positiveItem) => {
        infraction.map((infractionItem) => {
            SchoolDiscipline.create(
                school,
                "responsibility and cleanliness",
                positiveItem.item,
                "infraction",
                infractionItem.item,
                0
            )
        })

        motivation.map((motivationItem) => {
            SchoolDiscipline.create(
                school,
                "responsibility and cleanliness",
                positiveItem.item,
                "motivation",
                motivationItem.item,
                0
            )
        })
    })

    negative.map((negativeItem) => {
        infraction.map((infractionItem) => {
            SchoolDiscipline.create(
                school,
                "indiscipline and rudeness",
                negativeItem.item,
                "infraction",
                infractionItem.item,
                0
            )
        })
    })
}


exports.create = async (
    name,
    address,
    gender,
    educationalStage,
    status,
    disciplineMarks,
    howLongIsClassPeriod

) => {
    try {
        const newSchool = new School({
            name,
            address,
            gender,
            educationalStage,
            status,
            disciplineMarks,
            howLongIsClassPeriod
        })
        
        setSchoolDisciplineSettings(newSchool._id)
        await newSchool.save()
        return newSchool;
    } catch (error) {
        throw error;
    }
};

exports.update = async (
    schoolId,
    name,
    address,
    gender,
    educationalStage,
    status,
    disciplineMarks,
    howLongIsClassPeriod
) => {
    try {
        return await School.findByIdAndUpdate({
                _id: schoolId
            }, {
                name,
                address,
                gender,
                educationalStage,
                status,
                disciplineMarks,
                howLongIsClassPeriod
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

exports.getAllSchools = async () => {
    try {
        return await School.find()
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

exports.getOneSchool = async (schoolId) => {
    try {
        return await School.findById(schoolId)
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

exports.delete = async (schoolId) => {
    try {
        return await School.findByIdAndDelete(schoolId);
    } catch (error) {
        throw error;
    }
}