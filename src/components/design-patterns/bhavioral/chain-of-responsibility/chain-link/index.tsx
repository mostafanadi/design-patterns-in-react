// Interface for the chain link
interface ChainLink {
  setNext(next: ChainLink): void;
  handleRequest(action: string): boolean;
}

// Base abstract class for chain links
export abstract class BaseChainLink implements ChainLink {
  private nextLink: ChainLink | null = null;

  setNext(next: ChainLink): void {
    this.nextLink = next;
  }

  handleRequest(action: string): boolean {
    // If this link can handle the request, it does so
    if (this.canHandleRequest(action)) {
      this.performAction(action);
      return true;
    }

    // Otherwise, pass the request to the next link in the chain
    if (this.nextLink !== null) {
      return this.nextLink.handleRequest(action);
    }

    // If no link in the chain can handle the request
    return false;
  }

  // Abstract methods to be implemented by concrete classes
  protected abstract canHandleRequest(action: string): boolean;
  protected abstract performAction(action: string): void;
}
