import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Mantesto from "../assets/Images/testoman.png";
import Wonmentesto from "../assets/Images/testowomen.png";
import { Fade } from 'react-reveal';

const TestimonialSection = () => {
    const card = [
        {
          id: 1,
          name: "Ahmed Maaz",
          image: Mantesto,
          description:
            "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown",
        },
        {
          id: 2,
          name: "Sara Ali",
          image: Wonmentesto,
          description:
            "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown",
        },
      ];

      const useStyle = makeStyles((theme) => ({
          root: {
              maxWidth: "1300px",
              margin: "0px auto 80px auto"
          },
          testimonialHeading: {
              fontSize: "40px",
              fontWeight: "600",
              lineHeight: "1.3",
              color: [theme.palette.black]
          },
          testimonialCard: {
              maxWidth: "600px",
              margin: "0 10px",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          },

      }));

      const classes = useStyle();

      return (
          <div>
              <Box mt={12} pb={4} >
                <Fade>
                    <Typography align="center" className={classes.testimonialHeading}>
                        Testimonial
                    </Typography>
                </Fade>  
              </Box>
              <Grid container spacing={2} className={classes.root}>
                  {card.map((person) => (
                    <Grid key={person.id} item container md={6} xs={12} justify="center">
                        <Fade up>
                            <Box p={2} className={classes.testimonialCard}>
                                <Box pt={2} pl={6} mb={1}>
                                    <Grid container spacing={2}>
                                        <Grid item container xs={1} alignItems="center" justify="flex-end">
                                            <img src={person.image} width="60px" height="60px" alt="user"/>
                                        </Grid>
                                        <Grid item container xs={10} alignItems="center">
                                            <Typography variant="h5">{person.name}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box pl={2}>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {person.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>    
                    </Grid>
                    ))}
              </Grid>
          </div>
      )
}

export default TestimonialSection;