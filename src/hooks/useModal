import { useReducer } from "react";

const initialState = {
  sending: false,
  message: "",
  showModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SENDING":
      return { ...state, sending: true };
    case "OPEN_MODAL":
      return {
        ...state,
        sending: false,
        message: action.message,
        showModal: true,
      };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export const useModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSendingTransition = () => {
    dispatch({ type: "SENDING" });
  };

  const openModal = (message) => {
    dispatch({ type: "OPEN_MODAL", message: message });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return {
    message: state.message,
    sending: state.sending,
    showModal: state.showModal,
    setSendingTransition,
    openModal,
    closeModal,
  };
};
