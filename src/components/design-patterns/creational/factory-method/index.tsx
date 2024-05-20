// Define a factory function to create different types of components
function ComponentFactory(type: "button" | "input") {
  switch (type) {
    case "button":
      return ButtonComponent;
    case "input":
      return InputComponent;
    default:
      throw new Error(`Unsupported component type: ${type}`);
  }
}

// Button component
function ButtonComponent(props: any) {
  return (
    <button className="btn my-4 " onClick={props.onClick}>
      {props.label}
    </button>
  );
}

// Input component
function InputComponent(props: any) {
  return (
    <input
      className="p-2 bg-blue-300"
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

// Parent component that uses the factory to create components
function FactoryMethod() {
  // Use the factory function to create a button component
  const Button = ComponentFactory("button");

  // Use the factory function to create an input component
  const Input = ComponentFactory("input");

  return (
    <div className="flex flex-col items-end ">
      <p dir="rtl" className="max-w-96 text-justify">
        الگوی طراحی Factory Method یک الگوی طراحی از دسته الگوهای ساختاری است که
        به ما اجازه می‌دهد اشیاء را بدون مشخص کردن کلاس‌های دقیق آن‌ها ایجاد
        کنیم. این الگو به یک کلاس پایه یا اینترفیس اجازه می‌دهد که یک شیء را
        ایجاد کند، ولی کلاس‌های زیرمجموعه دقیقاً تعیین می‌کنند که کدام کلاس از
        اشیاء ایجاد شود. این کار با استفاده از یک متد کارخانه‌ای (Factory
        Method) انجام می‌شود. برای توضیح این الگو در چارچوب React، فرض کنید
        می‌خواهیم یک سیستم برای نمایش کامپوننت‌های مختلفی داشته باشیم که نوع
        کامپوننت بستگی به نوع کاربر دارد (مثلاً ادمین، کاربر معمولی، و غیره). با
        استفاده از Factory Method، می‌توانیم یک متد برای ایجاد کامپوننت‌های
        مختلف بر اساس نوع کاربر ایجاد کنیم.
      </p>
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />

      <Input value="Hello" onChange={(e: any) => console.log(e.target.value)} />
    </div>
  );
}

export default FactoryMethod;
