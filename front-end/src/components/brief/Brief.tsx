"use client";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import styles from "./brief.module.scss";
import { useDispatch } from "react-redux";
import { BriefData } from "@/types/types";
import BriefContacts from "./brief-contacts/Brief-contacts";
import { projectTypes } from "./project-types";
import { ProjectPrice } from "./project-price";
import { ProjectDeadlines } from "./project-deadline";
import Input from "../@ui/Input/Input";
import Button from "../@ui/Button/Button";
import { sendForm } from "@/api/api";
import { setPopupData } from "@/store/slices/popupSlice";

const Brief = () => {
  const dispatch = useDispatch();
  const [briefForm, setBriefForm] = useState<BriefData>({
    name: "",
    phone: "",
    email: "",
    description: "",
    orderType: "",
    orderPrice: "",
    orderDeadline: "",
    file: "",
  });

  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [isMenuAtTop, setIsMenuAtTop] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Получаем цены для выбранного типа проекта
  const getFilteredPrices = () => {
    if (!briefForm.orderType) return [];
    const priceData = ProjectPrice.find(
      (item) => item.name === briefForm.orderType
    );
    return priceData ? priceData.price : [];
  };

  // Получаем сроки для выбранного типа проекта
  const getFilteredDeadlines = () => {
    if (!briefForm.orderType) return [];
    const deadlineData = ProjectDeadlines.find(
      (item) => item.name === briefForm.orderType
    );
    return deadlineData ? deadlineData.deadline : [];
  };

  const dataHandler = (key: string, value: string) => {
    setBriefForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileError("");
    setFileName("");
    setSelectedFile(null);

    if (!file) {
      dataHandler("file", "");
      return;
    }

    const allowedTypes = [".pdf", ".doc", ".docx", ".txt"];
    const fileExtension = file.name
      .toLowerCase()
      .slice(file.name.lastIndexOf("."));

    if (!allowedTypes.includes(fileExtension)) {
      setFileError("Недопустимый формат файла. Разрешены: PDF, DOC, DOCX, TXT");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setFileError("Файл слишком большой. Максимальный размер: 10 МБ");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    setFileName(file.name);
    setSelectedFile(file);
    dataHandler("file", file.name);
  };

  const handleSubmit = async () => {
    // Валидация обязательных полей
    if (
      !briefForm.name ||
      !briefForm.email ||
      !briefForm.orderType ||
      !briefForm.orderPrice ||
      !briefForm.orderDeadline ||
      !briefForm.description
    ) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", briefForm.name);
      formData.append("phone", briefForm.phone);
      formData.append("email", briefForm.email);
      formData.append("orderType", briefForm.orderType);
      formData.append("orderPrice", briefForm.orderPrice);
      formData.append("orderDeadline", briefForm.orderDeadline);
      formData.append("description", briefForm.description);
      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      const response = await sendForm(formData);
      if (response.status === 200) {
        dispatch(
          setPopupData({
            isOpen: true,
            type: "notif",
          })
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Ошибка при отправке формы");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        setIsMenuAtTop(menuRect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredPrices = getFilteredPrices();
  const filteredDeadlines = getFilteredDeadlines();

  return (
    <div className={clsx(styles.brief, styles.dark)}>
      <h1>
        До <span>успеха</span> шаг!
      </h1>
      <div className={styles.brief__body}>
        <div ref={menuRef} className={styles.brief__menu}>
          <p className={styles.brief__title}>Бриф для агенства</p>
          <div className={styles.input__wrap}>
            <BriefContacts data={briefForm} onChange={setBriefForm} />
          </div>
          <p className={styles.project__subtitle}>Поговорим о проекте</p>
          <p className={styles.subtitle}>
            Это поможет нам определится со стеком
          </p>
          <div className={styles.project__types}>
            {projectTypes.map((item) => (
              <div
                key={item.name}
                className={clsx(
                  styles.project__type,
                  briefForm.orderType === item.name && styles.active
                )}
                onClick={() => dataHandler("orderType", item.name)}
              >
                {item.label}
              </div>
            ))}
          </div>
          <p className={styles.project__subtitle}>А теперь чуть подробнее</p>
          <p className={styles.subtitle}>
            Расскажите о целях вашего продукта, что уже имеется. Также, отдельно
            вы можете прикрепить:
            <br />
            <br />
            - Дополнительные файлы
            <br />
            - Техническое задание
            <br />- Макет
          </p>
          <div className={styles.project__description}>
            <p className={styles.input__title}>Описание проекта*</p>
            <Input
              isTextArea
              value={briefForm.description}
              type="text"
              placeholder="Вот тут напишите пожалуйста"
              onChange={(text) => dataHandler("description", text)}
              className={styles.input}
            />
            <p className={styles.input__title}>Техническое задание</p>
            <p className={styles.subtitle}>
              В формате PDF, DOCX, DOC, TXT. Не более 10 мб
            </p>
            <div className={styles.load__wrap}>
              <div className={styles.file__wrap}>
                <input
                  ref={fileInputRef}
                  type="file"
                  className={styles.file__input}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                />
                <p>Загрузить файл</p>
              </div>
              {fileName && <p className={styles.file__name}>{fileName}</p>}
              {fileError && <p className={styles.file__error}>{fileError}</p>}
            </div>
          </div>

          {/* Блок стоимости */}
          <div className={styles.project__price}>
            <p className={styles.project__subtitle}>
              В какую стоимость хотите уложиться?
            </p>
            <p className={styles.subtitle}>
              Для каждого типа проекта свой минимальный порог
            </p>
            <div className={styles.project__types}>
              {!briefForm.orderType ? (
                <div className={styles.project__type}>
                  Сначала выберите тип проекта
                </div>
              ) : (
                filteredPrices.map((price, index) => (
                  <div
                    key={index}
                    className={clsx(
                      styles.project__type,
                      briefForm.orderPrice === price && styles.active
                    )}
                    onClick={() => dataHandler("orderPrice", price)}
                  >
                    {price}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Блок сроков */}
          <div className={styles.project__deadline}>
            <p className={styles.project__subtitle}>
              В какие сроки планируете реализацию?
            </p>
            <p className={styles.subtitle}>
              Сроки зависят от сложности проекта
            </p>
            <div className={styles.project__types}>
              {!briefForm.orderType ? (
                <div className={styles.project__type}>
                  Сначала выберите тип проекта
                </div>
              ) : (
                filteredDeadlines.map((deadline, index) => (
                  <div
                    key={index}
                    className={clsx(
                      styles.project__type,
                      briefForm.orderDeadline === deadline && styles.active
                    )}
                    onClick={() => dataHandler("orderDeadline", deadline)}
                  >
                    {deadline}
                  </div>
                ))
              )}
            </div>
            <Button
              text={isSubmitting ? "Отправка..." : "Отправить бриф"}
              className={styles.brief__btn}
              onClick={handleSubmit}
            />
          </div>
        </div>

        <div className={clsx(styles.brief__nav, isMenuAtTop && styles.sticky)}>
          <p>
            <span>01</span> — Контакты
          </p>
          <p>
            <span>02</span> — О проекте
          </p>
          <p>
            <span>03</span> — Оценка и сроки
          </p>
        </div>
      </div>
    </div>
  );
};
export default Brief;
