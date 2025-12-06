import "./App.css";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { Outlet } from "react-router-dom";

/*-----------------------------------------------------------------------------------------*/

function App() {
  return (
    <>
      <div className="sizedView">
        <NavigationBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
