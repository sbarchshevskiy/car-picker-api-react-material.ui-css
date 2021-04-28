import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function Cards({ model, id, make }) {

  // const [model, setModelList] = useState([])

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
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

        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>

            <h2 id="transition-modal-title">{make}</h2>
            <p id="transition-modal-description">Model: {model}</p>
            <p id="transition-modal-description">Model id: {id}</p>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
