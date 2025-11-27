import clsx from "clsx";

import styles from "./button.module.scss";

interface Props {
  text: string;
  className: string;
  onClick?: () => void;
}
const Button = ({ text, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={clsx(styles.button, className)}>
      {text}
    </button>
  );
};
export default Button;
