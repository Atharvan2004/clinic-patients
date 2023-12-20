import { Patient } from "../models/patients.js";

async function findPatientByQuery(query) {
    try {

        const regexQuery = {
            $or: [
                { "name": { $regex: new RegExp(query, 'i') } },
                { "phone": { $regex: new RegExp(query, 'i') } }
            ]
        };

        const patients = await Patient.find(regexQuery);

        // Check if the product was found
        if (patients.length == 0) {
            return "No patients found"
        } else
            return patients;
    } catch (error) {
        throw error;
    }
}

export {findPatientByQuery}