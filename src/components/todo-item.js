import React from "react";
import { useDispatch } from "react-redux";

import {
  ListItem,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

import {
  DELETE_TODO,
  TOGGLE_COMPLETED,
  TOGGLE_IMPORTANT,
} from "../redux/actions";

export default function TodoItem({ id, title, completed, important }) {
  const dispatch = useDispatch();

  function toggleCheckBox() {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: {
        id,
      },
    });
  }

  function handleDeleteClick() {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      },
    });
  }

  function toggleImportant() {
    dispatch({
      type: TOGGLE_IMPORTANT,
      payload: {
        id,
      },
    });
  }

  return (
    <ListItem dense>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={toggleCheckBox}
              name={title}
              color="primary"
            />
          }
          label={
            <Typography
              style={{
                textDecoration: completed && "line-through",
              }}
            >
              {title}
            </Typography>
          }
        ></FormControlLabel>
      </FormGroup>
      <ListItemSecondaryAction>
        <IconButton onClick={toggleImportant} edge="end">
          {important ? <StarIcon /> : <StarOutlineIcon />}
        </IconButton>
        <IconButton onClick={handleDeleteClick} edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
