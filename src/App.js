import "./styles.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h1>greetings!</h1>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
