import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FetchData from "./FetchData";


const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards(props) {

  // const model = props.children
  // console.log(model)
  // const modelName = model[0]
  // console.log('modelName',modelName)
  //
  // props.children = {
  //   0: "modelName",
  //   1: "id",
  //   2: "make"
  // }

  console.log(props)


  console.log('log props', props)

  const classes = useStyles();
  return (
    <div>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Brand
            <IconButton
              onClick={() => {
                console.log("close");
              }}
            >
              <Close />
            </IconButton>
          </Typography>
            title
          <Typography className={classes.pos} color="textSecondary">
            {/*{props}*/}
          </Typography>
          <Typography variant="body2" component="p">
            Model
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See complete list</Button>
        </CardActions>
      </Card>
    </div>
  );
}
