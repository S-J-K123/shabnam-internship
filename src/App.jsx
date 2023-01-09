import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import { Skeleton } from "@mui/material";
import Timer from "./components/Timer";

function App() {
  <div>
    <Carousel />
    <Timer expiryDate={1673315129468} />
    <Timer expiryDate={1673307995523} />
    <Timer expiryDate={1673311475523} />
    <Timer expiryDate={1673316275523} />
  </div>;

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author" element={<Author />} />
        <Route path="/item-details" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
