import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

export default function Cards({ card }) {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');
      </style>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton
              onClick={() => {
                console.log("delete", card.title);
              }}
            >
              <Close />
            </IconButton>
          }
          Model_Name={card.Model_Name}
          Model_ID={card.Model_ID}
        />
        <CardContent>
          <Typography variant="body2" color="TextSecondary">
            {card.Model_Name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
