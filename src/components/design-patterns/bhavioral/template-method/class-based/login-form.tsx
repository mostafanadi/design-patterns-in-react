import { FormTemplate } from "./form-template";

export class LoginForm extends FormTemplate {
  renderHeader(): JSX.Element {
    return <h2 className="text-xl mb-4">Login</h2>;
  }

  renderFields(): JSX.Element {
    return (
      <div className="flex gap-4 mb-4">
        <input className="p-2 " type="text" placeholder="Username" />
        <input className="p-2 " type="password" placeholder="Password" />
      </div>
    );
  }

  renderFooter(): JSX.Element {
    return (
      <button className="btn" type="submit">
        Submit
      </button>
    );
  }
}
