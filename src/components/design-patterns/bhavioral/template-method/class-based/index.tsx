import React from "react";
import { LoginForm } from "./login-form";

class TemplateMethod_ClassBased extends React.Component {
  private loginForm: LoginForm;

  constructor(props: {}) {
    super(props);
    this.loginForm = new LoginForm();
  }

  render() {
    return <div>{this.loginForm.renderForm()}</div>;
  }
}

export default TemplateMethod_ClassBased;
