import { useEffect, useState } from "react";

const useResponsive = () => {
  const [state, setState] = useState({
    sm: false,
    mdonly: false,
    md: false,
    lg: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const sm = window.innerWidth <= 768;
      const mdonly = window.innerWidth >= 768 && window.innerWidth <= 990;
      const md = window.innerWidth >= 768;
      const lg = window.innerWidth > 990;
      setState({ sm, mdonly, md, lg });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return state;
};

export default useResponsive;
