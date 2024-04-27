// ThemeSwitcher.tsx
import React, { useState } from "react";
import { LightThemeFactory, DarkThemeFactory } from "../theme-factory";

const initialTheme = "light";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<string>(initialTheme);
  const themeFactory =
    theme === "light" ? new LightThemeFactory() : new DarkThemeFactory();

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  const ButtonComponent = themeFactory.createButton();
  const CardComponent = themeFactory.createCard();

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <div className="flex gap-5">
        <button className="p-2" onClick={() => handleThemeChange("light")}>
          Light Theme
        </button>
        <button className="p-2" onClick={() => handleThemeChange("dark")}>
          Dark Theme
        </button>
      </div>
      <hr />
      <div className="">
        <h2>Themed Components</h2>
        <div className="my-6">
          <ButtonComponent onClick={handleButtonClick} text="Click Me" />
        </div>
        <CardComponent title="Card Title" content="Card Content" />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
