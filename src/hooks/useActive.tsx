import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useActive = (key: string) => {
  const location = useLocation();
  const [active, setActive] = useState<RegExpMatchArray | null>(null);

  useEffect(() => {
    const pathname: RegExpMatchArray | null = location.pathname.match(key);
    setActive(pathname);
  }, [location, key]);

  return active;
};

export default useActive;
