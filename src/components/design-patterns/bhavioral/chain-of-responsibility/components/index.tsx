import { BaseChainLink } from "../chain-link";

// Concrete chain link: ButtonComponent
export class ButtonComponent extends BaseChainLink {
  protected canHandleRequest(action: string): boolean {
    return action === 'button-click';
  }

  protected performAction(action: string): string {
    console.log('ButtonComponent handles button-click action.');
    // Here you can add the specific action logic
    return action
  }
}

// Concrete chain link: LinkComponent
export class LinkComponent extends BaseChainLink {
  protected canHandleRequest(action: string): boolean {
    return action === 'link-click';
  }

  protected performAction(action: string): string {
    console.log('LinkComponent handles link-click action.');
    return action
    // Here you can add the specific action logic
  }
}
