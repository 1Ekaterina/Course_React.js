import { memo, useState } from "react";

function InputForm({ setMessageList }) {

  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setMessageList((prev) => [...prev, { author: nameValue, text: textValue }]);
    setTextValue("");
  };

  return (
    <form className="form">
      <label className="form__name">Ваше имя <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)}></input></label>
      <label className="form__text">Сообщение <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} ></input></label>
      <button type="submit" className="form__submit" onClick={(e) => submitHandler(e)}>Отправить</button>
    </form >
  );
};

export default memo(InputForm);