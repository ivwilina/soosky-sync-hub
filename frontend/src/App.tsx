import "./App.css";
import Login from "./modules/auth/pages/Login";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import LetterBox from "./modules/incognito-qa/pages/LetterBox";

/*-----------------------------------------------------------------------------------------*/

function App() {
  return <>
    <NavigationBar/>
    <LetterBox/>
  </>;
}

export default App;
