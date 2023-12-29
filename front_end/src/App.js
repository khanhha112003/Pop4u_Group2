import Footer from './components/Footer/Footer';
import CustomNavbar from './components/Navbar/Navbar';
import { useEffect } from "react";
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
import { ProductList } from './screens/ProductList/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/artists" element={<ArtistList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signun" element={<SignUp />} />
          <Route path="/product_detail" element={<ProductDetail />} />
          <Route path="/product_list">
            <Route path=":sort" element={<ProductList />} />
            <Route path="" element={<ProductList />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>

>>>>>>> main
  );
}

export default App;
