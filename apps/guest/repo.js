import Guest from './model'

exports.create = async (firstName, lastName, reason, checkin, checkedinBy, school) =>{
try {
    const newGuest = new Guest({
        firstName,
        lastName,
        reason,
        checkin,
        checkedinBy,
        school
    })
    await newGuest.save()
    return newGuest;
} catch (error) {
    throw error; 
}
};

exports.update = async (guestId, checkout, checkedoutBy) => {
    try {
        return await Guest.findByIdAndUpdate(
            {_id: guestId},
            {checkout, checkedoutBy},{new: true},
            (err, success) => {
                if(err){
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

exports.getAllSchoolGuests = async (school) => {
    try {
        return await Guest.find({school: school})
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

exports.getOneGuest = async (guestId) => {
    try {
        return await Guest.findById(guestId)
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

exports.delete = async (guestId) => {
    try {
        return await Guest.findByIdAndDelete(guestId);
    } catch (error) {
        throw error;
    }
}