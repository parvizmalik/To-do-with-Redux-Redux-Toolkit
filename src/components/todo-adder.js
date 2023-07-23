import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { TextField, Box, Button } from "@material-ui/core";

import { ADD_TODO } from "../redux/actions";

export default function TodoAdder() {
  const [title, setTitle] = useState(null);
  const titleFieldRef = useRef(null);

  const dispatch = useDispatch();

  function handleTextChange(e) {
    setTitle(e.target.value);
  }

  function addTodoItem() {
    if (title) {
      dispatch({
        type: ADD_TODO,
        payload: {
          title,
        },
      });
      setTitle(null);
      titleFieldRef.current.value = "";
    }
  }

  return (
    <Box>
      <TextField
        style={{
          width: 400,
        }}
        inputRef={titleFieldRef}
        label="Add new todo"
        variant="filled"
        onChange={handleTextChange}
      ></TextField>
      <Button
        style={{
          height: 55,
        }}
        variant="contained"
        color="primary"
        onClick={addTodoItem}
      >
        Add
      </Button>
    </Box>
  );
}
