import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { TextField, Button, Paper, Grid, Container } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion  elevation={0}  {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  margin:"10px 0",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");
  const [formData, setFormData] = React.useState({
    symptom: [],
    previousHistory: '',
    previousTreatment: '',
    visheshaParikshan: '',
    sadyovrittam: {
      mala_pravritti: '',
      mutra_pravritti: '',
      analam: '',
      nidra: '',
      artavam: '',
      aharam: '',
      viharam: '',
      satmya: '',
      manovastha: '',
      raja_pravritti: '',
      lmp: '',
      edd: '',
    },
    samanya_pariksha: {
      jivha: '',
      netram: '',
      nakham: '',
      bharam: '',
      nadi: '',
      rakta_bharam: '',
      twak: '',
      rugnavastha: '',
      doshavastha: '',
      doshasthanam: '',
      dooshyavikriti: '',
      sambhavya_vyadhi: '',
    },
    aushadhi_chikitsa: [],
    chikitsa_kalam: '',
    panchkarma: [],
  });
  
  // rest of your component
  
  
  const handleValueChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'symptom' || name === 'aushadhi_chikitsa' || name === 'panchkarma') {
      // If the field is an array, split the input value by commas and trim each element
      const valuesArray = value.split(',').map((item) => item.trim());
  
      // Update the formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: valuesArray,
      }));
    } else if (name.includes('.')) {
      // Split the name into sections
      const [section, field] = name.split('.');
  
      // Update the formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        [section]: {
          ...prevFormData[section],
          [field]: value,
        },
      }));
    } else if (name.includes('.')) {
      // Split the name into sections
      const [section, field] = name.split('.');
  
      // Update the formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        [section]: {
          ...prevFormData[section],
          [field]: value,
        },
      }));
    } else {
      // For other fields, continue with the original logic
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  let {patientId}=useParams();
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        process.env.BASE_URL+`/patient/createReport/new/${patientId}`,
        { formData },
        {
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
          },
        }
      );
      console.log(formData)
      // Handle form submission logic here
      console.log("Form submitted:", response);
    } catch (error) {
      console.error("Error submitting form:", formData);
    }
  };
  

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h5" align="center" gutterBottom>
            New Report Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Symptoms"
                  fullWidth
                  variant="outlined"
                  name="symptom"
                  value={formData.symptom}
                  onChange={handleValueChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Previous History"
                  fullWidth
                  variant="outlined"
                  name="previousHistory"
                  value={formData.previousHistory}
                  onChange={handleValueChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Previous Treatment"
                  fullWidth
                  variant="outlined"
                  name="previousTreatment"
                  value={formData.previousTreatment}
                  onChange={handleValueChange}
                />
              </Grid>
              <Grid item xs={12} marginBottom={"10px"}>
                <TextField
                  label="Vishesha Parikshan"
                  type="number"
                  fullWidth
                  variant="outlined"
                  name="visheshaParikshan"
                  value={formData.visheshaParikshan}
                  onChange={handleValueChange}
                  required
                />
              </Grid>
            </Grid>

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography marginLeft={"auto"} marginRight={"auto"}>
                  SadyoVrittam
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Fields related to sadyovrittam */}
                {Object.keys(formData.sadyovrittam).map((field) => (
                  <Grid item xs={12} key={`sadyovrittam_${field}`}>
                    <TextField
                      label={field.replace(/_/g, " ")}
                      fullWidth
                      variant="outlined"
                      name={`sadyovrittam.${field}`}
                      value={formData.sadyovrittam[field]}
                      onChange={handleValueChange}
                    />
                  </Grid>
                ))}
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography marginLeft={"auto"} marginRight={"auto"}>
                  Samanya Pariksha
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                
                {Object.keys(formData.samanya_pariksha).map((field) => (
                  <Grid item xs={12} key={`samanya_pariksha_${field}`}>
                    <TextField
                      label={field.replace(/_/g, " ")}
                      fullWidth
                      variant="outlined"
                      name={`samanya_pariksha.${field}`}
                      value={formData.samanya_pariksha[field]}
                      onChange={handleValueChange}
                    />
                  </Grid>
                ))}
              </AccordionDetails>
            </Accordion>
            <Grid item xs={12} marginBottom={"10px"}>
                <TextField
                  label="Aushadhi Chikitsa"
                  fullWidth
                  variant="outlined"
                  name="aushadhi_chikitsa"
                  value={formData.aushadhi_chikitsa}
                  onChange={handleValueChange}
                  
                />
              </Grid>
              <Grid item xs={12} marginBottom={"10px"}>
                <TextField
                  label="Chikitsa Kalam"
                  fullWidth
                  variant="outlined"
                  name="chikitsa_kalam"
                  value={formData.chikitsa_kalam}
                  onChange={handleValueChange}
                />
              </Grid>
              <Grid item xs={12} marginBottom={"10px"}>
                <TextField
                  label="Panchkarma"
                  fullWidth
                  variant="outlined"
                  name="panchkarma"
                  value={formData.panchkarma}
                  onChange={handleValueChange}
                />
              </Grid>

            <Button type="submit" style={{marginTop:"10px"}} fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
