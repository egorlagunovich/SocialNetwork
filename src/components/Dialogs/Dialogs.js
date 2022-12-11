import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./DialogsElements/DialogElements";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} photo={dialog.photo} />
  ));

  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageElement = React.createRef();
  const sendMessage = () => {
    props.addMessage();
  };

  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={styles.Dialogs}>
      <div className={styles.DialogsNames}>
        <h1 className={styles.name}>Dialogs</h1>
        {dialogsElements}
      </div>
      <div className={styles.DialogsMessages}>
        <div>{messagesElements}</div>
        <div className={styles.sendMessage}>
          <textarea
            className={styles.textMessage}
            ref={newMessageElement}
            onChange={onMessageChange}
            value={props.state.newMessageText}
          ></textarea>
          <button className={styles.textButton} onClick={sendMessage}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
