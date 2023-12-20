import mongoose from "mongoose";
import { conn } from "./conn.js";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    },
    occupation: {
        type: String
    },
    reports: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            // Reference to the 'Product' model (if needed)
            ref: 'Product',
        },
        _id: false
    },]
})

const Patient = mongoose.model('Patient', patientSchema);


// const samplePatient = {
//     name: "John Doe",
//     address: "123 Main St, Cityville",
//     phone: "9854756122",
//     age: new Date("1980-01-01"),
//     occupation: "Engineer",
//     reports: []
// };

// Patient.insertMany(samplePatient)
//     .then((result) => {
//         console.log('Documents inserted:', result);
//     })
//     .catch((error) => {
//         console.error('Error inserting documents:', error);
//     });

export {Patient}