export interface IObsarvable {
  subscribe(func: (val: boolean) => void): void;
  unsubscribe(func: (val: boolean) => void): void;
  notify(value: any): void;
}
class Obsarvable implements IObsarvable {
  private observers: ((value: any) => void)[] = []
  subscribe(func: (val: boolean) => void) {
    this.observers.push(func)
  }
  unsubscribe(func: (val: boolean) => void) {
    this.observers = this.observers.filter(f => f != func)
  }
  notify(value: any) {
    this.observers.forEach(observer => {
      observer(value)
    })
  }
}
export default new Obsarvable()