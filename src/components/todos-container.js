import React from "react";
import { useSelector } from "react-redux";

import { makeStyles, Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import TodoItem from "./todo-item";

const useStyles = makeStyles(() => ({
  root: {
    margin: 20,
    padding: 20,
    backgroundColor: "rgb(92.9%, 92.9%, 92.9%)",
  },
}));

export default function TodosContainer() {
  const classes = useStyles();

  const { todos } = useSelector((state) => {
    return {
      todos: state.todos,
    };
  });

  const prioritisedTodos = (function prioritise() {
    const importantTodos = [];
    const notImportantTodos = [];

    todos.forEach((todo) => {
      if (todo.important) {
        importantTodos.push(todo);
      } else {
        notImportantTodos.push(todo);
      }
    });

    return importantTodos.concat(notImportantTodos);
  })();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            My Todos
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos.map((todo) => {
              if (!todo.completed) {
                return <TodoItem {...todo} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos.map((todo) => {
              if (todo.completed) {
                return <TodoItem {...todo} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
