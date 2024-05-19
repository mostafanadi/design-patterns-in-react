export abstract class FormTemplate {
  // Template method
  renderForm(): JSX.Element {
    return (
      <div>
        {this.renderHeader()}
        {this.renderFields()}
        {this.renderFooter()}
      </div>
    );
  }

  // These methods must be implemented by subclasses
  abstract renderHeader(): JSX.Element;
  abstract renderFields(): JSX.Element;
  abstract renderFooter(): JSX.Element;
}
