// ThemeFactory.ts
import { ButtonProps, CardProps } from "../components";

interface ThemeFactory {
  createButton(): React.FC<ButtonProps>;
  createCard(): React.FC<CardProps>;
}

export class LightThemeFactory implements ThemeFactory {
  createButton(): React.FC<ButtonProps> {
    return ({ onClick, text }) => (
      <button className="p-3 rounded-xl bg-lime-200" onClick={onClick}>
        {text}
      </button>
    );
  }

  createCard(): React.FC<CardProps> {
    return ({ title, content }) => (
      <div className="p-3 rounded-xl bg-lime-200">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export class DarkThemeFactory implements ThemeFactory {
  createButton(): React.FC<ButtonProps> {
    return ({ onClick, text }) => (
      <button
        className="p-3 rounded-xl bg-lime-950 text-white"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  createCard(): React.FC<CardProps> {
    return ({ title, content }) => (
      <div className="p-3 rounded-xl bg-lime-950 text-white">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}
