import CallToAction from "../Components/CallToAction";
import Specials from "../Components/Specials";

function HomePage() {
  return (
    <>
      <CallToAction />
      <main className="grid">
        <Specials />
      </main>
    </>
  );
}

export default HomePage;
