import { useEffect } from "react";

type Props = {};

export default function Child({}: Props) {
  useEffect(() => {
    console.log("RERENDER");
  }, []);
  return <div>Child</div>;
}
