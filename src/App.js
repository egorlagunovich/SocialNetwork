import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settingss/Settings";

function App(props) {
  return (
   
      <div className="app">
        <Header />
        <div className="container">
          <Navbar state={props.state.sidebar}/>
          <div className="mainContent">
            <Routes>
              <Route
                path="/profile/*"
                element={<Profile state={props.state.profilePage} />}
              />
              <Route
                path="/dialogs/*"
                element={<Dialogs state={props.state.dialogsPage} />}
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
   
  );
}

export default App;
