import { Provider } from "react-redux";
import store from "./store";
import { ReactNode } from "react";
import NotificationPopup from "@/components/@popups/notification-popup/Notification-popup";

interface Provider {
  children: ReactNode;
}
const StoreProvider = ({ children }: Provider) => {
  return (
    <Provider store={store}>
      {children}
      <NotificationPopup />;
    </Provider>
  );
};

export default StoreProvider;
