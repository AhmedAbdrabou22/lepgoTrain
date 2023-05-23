import { Container } from "react-bootstrap";
import CategoryButton from "./components/categoryButton";
import Foods from "./components/foods"
function App() {
  return (
    <div className="App">
      <Container>
        <CategoryButton/>
        <Foods/>
      </Container>
    </div>
  );
}

export default App;
