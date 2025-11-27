import Input from "@/components/@ui/Input/Input";
import styles from "./brief-contacts.module.scss";
import { BriefData } from "@/types/types";
import useWindowWidth from "@/hooks/useWindowWidth";

interface Props {
  data: BriefData;
  onChange: (data: BriefData) => void;
}
const BriefContacts = ({ data, onChange }: Props) => {
  const windowWidth = useWindowWidth();
  return (
    <div className={styles.brief__contacts}>
      <div className={styles.input__wrap}>
        <p className={styles.input__title}>Как вас зовут?*</p>
        <Input
          placeholder="Иван Иванов"
          className={styles.input}
          type="text"
          value={data.name}
          onChange={(text) =>
            onChange({
              ...data,
              name: text,
            })
          }
        />
      </div>
      <div className={styles.input__wrap}>
        <p className={styles.input__title}>
          Контакт {windowWidth < 620 ? "" : "(почта, телефон, Telegram)*"}
        </p>
        <Input
          className={styles.input}
          type="email"
          placeholder="@example"
          value={data.email}
          onChange={(text) =>
            onChange({
              ...data,
              email: text,
            })
          }
        />
      </div>
      {/* <div className={styles.input__wrap}>
        <p className={styles.input__title}>Номер телефона</p>
        <Input
          className={styles.input}
          type="number"
          placeholder="+7 (xxx) xxx-xx-xx"
          value={data.phone}
          onChange={(text) =>
            onChange({
              ...data,
              phone: text,
            })
          }
        />
      </div> */}
    </div>
  );
};
export default BriefContacts;
