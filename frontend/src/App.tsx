import "./App.css";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { Outlet } from "react-router-dom";

/*-----------------------------------------------------------------------------------------*/

function App() {
  return <>
    <NavigationBar/>
    <Outlet/>
  </>;
}

export default App;
