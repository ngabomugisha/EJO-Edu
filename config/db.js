const mongoose = require('mongoose')

export default async () => {
    try {
      await mongoose.connect(
        'mongodb+srv://odilo:4L4158pSpoNnqxVR@cluster0-beram.mongodb.net/ejo?retryWrites=true&w=majority',
        { useCreateIndex: true, useNewUrlParser: true }
      );
      console.log('Connection to DB Successful');
    } catch (err) {
      console.log('Connection to DB Failed');
    }
  };
  

