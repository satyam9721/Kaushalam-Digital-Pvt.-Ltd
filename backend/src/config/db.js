const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://satyamrau9721:satyam1234@cluster0.h3gzyhn.mongodb.net/todoApp?retryWrites=true&w=majority&appName=Cluster0',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;











//mongodb+srv://satyamrau9721:<db_password>@cluster0.h3gzyhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb://localhost:27017/todoApp

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://satyamrau9721:satyam1234@cluster0.h3gzyhn.mongodb.net/todoApp?retryWrites=true&w=majority&appName=Cluster0', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;