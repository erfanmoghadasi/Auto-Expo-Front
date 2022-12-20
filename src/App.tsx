import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Popular from "./components/Popular";
import Tips from "./components/Tips";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Popular />
      <Companies />
      <Tips />
      <Footer />
    </div>
  );
}

export default App;
