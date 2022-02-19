
import "./App.css";
// redux things
import { createStore } from "redux";
// react-redux - Provider - wraps app , connect - used in  components
import { Provider } from "react-redux";
import reducer from "./store/reducers/reducer";
import AlertPage from "./pages/AlertPage";

// intial store which is the state
const initialStore = {
  alertW: "",
};

// store
const store = createStore(reducer, initialStore);

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <AlertPage />
      </Provider>
    </div>
  );
}

export default App;
