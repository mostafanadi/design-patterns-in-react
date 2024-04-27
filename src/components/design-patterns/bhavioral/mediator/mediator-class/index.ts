// Mediator.ts


export class Mediator implements Mediator {
  private colleagues: Colleague[] = [];

  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  notify(sender: Colleague, event: string): void {
    console.log("NOTIFY MEDIATOR")
    this.colleagues.forEach(colleague => {
      if (colleague !== sender) {
        colleague.notify(event);
      }
    });
  }
}
