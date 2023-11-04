import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import ShirtDetail from "./components/ShirtDetail";
import {useState} from "react";

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/react-shop" element={<Layout setSelected={setSelected}/>}/>
            <Route path="/react-shop/:id" element={<ShirtDetail selected={selected} setSelected={setSelected}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
