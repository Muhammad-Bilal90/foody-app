import React from "react";
import { Grid,Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  footerRoot: {
    background: [theme.palette.black],
    color: "white",
  },
  footer: {
    
  }
}));
const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerRoot}>
        <Box p={4}>
            <Grid item container xs={12} justify="center" alignItems="center">
                <Typography>Created by <b>Muhammad Bilal</b></Typography>
            </Grid>
        </Box>    
    </div>
  );
};

export default Footer;