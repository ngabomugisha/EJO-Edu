const mongoose = require('mongoose')

export default async () => {
    try {
      await mongoose.connect(
        'mongodb+srv://odilo:SlWTQjLaUejf4oLV@cluster0.k95fy.mongodb.net/ejo?authSource=admin&replicaSet=atlas-b64l4n-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
        { useCreateIndex: true, useNewUrlParser: true }
      );
      console.log('Connection to DB Successful');
    } catch (err) {
      console.log('Connection to DB Failed');
    }
  };
  

