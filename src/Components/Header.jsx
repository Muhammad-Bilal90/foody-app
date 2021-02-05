import React, { useState } from "react";
import "../assets/css/App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Hidden, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
import Logo from "../assets/Images/LogoLight.png";

const Header = () => {
    const [hamburger, setHamburger] = useState("none");

    const { ref: nav } = useWebAnimations({
        ...fadeIn,
      });

    const useStyle = makeStyles((theme) => ({
        Nav: {
            width: "100%",
            height: "70px",
            position: "relative",
            zIndex: "200",
            [theme.breakpoints.up("md")]: {
                height: "auto",
            },
        },
        navBar: {
            position: "absolute",
            zIndex: 100,
        },
        logo: {
            width: "90px",
            height: "50px",
        },
        linksStyle: {
            textDecoration: "none",
            margin: "0 12px",
            color: [theme.palette.white],
            [theme.breakpoints.down("sm")]: {
                textAlign: "center",
                display: "block",
                color: [theme.palette.blackSecondary],
                margin: "0 0px",
                padding: "10px 0",
                "&:hover": {
                    background: [theme.palette.whiteSeconary],
                },
            }
        },
        btnSpacing: {
            margin: "0 20px"
        },
        hamIcon: {
            fontSize: "30px",
            paddingRight: "8px",
            cursor: "pointer",
        },
        linksMain: {
            [theme.breakpoints.down("sm")]: {
                zIndex: "10",
                position: "absolute",
                left: 0,
                width: "100%",
                background: [theme.palette.white],
                top: 70,
                display: hamburger,
                transition: "0.5s",
                flexDirection: "column",
                justifyContent: "center",
                padding: 0,
                backgrounOpacity: 0.5,
                boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }
        }
    }));
    // console.log(makeStyle.theme)
    const classes = useStyle();
    return (
        <div style={{ position: "relative" }}>
            <Grid container className={classes.Nav} ref={nav}>
                <Grid item container ms={12} justify="space-between" alignItems="center" className={classes.navBar} >
                    <Box p={1}>
                        <img src={Logo} className={classes.logo} alt="Logo" />
                    </Box>
                    <Box>
                        <Hidden mdUp>
                            {hamburger === "none" ? (
                                <MenuIcon
                                    onClick={() => setHamburger("flex")}
                                    className={classes.hamIcon}
                                />
                            ) : (
                                    <ClearIcon
                                        onClick={() => setHamburger("none")}
                                        className={classes.hamIcon}
                                    />
                                )}
                        </Hidden>
                        <Box px={2} className={classes.linksMain} ref={nav}>
                            <a href='#home' className={classes.linksStyle}>
                                Home
                            </a>
                            <a href='#services' className={classes.linksStyle}>
                                Services
                            </a>
                            <a href='#contact' className={classes.linksStyle}>
                                Contact
                            </a>
                            <Hidden smDown>
                                <Button variant="contained" color="primary" className={`primaryButton ${classes.btnSpacing}`}>
                                    Order Now
                            </Button>
                            </Hidden>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;