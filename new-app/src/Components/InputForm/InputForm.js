import { memo, useEffect, useRef, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./inputForm.css";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import addMessage from "../../action/messagesActions";

function InputForm({ chatId }) {
  const inputRef = useRef();
  const [textValue, setTextValue] = useState("");
  const author = useSelector((state) => state.profile.name, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, [textValue]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addMessage(chatId, textValue, author));
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
        onClick={(e) => submitHandler(e)}
      >
        Отправить
      </Button>
    </form>
  );
}

export default memo(InputForm);
