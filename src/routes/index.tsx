import { createBrowserRouter, Link } from "react-router-dom";
import ThemeSwitcher from "../components/design-patterns/creational/abstract-factory/theme-switcher";
import FactoryMethod from "../components/design-patterns/creational/factory-method";
import Adapter from "../components/design-patterns/structural/adapter";
import Builder from "../components/design-patterns/creational/builder";
import Bridge from "../components/design-patterns/structural/bridge";
import Composite from "../components/design-patterns/structural/composite";
import Prototype from "../components/design-patterns/creational/prototype";
import Decorator from "../components/design-patterns/structural/decorator";
import Singleton from "../components/design-patterns/creational/singleton";
import Facade from "../components/design-patterns/structural/facade";
import Flyweight from "../components/design-patterns/structural/flyweight/user-list";
import Proxy from "../components/design-patterns/structural/proxy";
import ChainOfResponsibility from "../components/design-patterns/bhavioral/chain-of-responsibility";
import Command from "../components/design-patterns/bhavioral/command";
import Iterator from "../components/design-patterns/bhavioral/iterator";
import MediatorImplementation from "../components/design-patterns/bhavioral/mediator";
import Memento from "../components/design-patterns/bhavioral/memento";
import { Observer } from "../components/design-patterns/bhavioral/observer";
import State from "../components/design-patterns/bhavioral/state";
import Strategy from "../components/design-patterns/bhavioral/strategy";
import TemplateMethod_ClassBased from "../components/design-patterns/bhavioral/template-method/class-based";
import Visitor from "../components/design-patterns/bhavioral/visitor";
import DesignPatterns from "../components/design-patterns";
import DataStrictures from "../components/data-structures/tree";
import LinkedList from "../components/data-structures/linked-list";
import Stack from "../components/data-structures/stack";
import QueueComponent from "../components/data-structures/queue";
import TreeComponent from "../components/data-structures/tree";
import BinarySearchTreeComponent from "../components/data-structures/binary-search-tree";
import AVLTreeComponent from "../components/data-structures/avl-tree";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col gap-3">
        <Link className="btn !bg-purple-800 w-fit" to={"/design-patterns"}>
          Design Patterns
        </Link>
        <Link className="btn !bg-cyan-600 w-fit" to={"/data-structures"}>
          Data Structures
        </Link>
      </div>
    ),
  },
  {
    path: "/design-patterns",
    element: <DesignPatterns />,
  },
  {
    path: "design-patterns/abstract-factory",
    element: <ThemeSwitcher />,
  },
  {
    path: "design-patterns/factory-method",
    element: <FactoryMethod />,
  },
  {
    path: "design-patterns/adapter",
    element: <Adapter />,
  },
  {
    path: "design-patterns/builder",
    element: <Builder />,
  },
  {
    path: "design-patterns/bridge",
    element: <Bridge />,
  },
  {
    path: "design-patterns/composite",
    element: <Composite />,
  },
  {
    path: "design-patterns/prototype",
    element: <Prototype />,
  },
  {
    path: "design-patterns/decorator",
    element: <Decorator />,
  },
  {
    path: "design-patterns/singleton",
    element: <Singleton />,
  },
  {
    path: "design-patterns/facade",
    element: <Facade userId="1" />,
  },
  {
    path: "design-patterns/flyweight",
    element: (
      <Flyweight
        users={[
          { age: 25, name: "Mostafa" },
          { age: 25, name: "Mostafa" },
          { age: 25, name: "Mostafa" },
          { age: 25, name: "Mostafa" },
          { age: 25, name: "Mostafa" },
          { age: 21, name: "Nasir" },
        ]}
      />
    ),
  },
  {
    path: "design-patterns/proxy",
    element: <Proxy userId={1} />,
  },
  {
    path: "design-patterns/chain-of-responsibility",
    element: <ChainOfResponsibility />,
  },
  {
    path: "design-patterns/command",
    element: <Command />,
  },
  {
    path: "design-patterns/iterator",
    element: <Iterator />,
  },
  {
    path: "design-patterns/mediator",
    element: <MediatorImplementation />,
  },
  {
    path: "design-patterns/memento",
    element: <Memento />,
  },
  {
    path: "design-patterns/observer",
    element: <Observer />,
  },
  {
    path: "design-patterns/state",
    element: <State />,
  },
  {
    path: "design-patterns/strategy",
    element: <Strategy />,
  },
  {
    path: "design-patterns/template-method",
    element: <TemplateMethod_ClassBased />,
  },
  {
    path: "design-patterns/visitor",
    element: <Visitor />,
  },
  {
    path: "data-structures",
    element: <DataStrictures />,
  },
  {
    path: "data-structures/linked-list",
    element: <LinkedList />,
  },
  {
    path: "data-structures/stack",
    element: <Stack />,
  },
  {
    path: "data-structures/queue",
    element: <QueueComponent />,
  },
  {
    path: "data-structures/tree",
    element: <TreeComponent />,
  },
  {
    path: "data-structures/b-tree",
    element: <BinarySearchTreeComponent />,
  },
  {
    path: "data-structures/avl-tree",
    element: <AVLTreeComponent />,
  },
]);
