import styles from "./notification-popup.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import clsx from "clsx";
import { useEffect } from "react";
import { setPopupData } from "@/store/slices/popupSlice";

const NotificationPopup = () => {
  const dispatch = useDispatch();
  const { isOpen, type } = useSelector((state: RootState) => state.popup);

  useEffect(() => {
    // Запускаем таймер закрытия только когда попап открывается
    if (isOpen && type === "notif") {
      const timer = setTimeout(() => {
        dispatch(
          setPopupData({
            isOpen: false,
            type: "",
          })
        );
      }, 3000);

      // Очищаем таймер при размонтировании или когда попап закрывается
      return () => clearTimeout(timer);
    }
  }, [dispatch, isOpen, type]); // Зависимости: срабатывает при изменении isOpen или type

  return (
    <div
      className={clsx(
        styles.popup__wrap,
        isOpen && type === "notif" && styles.open
      )}
    >
      <div className={styles.popup}>
        <p>Заявка успешно отправлена!</p>
      </div>
    </div>
  );
};

export default NotificationPopup;
