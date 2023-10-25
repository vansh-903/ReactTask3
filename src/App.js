import ColorPicker from "./path/ColorPicker";

const App = () => {
  const colors = ["red", "green", "blue","yellow","pink","white","black","neon","grey"];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;