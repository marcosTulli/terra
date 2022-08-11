import "./App.css";
import { Landing } from "./pages/Landing";
import { Header, Hero, Banner, Footer } from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
