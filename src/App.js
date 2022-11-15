import style from "./App.module.scss";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
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
              <Profile />
            }
          />
          <Route
            path="/dialogs"
            element={
              <DialogsContainer />}
          />
           <Route
            path="/users"
            element={
              <UsersContainer />}
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
