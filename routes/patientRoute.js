import express from "express";
import { createReport, editPatient, searchPatients, getPatientReport, newPatient, getPatientDetails } from "../controllers/patientController.js";

const PRouter = express.Router()

PRouter.route("/getPatient").post(searchPatients)
PRouter.route("/editPatient/:id").post(editPatient)
PRouter.route("/newPatient").post(newPatient)
PRouter.route("/createReport/:id").post(createReport)
PRouter.route("/getReport/:id").get(getPatientReport)
PRouter.route("/getPatientDetails/:id").get(getPatientDetails)

export {PRouter}