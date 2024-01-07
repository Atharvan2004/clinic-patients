import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const PatientDetails = ({ patient }) => (
  <Card style={{ margin: "10px 0" }}>
    <CardContent style={{ padding: "5px 15px" }}>
      <Typography variant="h6">{patient.name}</Typography>
      <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}} >
      <Typography>{`Age: ${patient.age}`}</Typography>
      <Typography marginRight={"10px"} align="right" fontSize={"small"}>
        {patient.occupation}
      </Typography>
      </div>
      
      <Typography>{`Address: ${patient.address}`}</Typography>
      <Typography>{`Phone: ${patient.phone}`}</Typography>
    </CardContent>
  </Card>
);

function ReportDetails({ report }) {
  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        style={{ marginBottom: "10px" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2">{`Date: ${new Date(
              report.date
            ).toLocaleDateString()}`}</Typography>
            <Typography style={{marginLeft:"50px"}} variant="subtitle2">
              Chikitsa Kalam: {report.previousHistory}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              style={{ marginTop: "", fontSize: "large" }}
              color={"primary"}
              variant="body1"
            >
              Report Details
            </Typography>
            <Typography style={{ marginTop: "" }} variant="body1">
              Vishesha Parikshan: {report.visheshaParikshan}
            </Typography>
          </div>

          <Divider style={{ margin: "10px 0" }} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" style={{ fontSize: "medium" }}>
              Symptoms:
            </Typography>
            <Typography
              style={{ justifyContent: "center", textAlign: "center" }}
            >
              - {report.symptom.join(", ")}
            </Typography>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" style={{ fontSize: "medium" }}>
              Previous History:
            </Typography>
            <Typography>- {report.previousHistory}</Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" style={{ fontSize: "medium" }}>
              Previous Treatment:
            </Typography>
            <Typography>- {report.previousTreatment}</Typography>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" style={{ fontSize: "medium" }}>
              Panchakarma:
            </Typography>
            <Typography>
              {report.panchkarma.length == 0
                ? "none"
                : report.panchkarma.join(", ")}
            </Typography>
          </div>
          <br />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{paddingRight:"5px"}}>
              <Typography variant="h6" style={{ fontSize: "medium"}}>Sadyovrittam</Typography>
              {Object.keys(report.sadyovrittam).map((field) => {
                return (
                  <Typography
                    key={field}
                    style={{ fontSize: "small", fontFamily: "Gill Sans"}}
                    variant="body1"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}:{" "}
                    {report.sadyovrittam[field] === ""
                      ? "none"
                      : report.sadyovrittam[field]}
                  </Typography>
                );
              })}
            </div>

            <div>
              <Typography variant="h6" style={{ fontSize: "medium" }}>Samanya Pariksha</Typography>
              {Object.keys(report.samanya_pariksha).map((field) => {
                return (
                  <Typography
                    key={field}
                    style={{ fontSize: "small", fontFamily: "cursive" }}
                    variant="body1"
                  >
                    {field}:{" "}
                    {report.samanya_pariksha[field] === ""
                      ? "none"
                      : report.samanya_pariksha[field]}
                  </Typography>
                );
              })}
            </div>
          </div>
          <br />

          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" style={{ fontSize: "medium" }}>
              Aushadhi Chikitsa:
            </Typography>
            <Typography>- {report.previousHistory}</Typography>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" style={{ fontSize: "medium" }}>
              Previous History:
            </Typography>
            <Typography>- {report.previousHistory}</Typography>
          </div>

          {/* Add more fields as needed */}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default function DisplayData() {
  let { patientId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `/patient/getPatientDetails/${patientId}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [patientId]);

  if (!data) {
    // Loading state or handle error
    return <Typography>No data...</Typography>;
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <PatientDetails patient={data.patient} />
      {data.reportList.map((report) => {
        return <ReportDetails key={report._id} report={report} />;
      })}
    </Container>
  );
}
