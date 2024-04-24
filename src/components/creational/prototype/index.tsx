import { Component, ReactNode } from "react";

// Define props interface for CardPrototype
interface CardProps {
  title: string;
  content: string;
}

// Prototype Card component
class CardPrototype extends Component<CardProps> {
  render() {
    const { title, content } = this.props;

    return (
      <div className="card">
        <div className="p-1 bg-sky-400">Some common contents</div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  }

  clone(): CardPrototype {
    // Create a copy of this component's props
    const { title, content } = this.props;
    return new CardPrototype({ title, content });
  }
}

// Derived InfoCard component
class InfoCard extends CardPrototype {
  constructor(props: CardProps) {
    super(props);
  }
}

// Derived ImageCard component
class ImageCard extends CardPrototype {
  constructor(props: CardProps) {
    super(props);
  }
}

// Usage of InfoCard and ImageCard
export default function Prototype(): ReactNode {
  const infoCard = new InfoCard({
    title: "Information Card",
    content: "This is an info card",
  });
  const imageCard = new ImageCard({
    title: "Image Card",
    content: "This is an image card",
  });

  return (
    <div>
      <div className="m-3 border p-2">{infoCard.render()}</div>
      <div className="m-3 border p-2">{imageCard.render()}</div>
      <div className="m-3 border p-2">{imageCard.clone().render()}</div>
    </div>
  );
}
