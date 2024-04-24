// MyComponent.tsx

import React, { useEffect } from "react";
import SingletonService from "./singleton-service";

const Singleton: React.FC = () => {
  const singletonInstance = SingletonService.getInstance();
  useEffect(() => {
    singletonInstance.doSomething();

    // Since it's a singleton, the following will still refer to the same instance
    const anotherInstance = SingletonService.getInstance();
    console.log(singletonInstance === anotherInstance); // Output: true
  }, []);

  return <div>{singletonInstance.doSomething()}</div>;
};

export default Singleton;
