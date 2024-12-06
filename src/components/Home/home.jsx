import "../Home/home.css";
import AppFooter from "../AppFooter";
import AppHeader from "../AppHeader";
import SideMenu from "../SideMenu";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <div className="PageContent">
          <Outlet />
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
export default Home;
