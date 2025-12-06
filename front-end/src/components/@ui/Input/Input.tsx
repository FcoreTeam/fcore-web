import styles from "./input.module.scss";
import clsx from "clsx";

interface Props {
  value: string;
  onChange: (value: string) => void;
  isTextArea?: boolean;
  placeholder?: string;
  className: string;
  type: "text" | "email" | "file" | "tel" | "number";
}
const Input = ({
  value,
  onChange,
  isTextArea,
  placeholder,
  className,
}: Props) => {
  return (
    <>
      {isTextArea ? (
        <textarea
          className={className}
          value={value}
          onChange={(text) => onChange(text.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={clsx(styles.input, className)}
          value={value}
          onChange={(text) => onChange(text.target.value)}
          placeholder={placeholder}
        />
      )}
    </>
  );
};
export default Input;
