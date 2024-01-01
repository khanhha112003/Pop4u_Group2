import Footer from './components/Footer/Footer';
import CustomNavbar from './components/Navbar/Navbar';
import { useEffect } from "react";
import { AboutUs } from './screens/AboutUs/AboutUs';
import { ArtistList } from './screens/Artist/Artist';
import { SignIn } from './screens/SignIn/SignIn';
import { SignUp } from './screens/SignUp/SIgnUp';
import { HomePage } from './screens/HomePage/HomePage';
import { ProductListAdmin } from './screens/Admin/Product/ProductListAdmin'
import { AddProduct } from './screens/Admin/Product/AddProduct';
import { ProductDetail } from './screens/ProductDetail/ProductDetail';
import { ProductList } from './screens/ProductList/ProductList';
import { Blog } from './screens/Blog/BlgFilter/BlgFilter';
import { Cart } from './screens/Cart/Cart';
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product_detail" element={<ProductDetail />} />
          <Route path="/manager/add_product" element={<AddProduct />} />
          <Route path="/manager/product_list" element={<ProductListAdmin />} />
          <Route path="/product_list">
            <Route path=":sort" element={<ProductList />} />
            <Route path="" element={<ProductList />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
