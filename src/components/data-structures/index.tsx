
import { Link } from "react-router-dom";

type Props = {};

export default function DataStructures({ }: Props) {

  return (
    <div className="space-y-4 [&_a]:block [&_a]:max-w-60  [&_a]:py-2 [&_a]:px-4 [&_a]:bg-sky-700 [&_a]:text-white">
      <Link to="tree">
        Tree
      </Link>
      <Link to="heap">
        Heap
      </Link>
    </div>
  );
}
