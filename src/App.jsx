import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BoxVerifyVote from "./components/boxVerifyVote/boxVerifyVote";

export default function App() {
  return (
    <div className="contentAll">
      <Header />
      <BoxVerifyVote />
      <Footer />
    </div>
  );
}
