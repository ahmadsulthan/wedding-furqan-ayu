import { useState, useEffect } from "react";

export function useScrollTop(threshold = 500) {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  
  return show;
}