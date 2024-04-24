// DataAdapter.jsx
import NewComponent from "./../new-component";

const DataAdapter = ({ legacyData }: any) => {
  // Adapt the legacy data to the format expected by NewComponent
  const adaptedData = {
    transformedData: legacyData.someKey, // Example transformation
  };

  return <NewComponent newData={adaptedData} />;
};

export default DataAdapter;
