import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



export default function SearchResult({personList}) {
  return (personList.map((person,index) => {
    return (
      <Card key={index} sx={{ width: "90%", marginLeft: "auto", marginRight: "auto",marginBottom:"10px", marginTop:"0" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {person.occupation}
          </Typography>
          <Typography variant="h5" component="div" defaultValue={"sdfasdf"}>
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
          <Button size="small">Full Details</Button>
          <Button size="small">New Report</Button>
        </CardActions>
      </Card>
    );
  }))
}
