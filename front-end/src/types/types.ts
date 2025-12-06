export interface Route {
  name: string;
  route: string;
}

export enum Tags {
  MOBILE = "Мобильное приложение",
  WEBAPP = "Веб-приложение",
  WEB = "Веб-сайт",
  FIN = "Финтех",
  GAME = "Игровая платформа",
  LAND = "Одностраничный сайт",
  GOV = "Государство",
  EVENT = "Мероприятие",
  BRAND = "Бренд",
  DES = "Веб-дизайн",
}
export enum Stack {
  REACT = "React",
  RN = "React Native",
  TypeScript = "TypeScript",
  EXPO = "Expo",
  FIGMA = "Figma",
  GIT = "Git",
  GITHUB = "Github",
  HTML = "HTML",
  CSS = "CSS",
  JS = "JavaScript",
  AXIOS = "Axios",
  SASS = "Sass",
}
export interface Project {
  name: string;
  image: string;
  id: number;
  domain: string;
  video: string[];
  description: string;
  stack: Stack[];
  screenshots: string[];
  tags: Tags[];
}

export enum BriefTypes {
  CONTACTS = 1,
  PROJECT = 2,
  AGREEMENTS = 3,
}

export interface BriefData {
  name: string;
  phone: string;
  email: string;
  orderType: string;
  orderPrice: string;
  orderDeadline: string;
  description: string;
  file: string;
}

export interface ServiceType {
  title: string;
  description: string;
  time: string;
  priceStart: number;
  priceEnd: number;
}
