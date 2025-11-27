"use client";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Main from "@/components/main/Main";
import Header from "@/components/header/Header";

function HomeContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const utmSource = searchParams.get("utm_source");
    const isQR = searchParams.get("qr") === "true";

    if (utmSource) {
      // Отправляем запрос с учетом QR параметра
      const url = isQR
        ? `https://fcore.tech/api/utm?target=${utmSource}&qr=true`
        : `https://fcore.tech/api/utm?target=${utmSource}`;

      fetch(url).catch(console.error);

      // Сохраняем в cookie
      const cookieValue = isQR ? `${utmSource}_qr` : utmSource;
      document.cookie = `utm_source=${cookieValue}; max-age=${
        60 * 60 * 24 * 7
      }; path=/`;
    }
  }, [searchParams]);

  return <Main />;
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<Main />}>
        <HomeContent />
      </Suspense>
    </>
  );
}
