import { Fragment } from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#2e2f33'
    },
  },
});

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Navbar/>
        <Outlet/> {/* Outlet is not a “real” Component, it is imported from react-router-dom. it will be replaced by the element rendered by the route */}
        <Footer/>
      </Fragment>
    </ThemeProvider>
  )
}
export default Layout