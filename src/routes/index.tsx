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


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <h1 className="text-2xl p-3">Design Patterns In React</h1>
        <div className="flex flex-col">
          <Link className="p-3" to="abstract-factory">
            Abstract Factory
          </Link>
          <Link className="p-3" to="factory-method">
            Factory Method
          </Link>
          <Link className="p-3" to="adapter">
            Adapter
          </Link>
          <Link className="p-3" to="builder">
            Builder
          </Link>
          <Link className="p-3" to="bridge">
            Bridge
          </Link>
          <Link className="p-3" to="composite">
            Composite
          </Link>
          <Link className="p-3" to="prototype">
            Prototype
          </Link>
          <Link className="p-3" to="decorator">
            Decorator
          </Link>
          <Link className="p-3" to="singleton">
            Singleton
          </Link>
          <Link className="p-3" to="facade">
            Facade
          </Link>
          <Link className="p-3" to="flyweight">
            Flyweight
          </Link>
          <Link className="p-3" to="proxy">
            Proxy
          </Link>
          <Link className="p-3" to="chain-of-responsibility">
            Chain of responsibility
          </Link>
          <Link className="p-3" to="command">
            Command
          </Link>
          <Link className="p-3" to="iterator">
            Iterator
          </Link>
          <Link className="p-3" to="mediator">
            Mediator
          </Link>
          <Link className="p-3" to="memento">
            Memento
          </Link>
          <Link className="p-3" to="observer">
            Observer
          </Link>
          <Link className="p-3" to="state">
            State
          </Link>
          <Link className="p-3" to="strategy">
            Strategy
          </Link>
        </div>
      </div>
    ),
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
]);
