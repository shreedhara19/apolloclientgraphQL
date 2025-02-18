import logo from "./logo.svg";
import "./App.css";
import CharactersList from "./pages/CharatersList";
import Character from "./pages/Character";
import { Route, Routes } from "react-router";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
