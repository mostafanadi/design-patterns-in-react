import React from "react";

// Define interface for BasicComponent props
interface BasicComponentProps {
  message: string;
  additionalProps?: string;
}

// Define BasicComponent as a functional component with specified props
const BasicComponent: React.FC<BasicComponentProps> = ({ message }) => {
  return (
    <div>
      <p>Basic Component</p>
      <p>{message}</p>
    </div>
  );
};

// Define a decorator HOC
const withDecorator = <P extends BasicComponentProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  // Define props for the enhanced component
  type EnhancedComponentProps = Omit<P, "message"> & {
    message: string;
    name?: string;
  };

  // Return a new component that wraps the provided component
  const EnhancedComponent: React.FC<EnhancedComponentProps> = (props) => {
    // Add additional props or behavior here
    const enhancedMessage = props.message + " (Enhanced)";

    // Render the wrapped component with enhanced props
    return (
      <>
        {props?.additionalProps || null}
        <WrappedComponent {...(props as P)} message={enhancedMessage} />
      </>
    );
  };

  return EnhancedComponent;
};

// Use the decorator to enhance the BasicComponent
const EnhancedComponent = withDecorator(BasicComponent);

// Example usage of EnhancedComponent
const Decorator: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl mb-3">
        Using Decorator Pattern in React with TypeScript
      </h1>
      <EnhancedComponent
        additionalProps="ADDITIONAL PROPS ADDED BY DECORATOR"
        message="Hello World"
      />
    </div>
  );
};

export default Decorator;
