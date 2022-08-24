const mongoose = require("mongoose");

const mongoDB = "mongodb://127.0.0.1:27017/Local_CRUD_REST_API";

mongoose.connect(
  mongoDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (e) => {
    if (!e) {
      console.log("Database Connected ✅");
    } else {
      console.log("Connection Failed ⚠️");
    }
  }
);
