import { Link } from "react-router-dom";

type Props = {};

export default function DesignPatterns({}: Props) {
  return (
    <div className="">
      <Link className="btn mb-5" to={"/"}>
        Go Back
      </Link>
      <h1 className="text-3xl mb-6 ">Design Patterns In React</h1>
      <div className="grid grid-cols-12 gap-5">
        <div className="flex flex-col col-span-4 gap-5">
          <div className="bg-slate-300 p-3 min-h-36">
            <h2 className="text-xl">Creational patterns</h2>
            <p className="text-base max-w-96">
              These patterns provide various object creation mechanisms, which
              increase flexibility and reuse of existing code.
            </p>
          </div>
          <Link className="" to="abstract-factory">
            Abstract Factory
          </Link>
          <Link className="" to="factory-method">
            Factory Method
          </Link>
          <Link className="" to="builder">
            Builder
          </Link>
          <Link className="" to="prototype">
            Prototype
          </Link>
          <Link className="" to="singleton">
            Singleton
          </Link>
        </div>
        <div className="flex flex-col col-span-4  gap-5">
          <div className="bg-slate-300 p-3 min-h-36">
            <h2 className="text-xl">Structural patterns</h2>
            <p className="text-base max-w-96">
              These patterns explain how to assemble objects and classes into
              larger structures while keeping these structures flexible and
              efficient.
            </p>
          </div>
          <Link className="" to="adapter">
            Adapter
          </Link>

          <Link className="" to="bridge">
            Bridge
          </Link>
          <Link className="" to="composite">
            Composite
          </Link>

          <Link className="" to="decorator">
            Decorator
          </Link>

          <Link className="" to="facade">
            Facade
          </Link>
          <Link className="" to="flyweight">
            Flyweight
          </Link>
          <Link className="" to="proxy">
            Proxy
          </Link>
        </div>
        <div className="flex flex-col col-span-4  gap-5 ">
          <div className="bg-slate-300 p-3 min-h-36">
            <h2 className="text-xl">Behavioral patterns</h2>
            <p className="text-base max-w-96">
              These patterns are concerned with algorithms and the assignment of
              responsibilities between objects.
            </p>
          </div>
          <Link className="" to="chain-of-responsibility">
            Chain of responsibility
          </Link>
          <Link className="" to="command">
            Command
          </Link>
          <Link className="" to="iterator">
            Iterator
          </Link>
          <Link className="" to="mediator">
            Mediator
          </Link>
          <Link className="" to="memento">
            Memento
          </Link>
          <Link className="" to="observer">
            Observer
          </Link>
          <Link className="" to="state">
            State
          </Link>
          <Link className="" to="strategy">
            Strategy
          </Link>
          <Link className="" to="template-method">
            Template Method
          </Link>
          <Link className="" to="visitor">
            Visitor
          </Link>
        </div>
      </div>
    </div>
  );
}
