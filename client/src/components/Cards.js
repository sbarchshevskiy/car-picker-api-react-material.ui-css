import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {CircularProgress, IconButton, Typography} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import "./Cards.css"
require("dotenv").config();
const url = process.env.REACT_APP_API_URL;



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(1.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 15,
    padding: theme.spacing(1, 0.6, 1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));


export default function Cards({ model, id, make }) {

  // Modal state off by default
  const [open, setOpen] = useState(false);
  const [models, setModel] = useState([]);
  const [loading, setLoading] = useState(false)


  // Modal popup on open and close
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    axios
      .get(`${url}${make}/vehicleType/car?format=json`)
      .then((res) => {
        //loads car model
        console.log('Model: ',res.data["Results"][0].Model_Name);
        setModel(res.data["Results"])
        setLoading(true)
      })

      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, [url]);


  const classes = useStyles();
  if (models) {
    return (
      <div>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {make}
              <IconButton
                onClick={() => {
                  console.log("close");
                }}
              >
                <Close />
              </IconButton>
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              model: {model}
            </Typography>
            <Typography variant="body2" component="p">
              id: {id}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleOpen}>
              See complete list
            </Button>
          </CardActions>
        </Card>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          scrollable={true}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
              <div className={classes.paper}>
                <div className="modal-body">
                  {models
                    .filter((res) => res.Make_Name.toLowerCase())
                    .map((data, key) => {

                        return (
                          <div>
                            <h2 id="transition-modal-title">
                              {data.Model_Name}
                            </h2>
                            <p id="transition-modal-description">
                              Model id: {data.Model_ID}
                   
                            </p>
                          </div>
                        )

                    })}
                </div>
              </div>
          </Fade>

        </Modal>
      </div>
    );

  } else {
    return (
      <div>
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}

