// LegacyComponent.jsx

const LegacyComponent = ({ legacyData }: any) => {
  return (
    <div>
      <h2 className="text-xl">Legacy Component</h2>
      <p>Data: {JSON.stringify(legacyData)}</p>
    </div>
  );
};

export default LegacyComponent;
