const express = require("express");
const router = express.Router();

const ReadServices = require("../services/Read");
const CreateServices = require("../services/Create");
const UpdateServices = require("../services/Update");
const DeleteServices = require("../services/Delete");

/* Read All Data */
router.get("/", async (req, res, next) => {
  try {
    const result = await ReadServices();

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send({
        message: "Not Retrived!",
      });
    }
  } catch (error) {
    return false;
  }
});

/* Read One Data */
router.get("/:id", async (req, res, next) => {
  res.send(req.params);
});

/* Create One  */
router.post("/", async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const result = await CreateServices(title, description);

    if (result) {
      res.status(201).send({
        message: "Succesfully Created!",
      });
    } else {
      res.status(500).send({
        message: "Not Created!",
      });
    }
  } catch (error) {
    return false;
  }
});

/* Update One Data */
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { set } = req.body;
    const result = await UpdateServices(id, set);

    if (result) {
      res.status(200).send({
        message: "Succesfully Updated!",
      });
    } else {
      res.status(500).send({
        message: "Not Updated!",
      });
    }
  } catch (error) {
    return false;
  }
});

/* Delete One  */
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await DeleteServices(id);

    if (result) {
      res.status(200).send({
        message: "Succesfully Deleted!",
      });
    } else {
      res.status(500).send({
        message: "Not Deleted!",
      });
    }
  } catch (error) {
    return false;
  }
});

module.exports = router;
