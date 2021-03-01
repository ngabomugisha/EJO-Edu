import user from "./model";

exports.create = async (firstName, lastName, email, password, school, role, verificationDigits, phoneNumber, level, yearsOfExperience, workingStatus) => {
    try {
        const User = new user({
            firstName,
            lastName,
            email,
            password,
            school,
            role,
            verificationDigits,
            phoneNumber,
            level,
            yearsOfExperience,
            workingStatus
        });
        return await User.save();

    } catch (err) {
        throw err;
    }
};

exports.getUserByEmail = async (email) => {
    try {
        return await user.findOne({
            email
        });
    } catch (error) {
        throw error;
    }
}

exports.getUserById = async (id) => {
    try {
        return await user.findById(id);
    } catch (error) {
        throw error;
    }
}
exports.getSchoolEmployees = async (schoolId) => {
    try {
        return await user.find({school: schoolId});
    } catch (error) {
        throw error;
    }
}

exports.update = async (_id, data) => {
    try {
        return await user.findByIdAndUpdate({
                _id
            },
            data,
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

exports.getAllData = async (id) => {
    try {
        return await user.findById(id)
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    } catch (error) {
        throw error;
    }
}
