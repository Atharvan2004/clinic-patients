import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SearchResult({ personList }) {
  console.log(personList)
  if (!personList || personList.length==0 || personList[0]==undefined) {
    return <Typography style={{color:"#ff8383"}} variant="body1" margin={"10px"}>No patients found, go to home page and please search again...</Typography>;
  } else {
    return (
      <>
        <Typography
          variant="subtitle1"
          gutterBottom
          marginLeft={"18px"}
          marginBottom={"10px"}
          style={{color:"#1fdd1f"}}
        >
          {personList[0].length} matching results...
        </Typography>
        {personList[0].map((person, index) => {
          return (
            <Card
              key={index}
              sx={{
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {person.occupation}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  defaultValue={"sdfasdf"}
                >
                  {person.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {person.age}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {person.address}
                  <br />
                </Typography>
                <Typography variant="body2">
                  {person.phone}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" type="a"
                  href={`/new-report/${person._id}`}>New Report</Button>
                <Button
                  size="small"
                  type="a"
                  href={`/patient-details/${person._id}`}
                >
                  Full Details
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </>
    );
  }
}
