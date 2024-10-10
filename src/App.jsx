import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="BIENVENIDO A FORESTALES BUFALO" />
      <Footer />
    </>
  );
}

export default App;
