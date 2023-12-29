import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from "react";
import { AboutUs } from './screens/AboutUs/AboutUs';
import { ArtistList } from './screens/Artist/Artist';
import { SignIn } from './screens/SignIn/SignIn';
import { SignUp } from './screens/SignUp/SIgnUp';
import { HomePage } from './screens/HomePage/HomePage';
import { ProductDetail } from './screens/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  withRouter,
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

  );
}

export default App;
