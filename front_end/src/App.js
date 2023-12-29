import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { AboutUs } from './screens/AboutUs/AboutUs';
import { ArtistList } from './screens/Artist/Artist';
import { SignIn } from './screens/SignIn/SignIn';
import { SignUp } from './screens/SignUp/SIgnUp';
import { HomePage } from './screens/HomePage/HomePage';
<<<<<<< HEAD
import { ProductDetail } from './screens/ProductDetail';
// import { ProductDetail } from './screens/ProductDetail'
// import { Cart } from './screens/Cart'
import { ProductListAdmin } from './screens/Admin/Product/ProductListAdmin'
import { AddProduct } from './screens/Admin/Product/AddProduct';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <AboutUs></AboutUs> */}
      {/* <ArtistList></ArtistList> */}
      {/* <SignIn></SignIn> */}
      {/* <SignUp></SignUp> */}
      {/* <HomePage></HomePage> */}
      {/* <ProductDetail></ProductDetail> */}
       {/* <ProductDetail></ProductDetail> */}
       {/* <Cart></Cart> */}
       {/* <ProductListAdmin></ProductListAdmin> */}
       {/* <AddProduct></AddProduct> */}
    </div>
=======
import { ProductDetail } from './screens/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/artists" element={<ArtistList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signun" element={<SignUp />} />
          <Route path="/product_detail" element={<ProductDetail />} />
        </Routes>
        <Footer/>
      </div>
    </Router>

>>>>>>> main
  );
}

export default App;
