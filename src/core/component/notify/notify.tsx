import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactNode,
} from "react";
import { toast, ToastContentProps } from "react-toastify";

const toastParam = {
  position: "bottom-right",
  autoClose: 5000,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  newestOnTop: true,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  theme: "colored",
};

const notify = (type: any, msg: string) => {
  switch (type) {
    case "info":
      return toast.info(msg, {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnFocusLoss: true,
        pauseOnHover: false,
        // newestOnTop: true,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    case "success":
      return toast.success(msg, {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnFocusLoss: true,
        pauseOnHover: false,
        //newestOnTop: true,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    case "warning":
      return toast.warning(msg, {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnFocusLoss: true,
        pauseOnHover: false,
        //newestOnTop: true,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    case "error":
      return toast.error(msg, {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnFocusLoss: true,
        pauseOnHover: false,
        //newestOnTop: true,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    default:
      return toast.info(msg, {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnFocusLoss: true,
        pauseOnHover: false,
        //newestOnTop: true,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
  }
};

export default notify;
