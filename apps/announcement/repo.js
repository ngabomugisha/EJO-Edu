import Announcement from './model'

exports.create = async (announcement, receiverTypes, receivers, sender, school) =>{
try {
    const newAnnouncement = new Announcement({
        announcement,
        receiverTypes,
        receivers,
        sender,
        school
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

exports.getReceivedAnnouncements = async (receiver) => {
    try {
        return await Announcement.find({receivers: receiver})
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