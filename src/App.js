import "./App.css";
import Stateintro from "./Components/Stateintro";
import WithState from "./Components/WithState";
import SimpleRedux from "./Components/SimpleRedux";
import Withoutredux from "./Components/Withoutredux";

function App() {
  return (
    <div className="App">
      {/* <Stateintro /> */}
      {/* <WithState /> */}
      {/* <Withoutredux /> */}
      <SimpleRedux />

      {/* <Navbar />
      <Main>
        <List>
          <Data />
        </List>
      </Main> */}
    </div>
  );
}

export default App;
