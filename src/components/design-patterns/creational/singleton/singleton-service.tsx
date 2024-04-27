// SingletonService.ts

import { ReactNode } from "react";

class SingletonService {
  private static instance: SingletonService | null = null;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  static getInstance(): SingletonService {
    if (!SingletonService.instance) {
      SingletonService.instance = new SingletonService();
    }
    return SingletonService.instance;
  }

  doSomething(): ReactNode {
    console.log("SingletonService is doing something!");
    return <>SingletonService is doing something!</>;
  }
}

export default SingletonService;
