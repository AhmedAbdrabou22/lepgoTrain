import { Container } from "react-bootstrap";
import CategoryButton from "./components/categoryButton";
import Foods from "./components/foods"
import data from './components/data'
import { useState } from "react";
function App() {
  const [datainUse , setDataUse] = useState(data);

  const ButtonOfArray = ["الكل",...new Set(data.map((btn)=>{return btn.category}))];

  //Switch Between Category And Show Data
  const searchByCategory = (cat)=>{
    if(cat === "الكل"){
      setDataUse(data)
    }else{
      let newArray = data.filter((itemSearch)=>{return itemSearch.category === cat})
      setDataUse(newArray)
    }
  }
  
  return (
    <div className="App">
      <Container>
        <CategoryButton ButtonOfArray={ButtonOfArray} searchByCategory={searchByCategory}/>
        <Foods datainUse={datainUse}/>
      </Container>
    </div>
  );
}

export default App;
