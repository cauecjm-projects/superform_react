import React, { Component, Fragment } from 'react';
import './App.css';
import "@fontsource/poiret-one";

import { Container, Box, Typography } from '@material-ui/core';

import FormCadastro from './components/SuperForm/FormCadastro';

function App() {
  return (
    <Fragment>
      <Container component="article" maxWidth="sm">
        <Box mt={10}>
          <Typography variant="h4" component="h1" align="center" color="inherit">SuperForm</Typography>
        </Box>
        <Box my={5}>
          <FormCadastro handleSubmitForm={handleSubmitForm} />
        </Box>
      </Container>
    </Fragment>
  );
}

function handleSubmitForm(dataForm) {
  console.log(dataForm);
}

export default App;
