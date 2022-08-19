import Bottom from "./Components/Bottom";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";


function App() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-12">
        <LeftSide />
        <RightSide />
      </div>
      <Bottom 
        className="relative bottom-[-10]"
      />
    </div>
  );
}

export default App;
