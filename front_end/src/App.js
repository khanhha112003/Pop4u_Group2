import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { AboutUs } from './screens/AboutUs/AboutUs';
import { ArtistList }  from './screens/Artist/Artist';
// import { SignIn } from './screens/SignIn/SignIn';
// import { SignUp } from './screens/SignUp/SIgnUp';
import { HomePage } from './screens/HomePage/HomePage';
import { ProductDetail } from './screens/ProductDetail';
// import { ProductDetail } from './screens/ProductDetail'
// import { Cart } from './screens/Cart'
// import {ProductPage} from './screens/ProductPage/ProductPage'
import {ArtistList} from './screens/Artist/Artist'
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
       <ProductDetail></ProductDetail>
       {/* <Cart></Cart> */}
       {/* <ProductPage></ProductPage> */}
       {/* <ArtistList></ArtistList> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
