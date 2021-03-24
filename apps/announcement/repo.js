import Announcement from './model'

exports.create = async (announcement, sender, school) =>{
try {
    const newAnnouncement = new Announcement({
        announcement, sender, school
    })
    await newAnnouncement.save()
    return newAnnouncement;
} catch (error) {
    throw error; 
}
};

exports.getSentAnnouncements = async (sender) => {
    try {
        return await Announcement.find({sender: sender})
                .populate({
                    path: 'sender',
                    select: 'firstName lastName role'
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

exports.getReceivedAnnouncements = async (school) => {
    try {
        return await Announcement.find({school: school})
                .populate({
                    path: 'sender',
                    select: 'firstName lastName role'
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

exports.getOneAnnouncement = async (announcementId) => {
    try {
        return await Announcement.findById(announcementId)
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

exports.delete = async (announcementId) => {
    try {
        return await Announcement.findByIdAndDelete(announcementId);
    } catch (error) {
        throw error;
    }
}