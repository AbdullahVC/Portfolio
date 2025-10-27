import { useEffect } from "react";

export const usePageTracking = () => {
  useEffect(() => {
    const onRouteChange = () => {
      // Sayfa görüntüleme olayını gönder
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Sayfa yüklendiğinde ilk görüntülemeyi kaydet
    onRouteChange();

    // URL hash değişikliklerini dinle (SPA için)
    window.addEventListener("hashchange", onRouteChange);

    return () => {
      window.removeEventListener("hashchange", onRouteChange);
    };
  }, []);
};
