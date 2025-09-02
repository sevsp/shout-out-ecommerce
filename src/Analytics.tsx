import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-W3P47J6PEY";

export default function Analytics() {
    const { pathname, search, hash } = useLocation();
    const lastPath = useRef<string>("");

    useEffect(() => {
        const path = `${pathname}${search}${hash}`;

        if (path === lastPath.current) return;

        if (typeof window.gtag === "function") {
            window.gtag("config", GA_MEASUREMENT_ID, { page_path: path });

            window.gtag("event", "page_view", {
                page_location: window.location.href,
                page_path: path,
                page_title: document.title,
            });
        }

        lastPath.current = path;
    }, [pathname, search, hash]);

    return null;
}
