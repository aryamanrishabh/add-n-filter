import AddUser from "./AddUser";
import Nav from "./Nav";
import FinalTable from "./components/FinalTable";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <AddUser />
      <Container>
        <FinalTable />
      </Container>
    </>
  );
}

export default App;
