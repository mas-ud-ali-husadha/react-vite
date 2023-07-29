import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useActive = (key: string) => {
  const location = useLocation();
  const [active, setActive] = useState<RegExpMatchArray | null | boolean>(null);

  useEffect(() => {
    const pathname: RegExpMatchArray | null = location.pathname.match(key);

    if (pathname == null && key == "setting") {
      return setActive(true);
    }
    setActive(pathname);
  }, [location, key]);

  return active;
};

export default useActive;
