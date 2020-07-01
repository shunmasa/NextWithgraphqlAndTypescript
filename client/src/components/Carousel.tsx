import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ScrollAnimation from 'react-animate-on-scroll';
import Button from "@material-ui/core/Button";
import Link from 'next/link'
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url("/assets/nature.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "64em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/nature.jpg")`,
      backgroundAttachment: "inherit"
    }
  },
   contactButton: {
    fontFamily: "Pacifico",
    fontSize: "1.5rem",
    textTransform: "none",
    color: "white",
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: "#ff8c21",
    marginRight: "8em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
}));

export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "10em",
          textAlign: matchesSM ? "center" : "inherit"
        }}
      >
        <Grid container direction="column">
          <Grid item>
          <ScrollAnimation animateIn='bounceInLeft'
  animateOut='bounceOutRight'>
            <Typography
              variant="h1"
              gutterBottom      
            >
             
              {matchesSM && <br />}
              留学のことなら<br/>
              <span style={{color:"#fff"}}>ニュージーランド教育センター</span>
              <br />
              にお任せください

            </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInLeft'
  animateOut='bounceOutRight' delay={800}>
            <Typography
              variant="subtitle2"
              gutterBottom
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" }}
            >
              まずは一度お問い合わせください。
            </Typography>
            </ScrollAnimation>
            <Grid container justify={matchesSM ? "center" : undefined} item>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
      <ScrollAnimation animateIn='fadeIn'>
      　<Link href="/contact">
        <Button
   
          variant="contained"
          className={classes.contactButton}
       
        >
         お問い合わせ
        </Button>
        </Link>
        </ScrollAnimation>
      </Grid>
    </Grid>
  );
}


