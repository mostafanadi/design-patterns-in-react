// Components.tsx
import React from "react";

export interface ButtonProps {
  onClick: () => void;
  text: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

export const Card: React.FC<CardProps> = ({ title, content }) => (
  <div>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);
