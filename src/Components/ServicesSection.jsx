import React from "react";
import "../assets/css/App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Button, Paper } from "@material-ui/core";
import ShopIcon from "../assets/Images/shopIcon.png";
import FoodIcon from "../assets/Images/foodIcon.png";
import DeleveryIcon from "../assets/Images/deleveryIcon.png";
import DiscountIcon from "../assets/Images/discountIcon.png";
import { Fade } from 'react-reveal';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: "Delicious food",
            image: FoodIcon,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting ",
          },
          {
            id: 2,
            title: "Discounts",
            image: DiscountIcon,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting ",
          },
          {
            id: 3,
            title: "Fast delevery",
            image: DeleveryIcon,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting ",
          },
          {
            id: 4,
            title: "Various branches",
            image: ShopIcon,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting ",
          },
    ];

    const useStyle = makeStyles((theme) => ({
        servicesMain: {
            maxWidth: "1500px",
            margin: "50px auto",
            padding: "20px"
        },
        cards: {
            maxWidth: "600px",
            [theme.breakpoints.down("sm")]: {
                maxWidth: "1000px"
            }
        },
        serviceHeaders: {
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "1.3",
            color: [theme.palette.black],
            [theme.breakpoints.up("sm")]: {
                fontSize: "40px"
            }
        },
        serviceParagraphs: {
            paddingBottom: "20px",
            [theme.breakpoints.up("md")]: {
              paddingRight: "20px",
            },
          },
          serviceTexts: {
            paddingBottom: "20px",
            margin: "40px 0px",
            [theme.breakpoints.up("md")]: {
              margin: "0 30px",
            },
          },
    }));

    const classes = useStyle();
    return (
        <div className={classes.servicesMain} id="services">
            <Grid container spacing={2} justify="center">
                <Fade left>
                    <Grid item container spacing={3} md={6} justify="center" alignItems="center" className={classes.cards}>
                        {services.map((service) => (
                            <Grid item sm={6} key={service.id}>
                                <Paper elevation={2}>
                                    <Box px={2} py={3}>
                                        <div>
                                            <Box mb={1}>
                                                <img src={service.image} width="70px" height="70px" alt={service.title}/>
                                            </Box>
                                            <Typography gutterBottom variant="h6">
                                                <b>{service.title}</b>
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                {service.description}
                                            </Typography>
                                        </div>
                                    </Box>
                                </Paper>
                            </Grid>    
                        ))}
                    </Grid>
                </Fade>    
                <Grid item container md={6} alignItems="center">
                        <Box className={classes.serviceTexts}>
                            <Fade down delay={500}>
                                <Typography className={classes.serviceHeaders}>Our service would</Typography>
                            </Fade>
                            <Fade down delay={600}>
                                <Typography gutterBottom className={classes.serviceHeaders} style={{ marginBottom: "30px"}}>be your best fit</Typography>
                            </Fade>
                            <Fade down delay={800}>
                                <Typography variant="h6" color="textSecondary" gutterBottom className={classes.serviceParagraphs}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the you can imagine industry's
                                standard dummy text.
                                </Typography>
                            </Fade>
                            <Fade down delay={1000}>    
                                <Button variant="contained" className={`primaryButton`}>Our Services</Button>
                            </Fade>    
                        </Box>
                </Grid>
            </Grid>    
        </div>
    )
}

export default ServicesSection;