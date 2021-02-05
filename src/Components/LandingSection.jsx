import React from "react";
import "../assets/css/App.css";
import { Grid, Button, Typography, Hidden, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LandingMobile from "../assets/Images/Landingmobile.png";
import useWebAnimations, { fadeInRight, fadeInLeft } from "@wellyshen/use-web-animations";

const LandingSection = () => {
  const useStyle = makeStyles((theme) => ({
    landing: {
      height: "100vh",
      [theme.breakpoints.down("sm")]: {
        height: "auto"
      }
    },
    tagline: {
      fontSize: "30px",
      fontWeight: "600",
      lineHeight: "1.3",
      color: [theme.palette.black],
      [theme.breakpoints.up("sm")]: {
        fontSize: "40px"
      }
    },
    paragraph: {
      [theme.breakpoints.up("md")]: {
        paddingRight: "20px"
      }
    },
    changingDiv: {
      height: "500px",
      width: "100%",
      backgroundImage: "linear-gradient( to right top,#00c9a7, #00bbbe, #00aad0, #0097d6, #0081cf)",
      zIndex: "-1"
    },
    blobMain: {
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: -10
    },
    blob: {
      width: "100%",
      height: "100%"
    },
    mobileParent: {
      width: "250px",
      height: "500px",
      position: "absolute",
      zIndex: "-1",
      [theme.breakpoints.down("sm")]: {
        width: "150px",
        height: "300px",
      },
    },
    mobile: {
      width: "250px",
      height: "500px",
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        width: "150px",
        height: "300px",
      },
    }
  }));

  // const { keyframes: phoneAnumkey, timing: phoneAnumTime } = fadeInRight;
  const { ref: phone } = useWebAnimations({
    ...fadeInRight,
    // keyframes: phoneAnumkey,
    // timing: {
    //   ...phoneAnumTime,
    //   iterations: 1,
    //   delay: "1000",
    //   easing: "ease",
    // },
  });

  const { ref: landingDiv } = useWebAnimations({
    ...fadeInLeft,
  });
  const classes = useStyle();

  return (
    <div id="home">
      <Grid container spacing={1} style={{ position: "relative", zIndex: 1 }} className={classes.landing}>
        <Grid item container md={6} justify="center" alignItems="center" style={{ zIndex: -1 }}>
          <Box px={4} style={{ width: "700px" }} ref={landingDiv}>
            <div>
              <Typography className={classes.tagline}>Faster than</Typography>
              <Typography className={classes.tagline}>you can imagine</Typography>
              <Typography gutterBottom className={classes.tagline}>always on time</Typography>
            </div>
            <Box py={1}>
              <Typography
                variant="h6"
                color="textSecondary"
                gutterBottom
                className={classes.paragraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the you can imagine industry's
                standard dummy text.
              </Typography>
            </Box>
            <Box my={2}>
              <Button variant="contained" className={`primaryButton`}>Order Now</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item container md={6} justify="center" alignItems="center" style={{ position: "relative", zIndex: -1 }}>
          <Hidden mdUp>
            <div className={classes.changingDiv}></div>
          </Hidden>
          <Hidden smDown>
            <div className={classes.blobMain}>
              <svg className={classes.blob}
                viewBox="0 0 1003.303 1079.781"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="1.17"
                    y1="-0.184"
                    x2="0.061"
                    y2="1.014">
                    <stop offset="0" stopColor="#0081cf" />
                    <stop offset="1" stopColor="#00c9a7" />
                  </linearGradient>
                </defs>
                <path
                  className="a"
                  d="M1140.1,1243s-430.708,511.208-96.981,904.836,876.531,0,876.531,0V1243Z"
                  transform="translate(-916.343 -1243)" />
              </svg>
            </div>
          </Hidden>
          <div className={classes.mobileParent} ref={phone}>
            <img src={LandingMobile} alt="Landing Mobile" className={classes.mobile} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default LandingSection;