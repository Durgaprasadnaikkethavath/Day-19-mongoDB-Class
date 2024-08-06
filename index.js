const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Internship_data")
  .then(() => console.log("Database was connected"))
  .catch(() => console.log("Database not connected"));

// create data

// const fullData = {
//   title: "Software Developer",
//   noOfVideos: 15,
//   cType: "JavaScript",
//   author: "Durga",
//   active: true,
// };

// schema

const dataSchema = new mongoose.Schema({
  title: String,
  noOfVideos: Number,
  cType: String,
  author: String,
  active: Boolean,
});

// collections

const createData = new mongoose.model("createData", dataSchema);

// save()

// const saveData = async () => {
//   const saveDetails = new createData(fullData);
//   await saveDetails.save();
//   console.log(saveDetails);
// };
// saveData();

// multiple()

// const multipleData = async () => {
//   const totalMultipleData = await createData.create(
//     {
//       title: "Developer",
//       noOfVideos: 15,
//       cType: "react js",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "Software Developer",
//       noOfVideos: 15,
//       cType: "JavaScript",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "web developer",
//       noOfVideos: 15,
//       cType: "JavaScript",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "oops developer",
//       noOfVideos: 15,
//       cType: "JavaScript",
//       author: "Durga",
//       active: true,
//     }
//   );
//   console.log(totalMultipleData);
// };

// multipleData();

const getDocument = async () => {
  const details = await createData.find(
    { cType: "JavaScript" },
    { title: 1, _id: 0 }
  );
  console.log(details);
};

getDocument();
