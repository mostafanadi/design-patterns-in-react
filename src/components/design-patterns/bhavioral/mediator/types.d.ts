// Mediator.ts

declare interface Mediator {
  notify(sender: Colleague, event: string): void;
}
declare interface Colleague {
  setMediator(mediator: Mediator): void;
  notify(event: string): void;
}