const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://yvangrebe:mernproject@atlascluster.b8ksug7.mongodb.net/mern-project",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
