import React from "react";

// Define a type for the template methods
interface FormTemplate {
  renderHeader: () => JSX.Element;
  renderFields: () => JSX.Element;
  renderFooter: () => JSX.Element;
}

// Custom hook to use the template method
function useFormTemplate(template: FormTemplate): JSX.Element {
  return (
    <div>
      {template.renderHeader()}
      {template.renderFields()}
      {template.renderFooter()}
    </div>
  );
}

// LoginForm implementation using custom hook
const TemplateMethod_Functional: React.FC = () => {
  const template: FormTemplate = {
    renderHeader: () => <h2>Login</h2>,
    renderFields: () => (
      <div>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
    ),
    renderFooter: () => <button type="submit">Submit</button>,
  };

  return useFormTemplate(template);
};

export default TemplateMethod_Functional;
