import { useState } from "react";
import "./App.css";
import Forms from "./components/form";
import Menu from "./components/menu";
import MenuDropDown from "./components/MenuDropDown";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div className="Main">
      <Menu />
      <Forms setMenuIsVisible={setMenuIsVisible} />
      <MenuDropDown
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    </div>
  );
}

export default App;
