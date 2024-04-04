import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function MedicalReportForm() {
  const [formData, setFormData] = useState({
    date: new Date(),
    symptom: [{ symptom: "", duration: "" }],
    previousHistory: "",
    previousTreatment: "",
    visheshaParikshan: "",
    sadyovrittam: {
      mala_pravritti: "",
      mutra_pravritti: "",
      analam: "",
      nidra: "",
      artavam: "",
      aharam: "",
      viharam: "",
      satmya: "",
      manovastha: "",
      raja_pravritti: "",
      lmp: "",
      edd: "",
    },
    samanya_pariksha: {
      jivha: "",
      netram: "",
      nakham: "",
      bharam: "",
      nadi: "",
      rakta_bharam: "",
      twak: "",
      rugnavastha: "",
      doshavastha: "",
      doshasthanam: "",
      dooshyavikriti: "",
      sambhavya_vyadhi: "",
    },
    aushadhi_chikitsa: [{ aushadhi: "", duration: "" }],
    chikitsa_kalam: "",
    panchkarma: [{ panchkarma: "", duration: "" }],
  });

  const { patientId } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNestedChange = (index, field, value, type) => {
    const updatedFormData = { ...formData };
    updatedFormData[type][index][field] = value;
    setFormData(updatedFormData);
  };

  const handleAddItem = (type) => {
    setFormData({
      ...formData,
      [type]: [...formData[type], { aushadhi: "", duration: "" }],
    });
  };

  const handleAddSymptom = (type) => {
    setFormData({
      ...formData,
      [type]: [...formData[type], { [type]: "", duration: "" }],
    });
  };

  // const handleSymptomChange = (index, value) => {
  //   const updatedSymptoms = [...formData.symptom];
  //   updatedSymptoms[index] = value;
  //   setFormData({
  //     ...formData,
  //     symptom: updatedSymptoms
  //   });
  // };

  // const handleAushadhiChange = (index, value) => {
  //   const updatedAushadhi = [...formData.aushadhi_chikitsa];
  //   updatedAushadhi[index] = value;
  //   setFormData({
  //     ...formData,
  //     aushadhi_chikitsa: updatedAushadhi
  //   });
  // };

  // const handlePanchkarmaChange = (index, value) => {
  //   const updatedPanchkarma = [...formData.panchkarma];
  //   updatedPanchkarma[index] = value;
  //   setFormData({
  //     ...formData,
  //     panchkarma: updatedPanchkarma
  //   });
  // };

  const handleSadyovrittamChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      sadyovrittam: {
        ...formData.sadyovrittam,
        [name]: value,
      },
    });
  };

  const handleSamanyaParikshaChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      samanya_pariksha: {
        ...formData.samanya_pariksha,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3000/patient/createReport/new/${patientId}`, {
        formData: formData,
      })
      .catch((e) => {
        console.log(e + " d");
      });
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "12px" }}>
      {formData.symptom.map((item, index) => (
        <div key={index}>
          <label htmlFor={`symptom_${index}`}>Symptom: </label>
          <input
            type="text"
            id={`symptom_${index}`}
            name={`symptom_${index}`}
            value={item.symptom}
            onChange={(e) =>
              handleNestedChange(index, "symptom", e.target.value, "symptom")
            }
            style={{
              marginBottom: "8px",
              padding: "4px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
              // Adjust width as needed
              boxSizing: "border-box", // Ensure padding and border don't increase width
            }}
          />
          <br />
          <label htmlFor={`duration_${index}`}>Duration: </label>
          <input
            type="text"
            id={`duration_${index}`}
            name={`duration_${index}`}
            value={item.duration}
            onChange={(e) =>
              handleNestedChange(index, "duration", e.target.value, "symptom")
            }
            style={{
              marginBottom: "8px",
              padding: "4px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
              // Adjust width as needed
              boxSizing: "border-box", // Ensure padding and border don't increase width
            }}
          />
        </div>
      ))}
      <Button
        
        className="mx-auto px-2 mt-3 mb-3 rounded-full"
        onClick={() => handleAddSymptom("symptom")}
        variant="outlined"
      >
        Add Symptom
      </Button>
      <br />
      <br />

      <label htmlFor="previousHistory">Previous History: </label>
      <input
        type="text"
        id="previousHistory"
        name="previousHistory"
        value={formData.previousHistory}
        onChange={handleChange}
        style={{
          marginBottom: "8px",
          padding: "4px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          fontSize: "14px",
          // Adjust width as needed
          boxSizing: "border-box", // Ensure padding and border don't increase width
        }}
      />
      <br />
      <br />

      <label htmlFor="previousTreatment">Previous Treatment: </label>
      <input
        type="text"
        id="previousTreatment"
        name="previousTreatment"
        value={formData.previousTreatment}
        onChange={handleChange}
        style={{
          marginBottom: "8px",
          padding: "4px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          fontSize: "14px",
          // Adjust width as needed
          boxSizing: "border-box", // Ensure padding and border don't increase width
        }}
      />
      <br />
      <br />

      <label htmlFor="visheshaParikshan">Vishesha Parikshan: </label>
      <input
        type="number"
        id="visheshaParikshan"
        name="visheshaParikshan"
        value={formData.visheshaParikshan}
        onChange={handleChange}
        style={{
          marginBottom: "8px",
          padding: "4px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          fontSize: "14px",
          // Adjust width as needed
          boxSizing: "border-box", // Ensure padding and border don't increase width
        }}
      />
      <br />
      <br />

      <fieldset style={{ marginBottom: "15px" }}>
        <legend style={{ marginLeft: "35%" }}>Sadyovrittam</legend>
        {Object.entries(formData.sadyovrittam).map(([key, value]) => (
          <div key={key} style={{ paddingTop: "5px" }}>
            <label htmlFor={key}>{key.replace(/_/g, " ")}: </label>
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleSadyovrittamChange}
              style={{
                marginBottom: "8px",
                padding: "4px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
                // Adjust width as needed
                boxSizing: "border-box", // Ensure padding and border don't increase width
              }}
            />
          </div>
        ))}
      </fieldset>
      <br />

      <fieldset style={{ marginBottom: "15px" }}>
        <legend style={{ marginLeft: "27%" }}>Samanya Pariksha</legend>
        {Object.entries(formData.samanya_pariksha).map(([key, value]) => (
          <div key={key} style={{ paddingTop: "5px" }}>
            <label htmlFor={key}>{key.replace(/_/g, " ")}: </label>
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleSamanyaParikshaChange}
              style={{
                marginBottom: "8px",
                padding: "4px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
                // Adjust width as needed
                boxSizing: "border-box", // Ensure padding and border don't increase width
              }}
            />
          </div>
        ))}
      </fieldset>
      <br />

      {/* Aushadhi Chikitsa fields */}
      {formData.aushadhi_chikitsa.map((item, index) => (
        <div key={index}>
          <label htmlFor={`aushadhi_${index}`}>Aushadhi: </label>
          <input
            type="text"
            id={`aushadhi_${index}`}
            name={`aushadhi_${index}`}
            value={item.aushadhi}
            onChange={(e) =>
              handleNestedChange(
                index,
                "aushadhi",
                e.target.value,
                "aushadhi_chikitsa"
              )
            }
            style={{
              marginBottom: "8px",
              padding: "4px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
              // Adjust width as needed
              boxSizing: "border-box", // Ensure padding and border don't increase width
            }}
          />
          <br />
          <label htmlFor={`duration_${index}`}>Duration: </label>
          <input
            type="text"
            id={`duration_${index}`}
            name={`duration_${index}`}
            value={item.duration}
            onChange={(e) =>
              handleNestedChange(
                index,
                "duration",
                e.target.value,
                "aushadhi_chikitsa"
              )
            }
            style={{
              marginBottom: "8px",
              padding: "4px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
              // Adjust width as needed
              boxSizing: "border-box", // Ensure padding and border don't increase width
            }}
          />
        </div>
      ))}

      <Button
        
        className="mx-auto px-2 mt-3 mb-3 rounded-full"
        onClick={() => handleAddItem("aushadhi_chikitsa")}
        variant="outlined"
      >
        Add Aushadhi
      </Button>

      <br />
      <br />

      <label htmlFor="previousHistory">Chikitsa Kalam: </label>
      <input
        type="text"
        id="chikitsa_kalam"
        name="chikitsa_kalam"
        value={formData.chikitsa_kalam}
        onChange={handleChange}
        style={{
          marginBottom: "8px",
          padding: "4px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          fontSize: "14px",
          // Adjust width as needed
          boxSizing: "border-box", // Ensure padding and border don't increase width
        }}
      />
      <br />
      <br />

      {formData.panchkarma.map((item, index) => (
        <div key={index}>
          <label htmlFor={`panchkarma_${index}`}>Panchkarma: </label>
          <input
            type="text"
            id={`panchkarma_${index}`}
            name={`panchkarma_${index}`}
            value={item.panchkarma}
            onChange={(e) =>
              handleNestedChange(
                index,
                "panchkarma",
                e.target.value,
                "panchkarma"
              )
            }
            style={{
              marginBottom: "8px",
              padding: "4px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
              // Adjust width as needed
              boxSizing: "border-box", // Ensure padding and border don't increase width
            }}
          />
          <br />
          <label htmlFor={`duration_${index}`}>Duration: </label>
          <input
            type="text"
            id={`duration_${index}`}
            name={`duration_${index}`}
            value={item.duration}
            onChange={(e) =>
              handleNestedChange(
                index,
                "duration",
                e.target.value,
                "panchkarma"
              )
            }
            style={{
              marginBottom: "8px",
              padding: "4px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
              // Adjust width as needed
              boxSizing: "border-box", // Ensure padding and border don't increase width
            }}
          />
        </div>
      ))}
      <Button
        
        className="mx-auto px-2 mt-3 mb-3 rounded-full"
        onClick={() => handleAddSymptom("panchkarma")}
        variant="outlined"
      >
        Add Panchkarma
      </Button>
      <br />
      <br />
      <div className="flex justify-center">
        <Button type="submit" className="mx-auto px-4 mb-5" variant="outlined">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default MedicalReportForm;
