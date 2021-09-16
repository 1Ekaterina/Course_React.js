function Message({ messageList }) {
  return (
    <ul className="messages">
      {messageList ? messageList.map((el) => <li className="messages__item"><p className="messages__item-name">{el.author + " говорит:"}</p><p className="messages__item-text">{el.text}</p></li>) : null}
    </ul>
  )
};

export default Message;