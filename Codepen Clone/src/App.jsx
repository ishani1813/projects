//components
import Home from "../../Codepen Clone/src/components/Home";
import DataProvider from "../../Codepen Clone/src/context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
