import { createBrowserRouter, Link } from "react-router-dom";
import ThemeSwitcher from "../components/creational/abstract-factory/theme-switcher";
import FactoryMethod from "../components/creational/factory-method";
import Adapter from "../components/creational/adapter";
import Builder from "../components/creational/builder";
import Bridge from "../components/creational/bridge";
import Composite from "../components/creational/composite";
import Prototype from "../components/creational/prototype";
import Decorator from "../components/creational/decorator";
import Singleton from "../components/creational/singleton";
import Facade from "../components/creational/facade";

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
]);
