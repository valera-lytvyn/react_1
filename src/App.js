import style from "./App.module.scss";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className={style.App}>
      <Header />
      <div className={style.body}>
        <Navbar />
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={props.state.profilePage}
                dispatch ={props.dispatch}
                              />
            }
          />
          <Route
            path="/dialogs"
            element={<Dialogs store={props.store} />}
          />

          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
