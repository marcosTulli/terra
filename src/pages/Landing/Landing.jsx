import { Header, Hero, Banner, Footer } from "../../components/LandingPage";
import classes from "./Landing.module.scss";

function Landing() {
  return (
    <div className={classes.container}>
      <Header />
      <Hero />
      <Banner />
      <Footer />
    </div>
  );
}

export default Landing;
