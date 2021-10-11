import { memo, useEffect, useRef, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./inputForm.css";
import { useDispatch } from "react-redux";
import  { addMessage } from "../../action/messagesActions";
import { getRandomQuote, getQuotesByAnimeName } from "../../action/quotesAction";

function InputForm({ chatId, author }) {
  const inputRef = useRef();
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, [textValue]);

  function chatSubmitHandler(e) {
    e.preventDefault();
    dispatch(addMessage(chatId, textValue, author));
    setTextValue("");
  }

  function quotesSubmitHandler(e) {
    e.preventDefault();
    if (textValue) dispatch(getQuotesByAnimeName(textValue));
    else dispatch(getRandomQuote());
    setTextValue("");
  }

  return (
    <form className="form">
      <TextField
        sx={{
          width: 500,
        }}
        id="filled-basic-small"
        label="Сообщение"
        variant="filled"
        size="small"
        className="form__text"
        inputRef={inputRef}
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      ></TextField>
      <Button
        variant="contained"
        color="success"
        type="submit"
        className="form__submit"
        onClick={(e) => {
          chatId ? chatSubmitHandler(e) : quotesSubmitHandler(e);
        }}
      >
        Отправить
      </Button>
    </form>
  );
}

export default memo(InputForm);
