// App.jsx
import LegacyComponent from "./components/legacy-component";
import DataAdapter from "./components/data-adapter";

const Adapter = () => {
  const data = { someKey: "value" };

  return (
    <div>
      <LegacyComponent legacyData={data} />
      <DataAdapter legacyData={data} />
    </div>
  );
};

export default Adapter;
