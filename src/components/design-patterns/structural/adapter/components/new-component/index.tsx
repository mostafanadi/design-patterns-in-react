// NewComponent.jsx

const NewComponent = ({ newData }: any) => {
  return (
    <div>
      <h2 className="text-xl">New Component</h2>
      <p>Transformed Data: {JSON.stringify(newData)}</p>
    </div>
  );
};

export default NewComponent;
