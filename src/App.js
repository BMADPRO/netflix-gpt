import { Provider, useSelector } from "react-redux";
import Body from "./components/Body";
import appStore from "./utlis/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
      <Body/>
    </div>
    </Provider>
    
  );
}

export default App;
