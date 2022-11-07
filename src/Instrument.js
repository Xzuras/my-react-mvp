import React, { useState, useEffect } from "react";
import DeleteInstrument from "./DeleteInstrument";
import UpdateInstrument from "./UpdateInstrument";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
const StyledDiv = styled.div`
    padding-top: 1px;
`;

const Instrument = () => {
  const [instrument, setInstrument] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/instrument")
      .then((response) => response.json())
      .then((result) => {
        setInstrument(result);
      });
  }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const resultCard = instrument.map((instrument) => (
    <StyledDiv key={instrument.id}>
      <Box
        sx={{
          border: 5,
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {bull}
            {"Type - "}
            {instrument.kind}
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {bull}
            {"Family - "}
            {instrument.family}
          </Typography>
          <Typography variant="body2">
            {bull}
            {"Model - "} {instrument.model}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <DeleteInstrument instrumentId={instrument.id} />
          <UpdateInstrument instrumentId={instrument.id} />
        </CardActions>
      </Box>
      <Divider />
    </StyledDiv>
  ));

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      <Card variant="outlined">{resultCard}</Card>
    </Stack>
  );
};

export default Instrument;
