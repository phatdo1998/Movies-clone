import { useEffect, useState } from "react";

const useScrollY = () => {
  const [scrolly, setScrolly] = useState(0);

  const handleScrolly = () => {
    const scrollY = window.screenY || document.documentElement.scrollTop;
    setScrolly(scrollY);
  };

  useEffect(() => {
    handleScrolly();
    window.addEventListener("scroll", handleScrolly);
    return () => window.removeEventListener("scroll", handleScrolly);
  }, []);
  return scrolly;
};

export default useScrollY;
