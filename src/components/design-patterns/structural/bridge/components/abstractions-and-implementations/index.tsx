// Abstraction: Notification interface
export interface Notification {
  display(): React.ReactElement;
}

// Concrete Implementation: ToastNotification
export class ToastNotification implements Notification {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  display(): React.ReactElement {
    return (
      <div className="toast p-2 bg-sky-400 rounded-lg text-white my-3">
        <span>{this.message}</span>
      </div>
    );
  }
}

// Concrete Implementation: BannerNotification
export class BannerNotification implements Notification {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  display(): React.ReactElement {
    return (
      <div className="banner bg-purple-400 p-3 rounded-lg text-white">
        <span>{this.message}</span>
      </div>
    );
  }
}
