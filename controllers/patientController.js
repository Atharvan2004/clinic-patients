import { asyncErrorHandler } from "../middleware/asyncErrorHandler.js"
import { Patient } from "../models/patients.js"
import { findPatientByQuery } from "../utils/findPatient.js";
import { Report } from "../models/reports.js";

const searchPatients = asyncErrorHandler(async (req, res) => {

    try {
        const query = req.body.query;
        const patientList = await findPatientByQuery(query).catch((err) => {
            console.log(err)
        });
        res.status(201).json({
            success: true,
            patientList
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }

})

const newPatient = asyncErrorHandler(async (req, res) => {
    try {
        const patient = {
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            age: req.body.age,
            occupation: req.body.occupation,
            reports: []
        };

        Patient.insertMany(patient).then(() => {
            res.json("Patient data created");
        }).catch((err) => {
            console.log(err);
            res.json("Error in creating patient " + err.message);
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }

})

const createReport = asyncErrorHandler(async (req, res) => {
    try {
        const reportData = {
            date: new Date(),
            symptom: req.body.symptom,
            previousHistory: req.body.previousHistory,
            previousTreatment: req.body.previousTreatment,
            visheshaParikshan: req.body.visheshaParikshan,
            sadyovrittam: {
                mala_pravritti: req.body.sadyovrittam.mala_pravritti,
                mutra_pravritti: req.body.sadyovrittam.mutra_pravritti,
                analam: req.body.sadyovrittam.analam,
                nidra: req.body.sadyovrittam.nidra,
                artavam: req.body.sadyovrittam.artavam,
                aharam: req.body.sadyovrittam.aharam,
                viharam: req.body.sadyovrittam.viharam,
                satmya: req.body.sadyovrittam.satmya,
                manovastha: req.body.sadyovrittam.manovastha,
                raja_pravritti: req.body.sadyovrittam.raja_pravritti,
                lmp: req.body.sadyovrittam.lmp,
                edd: req.body.sadyovrittam.edd,
            },
            samanya_pariksha: {
                jivha: req.body.samanya_pariksha.jivha,
                netram: req.body.samanya_pariksha.netram,
                nakham: req.body.samanya_pariksha.nakham,
                bharam: req.body.samanya_pariksha.bharam,
                nadi: req.body.samanya_pariksha.nadi,
                rakta_bharam: req.body.samanya_pariksha.rakta_bharam,
                twak: req.body.samanya_pariksha.twak,
                rugnavastha: req.body.samanya_pariksha.rugnavastha,
                doshavastha: req.body.samanya_pariksha.doshavastha,
                doshasthanam: req.body.samanya_pariksha.doshasthanam,
                dooshyavikriti: req.body.samanya_pariksha.dooshyavikriti,
                sambhavya_vyadhi: req.body.samanya_pariksha.sambhavya_vyadhi,
            },
            aushadhi_chikitsa: req.body.aushadhi_chikitsa,
            chikitsa_kalam: req.body.chikitsa_kalam,
            panchkarma: req.body.panchkarma,
        };

        const patientId = req.params.id;
        const patient = await Patient.findById(patientId);

        const newReport = new Report(reportData);
        const savedReport = await newReport.save()
        const patientReport = { id: savedReport._id }
        await patient.reports.push(patientReport);
        patient.save();
        res.status(201).json({
            success: true,
            patient
        })

    } catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
})

const editPatient = asyncErrorHandler(async (req, res) => {
    try {
        const patientId = req.params.id;
        let updates = {};

        if (req.body.name) {
            updates.name = req.body.name;
        }
        if (req.body.address) {
            updates.address = req.body.address;
        }
        if (req.body.phone) {
            updates.phone = req.body.phone;
        }
        if (req.body.age) {
            updates.age = req.body.age;
        }
        if (req.body.occupation) {
            updates.occupation = req.body.occupation;
        }

        const updatedPatient = await Patient.findByIdAndUpdate(patientId, updates, {
            new: true,
            runValidators: true
        }).catch((err) => {
            console.log(err)
        });

        if (!updatedPatient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        console.log("Patient updated:", updatedPatient);
        res.status(200).json({ message: "Patient data updated", updatedPatient });

    } catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
})

const getPatientReport = asyncErrorHandler(async (req, res) => {

    try {
        const patientId = req.params.id;
        const patient = await Patient.findById(patientId);
        let reportList = [];
        await Promise.all((patient.reports).map(async (report) => {

            const reportData = await Report.findById(report.id);
            await reportList.push(reportData);

        }))
        res.status(201).json({
            success: true,
            reportList
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }

})

const getPatientDetails = asyncErrorHandler(async (req, res) => {

    try {
        const patientId = req.params.id;
        const patient = await Patient.findById(patientId);
        let reportList = [];
        await Promise.all((patient.reports).map(async (report) => {

            const reportData = await Report.findById(report.id);
            await reportList.push(reportData);

        }))
        res.status(201).json({
            success: true,
            patient,
            reportList
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }

})

export {
    searchPatients,
    newPatient,
    createReport,
    editPatient,
    getPatientReport,
    getPatientDetails
}