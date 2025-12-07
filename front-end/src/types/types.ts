import { ReactNode } from "react";

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
  ECOM = "Интернет-магазин",
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
  NEXT = "Next JS",
  Django = "Django",
  SQL = "PostgreSQL",
}
interface StackObj {
  name: Stack;
  image: string;
}
export interface Project {
  name: string;
  image: string;
  id: number;
  domain: string;
  video: string[];
  description: string;
  stack: StackObj[];
  screenshots: string[];
  tags: Tags[];
  stat1?: string;
  stat2?: string;
  stat3?: string;
  stat4?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  first_desc?: TrustedHTML;
  second_desc?: TrustedHTML;
  image1?: string;
  image2?: string;
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
