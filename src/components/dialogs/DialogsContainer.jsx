import { connect } from "react-redux";
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer
.dialogs,
    messages: state.dialogsReducer
.messages,
    newMessageBody: state.dialogsReducer
.newMessageBody,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
