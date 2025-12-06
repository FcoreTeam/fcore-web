export interface News {
  title: string;
  description: string;
  description_mobile: string;
  date: Date;
  id: number;
  preview: string;
  text: string;
  writer: string;
  writer_avatar: string;
  href: string;
}

export const news: News[] = [
  {
    title: "Стекло в дизайне: Плюсы и минусы ft. Apple",
    description:
      'Cовсем недавно, вышла новая версия IOS, которая сделала дизайн OC легким и красивым. Многие веб-приложения, приложения захотели сделать такой же интерфейс в стиле "глассморфизма" - это прикольно и смотрится стильно...',
    description_mobile:
      "Cовсем недавно, вышла новая версия IOS, которая сделала дизайн OC легким и красивым. Многие веб-приложения...",
    date: new Date(2025, 10, 7),
    id: 1,
    text: "",
    preview: "/preview_one.png",
    writer: "Андрей — CEO",
    writer_avatar: "/ceo.png",
    href: "https://dzen.ru/a/aNriRJ87bFTXNbRQ",
  },
  {
    title: "Как UX/UI метчится с психологией?",
    description:
      'Глупо не учитывать то, что UX - это аббревиатура, которая напрямую уже говорит что сейчас пойдет взаимодействие с "мозгом" пользователя так, чтобы его нейрончикам нравился интерфейс и они заставили его выполнить какое то целевое действие...',
    description_mobile:
      "Глупо не учитывать то, что UX - это аббревиатура, которая напрямую уже говорит что сейчас пойдет...",
    date: new Date(2025, 10, 21),
    id: 2,
    text: "",
    preview: "/post_two.png",
    writer: "Андрей — CEO",
    writer_avatar: "/ceo.png",
    href: "https://dzen.ru/a/aOwVseeuIUGE7cOi",
  },
  {
    title: "Как мы разрабатывали экосистему для крипто-инвесторов.",
    description:
      "Однажды, через наших партнёров нам удалось получить финансирование на разработку экосистемы для крипто-инвесторов EcoBit. В чём же была суть проекта? Клиент поставил задачу - объединить крипто-мир в одном приложении, реализовав...",
    description_mobile:
      "Однажды, через наших партнёров нам удалось получить финансирование на разработку экосистемы для крипто-инвесторов...",
    date: new Date(2025, 10, 21),
    id: 3,
    text: "",
    preview: "/post_three.png",
    writer: "Андрей — CEO",
    writer_avatar: "/ceo.png",
    href: "https://dzen.ru/a/aNRdG34h5Vu-PEmB",
  },
];
