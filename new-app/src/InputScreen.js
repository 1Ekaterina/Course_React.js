import React, { useRef } from "react";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inputScreen: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    background: "#D3D3D3",
  },
  inputLine: {
    flex: 1,
  },
}));

function InputScreen(props) {
  const classes = useStyles();
  const inputField = useRef();

  const focus = () => {
    inputField.current.focus();
  };

  return (
    <div className={classes.inputScreen}>
      <TextField
        inputRef={inputField}
        variant="filled"
        size="small"
        label="Введите сообщение"
        className={classes.inputLine}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            props.onSendMessage(props.name);
          }
        }}
        autoFocus
      />
      <Button
        color="default"
        size="large"
        variant="contained"
        className="sendButton"
        onClick={() => {
          props.onSendMessage(props.name);
          focus();
        }}
      >
        Отправить
      </Button>
    </div>
  );
}

export default InputScreen;