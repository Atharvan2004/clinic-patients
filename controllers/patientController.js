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
            name: req.body.formData.name,
            address: req.body.formData.address,
            phone: req.body.formData.phone,
            age: req.body.formData.age,
            occupation: req.body.formData.occupation,
            reports: []
        };
        console.log(patient)
        console.log(req.body)

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
    console.log(req.body)
    try {
        const reportData = {
            date: new Date(),
            symptom: req.body.formData.symptom,
            previousHistory: req.body.formData.previousHistory,
            previousTreatment: req.body.formData.previousTreatment,
            visheshaParikshan: req.body.formData.visheshaParikshan,
            sadyovrittam: {
                mala_pravritti: req.body.formData.sadyovrittam.mala_pravritti,
                mutra_pravritti: req.body.formData.sadyovrittam.mutra_pravritti,
                analam: req.body.formData.sadyovrittam.analam,
                nidra: req.body.formData.sadyovrittam.nidra,
                artavam: req.body.formData.sadyovrittam.artavam,
                aharam: req.body.formData.sadyovrittam.aharam,
                viharam: req.body.formData.sadyovrittam.viharam,
                satmya: req.body.formData.sadyovrittam.satmya,
                manovastha: req.body.formData.sadyovrittam.manovastha,
                raja_pravritti: req.body.formData.sadyovrittam.raja_pravritti,
                lmp: req.body.formData.sadyovrittam.lmp,
                edd: req.body.formData.sadyovrittam.edd,
            },
            samanya_pariksha: {
                jivha: req.body.formData.samanya_pariksha.jivha,
                netram: req.body.formData.samanya_pariksha.netram,
                nakham: req.body.formData.samanya_pariksha.nakham,
                bharam: req.body.formData.samanya_pariksha.bharam,
                nadi: req.body.formData.samanya_pariksha.nadi,
                rakta_bharam: req.body.formData.samanya_pariksha.rakta_bharam,
                twak: req.body.formData.samanya_pariksha.twak,
                rugnavastha: req.body.formData.samanya_pariksha.rugnavastha,
                doshavastha: req.body.formData.samanya_pariksha.doshavastha,
                doshasthanam: req.body.formData.samanya_pariksha.doshasthanam,
                dooshyavikriti: req.body.formData.samanya_pariksha.dooshyavikriti,
                sambhavya_vyadhi: req.body.formData.samanya_pariksha.sambhavya_vyadhi,
            },
            aushadhi_chikitsa: req.body.formData.aushadhi_chikitsa,
            chikitsa_kalam: req.body.formData.chikitsa_kalam,
            panchkarma: req.body.formData.panchkarma,
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