import { useEffect } from "react";

export default function useScrollToTop() {
    useEffect(() => {
        window.scroll({top: 0})
    }, [])
}