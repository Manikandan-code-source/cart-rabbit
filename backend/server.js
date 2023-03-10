const express = require("express");
const mongoose = require("mongoose");
const HOmodel = require("./Model/model");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const url =
  "mongodb+srv://admin:cyberpolice@mydatabase.tr9rmr0.mongodb.net/houseowner?retryWrites=true&w=majority";

app.get("/getdata", async (req, res) => {
  try {
    const data = await HOmodel.find({});
    // console.log(data);
    res.send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.post("/postdata", async (req, res) => {
  try {
    const data = await HOmodel.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
  }
});

app.delete("/deletedata/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await HOmodel.findByIdAndDelete(id);
    if (!data) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/updatedata/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id,req.body);
    const data = await HOmodel.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updateData = await HOmodel.findById(id);
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(url)
  .then(() => {
    app.listen(8000, () => {
      console.log("server running on 8000");
    });
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
