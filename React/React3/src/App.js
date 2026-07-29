import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="John"
        School="ABC School"
        Total={500}
        goal={5}
      />
    </div>
  );
}

export default App;