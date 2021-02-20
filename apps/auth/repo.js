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
exports.addInvitation = async (userId, membership, membershipType, ancestor, ancestorType, receiverEmail, officerId, organisation) => {
    return await user.update({
        _id: userId
    }, {
        $push: {
            invitations: {
                membership: {
                    member: membership,
                    memberType: membershipType
                },
                organisation: organisation,
                ancestor: {
                    ancestor: ancestor,
                    ancestorType: ancestorType
                },
                invitedBy: officerId
            }
        }
    })
}


exports.getAllData = async (id) => {
    try {
        return await user.findById(id)
            .populate({
                path: 'invitations.invitedBy',
                select: 'user sType',
                populate: {
                    path: 'user sType',
                    select: 'firstName lastName title'
                }
            })

            .populate({
                path: 'invitations.organisation',
                select: 'name nameAbbr logo'
            })
            .populate({
                path: 'invitations.membership.member',
                select: 'title',
                populate: {
                    path: 'questions'
                }
            })
            .populate({
                path: 'invitations.ancestor.ancestor',
                select: 'name nameAbbr'
            })
            .populate('memberships.organisation', 'name nameAbbr logo ')
            .exec()
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
exports.getInvitations = async (id) => {
    try {
        return await user.findById(id)
            .populate({
                path: 'invitations.invitedBy',
                select: 'user sType',
                populate: {
                    path: 'user sType',
                    select: 'firstName lastName title'
                }
            })

            .populate({
                path: 'invitations.organisation',
                select: 'name nameAbbr logo'
            })
            .populate({
                path: 'invitations.membership.member',
                select: 'title',
                populate: {
                    path: 'questions'
                }
            })
            .populate({
                path: 'invitations.ancestor.ancestor',
                select: 'name nameAbbr'
            })
            .populate('organisations')
            .exec()
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
