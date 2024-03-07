import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDo from "./components/ToDo";
import { Container } from "@chakra-ui/react";
function App() {
  return (
    <Container minHeight="100vh">
      <Header />
      <ToDo />
      <Footer />
    </Container>
  );
}

export default App;
