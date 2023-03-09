import { makeStyles, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import mainImage from "./assets/icon.png";
import playStoreButton from "./assets/playstore.png";
import appStoreButton from "./assets/appstore.png";
//import downloadButton from "./assets/download.png";

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
  grid: {
    margin: 0,
    width: "100%",
    paddingTop: 0,
  },
  mainImage: {
    backgroundColor: "unset",
    maxHeight: "40vh",
  },
  subHeader: {
    backgroundColor: "unset",
    maxHeight: "15vh",
  },
});

const Redirect = () => {
  const classes = useStyles();

  useEffect(() => {
    getMobileOperatingSystem();
  }, []);

  const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.location.replace("https://play.google.com/store/apps/details?id=capital.immo.residentapp&pli=1");

    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.replace("https://apps.apple.com/app/id/1643489297");
    }
  };

  const handlePlayStore = () => {
    window.location.replace("https://play.google.com/store/apps/details?id=capital.immo.residentapp&pli=1");
  };

  // const handleAPK = () => {
  //   window.location.replace("https://play.google.com/store/apps/details?id=capital.immo.residentapp&pli=1");
  // };
  const handleIOS = () => {
    window.location.replace("https://apps.apple.com/app/id/1643489297");
  };
  return (
    <div className={classes.root}>
     
        <Grid
          className={classes.grid}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={3}
        >
          <Grid item>
            <Paper className={classes.mainImage} component="img" style={{height:150,width:150}} elevation={0} src={mainImage} />
          </Grid>
          <Grid item>
          </Grid>
          <Grid item>
            <Paper component="img" elevation={0} src={playStoreButton} onClick={handlePlayStore} />
          </Grid>
          {/* <Grid item>
            <Paper component="img" elevation={0} src={downloadButton} onClick={handleAPK} />
          </Grid> */}
          <Grid item>
            <Paper component="img" elevation={0} src={appStoreButton}  style={{height:81,width:251}} onClick={handleIOS} />
          </Grid>
        </Grid>
   
    </div>
  );
};

export default Redirect;
