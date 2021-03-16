import SchoolDiscipline from './model'

exports.create = async (
    school,
    firstLevel,
    secondLevel,
    thirdLevel,
    forthLevel,
    marks
) => {
    try {
        const newSchoolDiscipline = new SchoolDiscipline({
            school,
            firstLevel,
            secondLevel,
            thirdLevel,
            forthLevel,
            marks
        })
        await newSchoolDiscipline.save()
        return newSchoolDiscipline;
    } catch (error) {
        throw error;
    }
};

exports.update = async (
    schoolDisciplineId,
    firstLevel,
    secondLevel,
    thirdLevel,
    forthLevel,
    marks) => {
    try {
        return await SchoolDiscipline.findByIdAndUpdate({
                _id: schoolDisciplineId
            }, {
                firstLevel,
                secondLevel,
                thirdLevel,
                forthLevel,
                marks
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

exports.getAllSchoolDisciplines = async (school) => {
    try {
        return await SchoolDiscipline.find({
                school
            })
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

exports.getOneSchoolDiscipline = async (schoolDisciplineId) => {
    try {
        return await SchoolDiscipline.findById(schoolDisciplineId)
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

exports.getDisciplineAction = async (
    school,
    firstLevel,
    secondLevel,
    thirdLevel,
    forthLevel
) => {
    try {
        return await SchoolDiscipline.findOne({
            school,
            firstLevel,
            secondLevel,
            thirdLevel,
            forthLevel
        })
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

exports.delete = async (schoolDisciplineId) => {
    try {
        return await SchoolDiscipline.findByIdAndDelete(schoolDisciplineId);
    } catch (error) {
        throw error;
    }
}