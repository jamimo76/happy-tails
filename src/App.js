import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import LocationsDirectoryPage from "./pages/LocationsDirectoryPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="directory" element={<LocationsDirectoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
