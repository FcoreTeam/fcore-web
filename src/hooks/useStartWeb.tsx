import Cookies from "js-cookie";

export const useStartWeb = () => {
  const now = new Date().getHours();
  const themeValue = now >= 18 || now <= 7 ? "dark" : "light";

  Cookies.set("theme", themeValue, {
    expires: 7,
    path: "/",
    sameSite: "lax",
  });

  const theme = Cookies.get("theme") || themeValue;

  // console.log("Current hour:", now);
  // console.log("Theme set to:", theme);

  return { now: 20, theme: "dark" };
};
