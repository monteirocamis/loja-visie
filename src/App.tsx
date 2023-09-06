

import { Router } from "./router";

import Navbar from './components/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  purple } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: purple,

  },
});

function App() {

  return (<>
    <ThemeProvider theme={theme}>
    <Navbar/>
 
    <Router/>
    </ThemeProvider>
  </>
  )
}

export default App
