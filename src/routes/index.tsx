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
import DataStructures from "../components/data-structures";

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

    children: [
      {
        index: true,
        element: <DesignPatterns />,
      },
      {
        path: "abstract-factory",
        element: <ThemeSwitcher />,
      },
      {
        path: "factory-method",
        element: <FactoryMethod />,
      },
      {
        path: "adapter",
        element: <Adapter />,
      },
      {
        path: "builder",
        element: <Builder />,
      },
      {
        path: "bridge",
        element: <Bridge />,
      },
      {
        path: "composite",
        element: <Composite />,
      },
      {
        path: "prototype",
        element: <Prototype />,
      },
      {
        path: "decorator",
        element: <Decorator />,
      },
      {
        path: "singleton",
        element: <Singleton />,
      },
      {
        path: "facade",
        element: <Facade userId="1" />,
      },
      {
        path: "flyweight",
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
        path: "proxy",
        element: <Proxy userId={1} />,
      },
      {
        path: "chain-of-responsibility",
        element: <ChainOfResponsibility />,
      },
      {
        path: "command",
        element: <Command />,
      },
      {
        path: "iterator",
        element: <Iterator />,
      },
      {
        path: "mediator",
        element: <MediatorImplementation />,
      },
      {
        path: "memento",
        element: <Memento />,
      },
      {
        path: "observer",
        element: <Observer />,
      },
      {
        path: "state",
        element: <State />,
      },
      {
        path: "strategy",
        element: <Strategy />,
      },
      {
        path: "template-method",
        element: <TemplateMethod_ClassBased />,
      },
      {
        path: "visitor",
        element: <Visitor />,
      },
    ],
  },

  {
    path: "data-structures",
    children: [
      {
        index: true,
        element: <DataStructures />,
      },
      {
        path: "linked-list",
        element: <LinkedList />,
      },
      {
        path: "stack",
        element: <Stack />,
      },
      {
        path: "queue",
        element: <QueueComponent />,
      },
      {
        path: "tree",
        element: <TreeComponent />,
      },
      {
        path: "b-tree",
        element: <BinarySearchTreeComponent />,
      },
      {
        path: "avl-tree",
        element: <AVLTreeComponent />,
      },
    ],
  },
]);
