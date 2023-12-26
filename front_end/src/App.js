import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { HomePage } from './screens/HomePage/HomePage'
// import { ProductDetail } from './screens/ProductDetail'
import { Cart } from './screens/Cart'
import { AboutUs } from "./screens/AboutUs/AboutUs";
// import { ArtistList } from './screens/Artist/Artist'
// import { SignUp } from './screens/SignUp/SIgnUp';
import { SignIn } from './screens/SignIn/SignIn';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       {/* <ProductDetail></ProductDetail> */}
       {/* <Cart></Cart> */}
       {/* <HomePage></HomePage> */}
       {/* <AboutUs></AboutUs> */} 
       {/* <ArtistList></ArtistList> */}
       {/* <SignUp></SignUp> */}
       <SignIn></SignIn>
      <Footer></Footer>
    </div>
  );
}

export default App;
