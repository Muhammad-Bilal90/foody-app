import React from "react";
import "../assets/css/App.css";
import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "../assets/Images/facebook.png";
import TwitterIcon from "../assets/Images/twitter.png";
import GmailIcon from "../assets/Images/google-plus.png";
// import useWebAnimations, { fadeInDown, fadeInRight } from "@wellyshen/use-web-animations"
import Fade from "react-reveal/Fade";

const ContactSection = () => {

    // const { keyframes, timing } = fadeInDown
    // const { ref: formContent1 } = useWebAnimations({
    //     keyframes,
    //     timing: {
    //         ...timing,
    //         delay: 500,
    //     }
    // });

    // const { ref: formContent2 } = useWebAnimations({
    //     keyframes,
    //     timing: {
    //         ...timing,
    //         delay: 700,
    //     }
    // });

    // const { ref: contactForm } = useWebAnimations({
    //     ...fadeInRight,
    // });

    const useStyle = makeStyles((theme) => ({
        root: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            margin: "60px 0"
        },
        contactBackgroundMain: {
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
                alignItems: "flex-start",
            }
        },
        backgroundContact: {
            position: "absolute",
            width: "100%",
            height: "300px",
            zIndex: "-1",
            [theme.breakpoints.down("sm")]: {
                height: "500px",

            }
        },
        formContent: {
            width: "100%",
            maxWidth: "900px",
            zIndex: "2",
            [theme.breakpoints.down("sm")]: {
                padding: "50px 10px"
            }
        },
        contactHeading: {
            fontSize: "40px",
            fontWeight: "600",
            lineHeight: "1.3",
            color: "white"
        },
        contactParagraph: {
            fontSize: "17px",
            color: "#f3f3f3"
        },
        socialIcons: {
            width: "30px",
            height: "30px",
            marginLeft: "14px",
            paddingTop: "20px",
            cursor: "pointer"
        },
        contactForm: {
            justifyContent: "flex-start",
            [theme.breakpoints.down("sm")]: {
                justifyContent: "center"
            }
        },
        contactFormChild: {
            maxWidth: "350px",
            width: "100%",
            boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            background: "white",
        },
        submitBtn: {
            margin: "30px 0 0 0",
            width: "12 0px"
        }
    }));

    const classes = useStyle();
    return (
        <div className={classes.root} id="contact">
            <div className={classes.contactBackgroundMain}>
                <div className={`contactBackground ${classes.backgroundContact}`}></div>
            </div>
            <Grid container spacing={2}>
                <Grid item container md={7} justify="flex-end" alignItems="center">
                    <div className={classes.formContent}>
                    <Fade down delay={500}>
                        <Box px={2}>
                            <Typography gutterBottom className={classes.contactHeading}>Get in touch</Typography>
                            <Typography variant="subtitle1" gutterBottom className={classes.contactParagraph}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur possimus quaerat vitae rerum reprehenderit
                                laudantium, eveniet nesciunt quis. Omnis, blanditiis!
                            </Typography>
                        </Box>
                    </Fade>
                    <Fade down delay={800}>
                        <img src={FacebookIcon} className={classes.socialIcons} alt="Facebook" width="30px" height="30px" />
                        <img src={GmailIcon} className={classes.socialIcons} alt="Gmail" width="30px" height="30px" />
                        <img src={TwitterIcon} className={classes.socialIcons} alt="Twitter" width="30px" height="30px" />        
                    </Fade>
                    </div>    
                </Grid>
                <Grid item container md={5} className={classes.contactForm}>
                    <Fade right>
                        <Box mx={2} p={4} className={classes.contactFormChild}>
                            <Box py={2}>
                                <Typography variant="h5" align="center" color="primary"><b>Contact Us</b></Typography>
                            </Box>
                            <TextField id="standard-basic" label="Name" color="primary" style={{ width: "100%", margin: "5px 0" }}></TextField>
                            <TextField id="standard-basic1" label="Email" color="primary" style={{ width: "100%", margin: "5px 0" }}></TextField>
                            <TextField id="standard-multiline-static" label="Comment" color="primary" style={{ width: "100%", margin: "5px 0" }} multiline rows={4}></TextField>
                            <Button variant="contained" className={`primaryButton ${classes.submitBtn}`}>Submit</Button>
                        </Box>
                    </Fade>    
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactSection;