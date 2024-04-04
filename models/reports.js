import mongoose from "mongoose";
import { conn } from "./conn.js";

const reportSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    symptom:[
        {
            symptom:String,
            duration:String
        }
    ],
    previousHistory: String,
    previousTreatment: String,
    visheshaParikshan: Number,

    sadyovrittam: {
        mala_pravritti: String,
        mutra_pravritti: String,
        analam: String,
        nidra: String,
        artavam: String,
        aharam: String,
        viharam: String,
        satmya: String,
        manovastha: String,
        raja_pravritti: String,
        lmp: String,
        edd: String,
    },

    samanya_pariksha: {
 
        jivha: String,
        netram: String,
        nakham: String,
        bharam: Number,
        nadi: String,
        rakta_bharam: String,
        twak: String,
        rugnavastha: String,
        doshavastha: String,
        doshasthanam: String,
        dooshyavikriti: String,
        sambhavya_vyadhi: String,

    },

    aushadhi_chikitsa: [
        {
            aushadhi:String,
            duration:String
        }
    ],

    chikitsa_kalam: String,
    panchkarma: [
        {
            panchkarma:String,
            duration:String
        }
    ],

})

const Report = mongoose.model("Report", reportSchema);
export {Report}

// const report = {
//     date: new Date(),
//     symptom: ["Fever", "Headache"],
//     previousHistory: "No significant history",
//     previousTreatment: "Antibiotics",
//     visheshaParikshan: 8,
//     sadyovrittam: {
//         mala_pravritti: "Normal",
//         mutra_pravritti: "Frequent",
//         analam: "Normal",
//         nidra: "Disturbed",
//         artavam: "Regular",
//         aharam: "Balanced diet",
//         viharam: "Regular exercise",
//         satmya: "No specific sensitivities",
//         manovastha: "Stressed",
//         raja_pravritti: "Normal",
//         lmp: "2023-11-15",
//         edd: "2024-08-22"
//     },
//     samanya_pariksha: {
//         jivha: "Coated",
//         netram: "Normal",
//         nakham: "Brittle",
//         bharam: 72,
//         nadi: "80",
//         rakta_bharam: "Normal",
//         twak: "Clear",
//         rugnavastha: "Not Ill",
//         doshavastha: "Balanced",
//         doshasthanam: "Vata",
//         dooshyavikriti: "None",
//         sambhavya_vyadhi: "None"
//     },
//     aushadhi_chikitsa: ["Paracetamol", "Ibuprofen"],
//     chikitsa_kalam: "3 days",
//     panchkarma: ["Vamana", "Virechana"]
// }



// await Report.insertMany(report)
//     .then((result) => {
//         console.log('Documents inserted:', result);
//     })
//     .catch((error) => {
//         console.error('Error inserting documents:', error);
//     });