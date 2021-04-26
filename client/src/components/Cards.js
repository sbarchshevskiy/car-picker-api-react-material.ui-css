import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


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


export default function Cards({ card }) {

  const classes = useStyles();

  return (
    <div>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h2">
            MODEL NAME
            <IconButton
              onClick={() => {
                console.log("delete", card.title);
              }}
            >
              <Close />
            </IconButton>
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            Model list
          </Typography>
          <Typography variant="body2" component="p">
            Model
            <br />
            {'Model ID'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See complete list</Button>
        </CardActions>
      </Card>
    </div>
  );
}
