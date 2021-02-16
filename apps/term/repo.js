import Term from './model'

exports.create = async (name, starts, ends) =>{
try {
    const newTerm = new Term({
        name,
        starts,
        ends
    })
    await newTerm.save()
    return newTerm;
} catch (error) {
    throw error; 
}
};

exports.update = async (termId, name, starts, ends) => {
    try {
        return await Term.findByIdAndUpdate(
            {_id: termId},
            {name: name, starts, ends},{new: true},
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

exports.getAllTerms = async () => {
    try {
        return await Term.find()
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

exports.getOneTerm = async (termId) => {
    try {
        return await Term.findById(termId)
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

exports.delete = async (termId) => {
    try {
        return await Term.findByIdAndDelete(termId);
    } catch (error) {
        throw error;
    }
}