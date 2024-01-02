import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const PatientDetails = ({ patient }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{patient.name}</Typography>
      <Typography color="textSecondary">{patient.occupation}</Typography>
      <Typography>{`Age: ${patient.age}`}</Typography>
      <Typography>{`Address: ${patient.address}`}</Typography>
      <Typography>{`Phone: ${patient.phone}`}</Typography>
    </CardContent>
  </Card>
);

const ReportDetails = ({ report }) => (
  <Card style={{ marginTop: "20px" }}>
    <CardContent>
      <Typography variant="h6">Report Details</Typography>
      <Typography>{`Date: ${new Date(
        report.date
      ).toLocaleDateString()}`}</Typography>
      <Divider style={{ margin: "10px 0" }} />
      <Typography variant="h6">Symptoms:</Typography>
      <Typography>{report.symptom.join(", ")}</Typography>
      {/* Add other report details here */}
    </CardContent>
  </Card>
);

export default function DisplayData({ details }) {
  let { patientId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3000/patient/getPatientDetails/${patientId}`
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
      <ReportDetails report={data.reportList[0]} />
    </Container>
  );
}
