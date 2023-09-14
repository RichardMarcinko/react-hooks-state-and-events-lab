import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  function handleClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Light" : "Dark"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
  }


export default App;
{/* <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button> */}