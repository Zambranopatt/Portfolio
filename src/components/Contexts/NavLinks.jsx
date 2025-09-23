import { createContext, useState } from "react";
export const Navigation = createContext();

const [toggle, setToggle] = useState(false);

export const NavProvider = ({ child }) => {
  return (
    <Navigation.Provider value={{ toggle, setToggle }}>
      {child}
    </Navigation.Provider>
  );
};
