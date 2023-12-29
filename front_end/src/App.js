import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { AboutUs } from './screens/AboutUs/AboutUs';
import { ArtistList }  from './screens/Artist/Artist';
import { SignIn } from './screens/SignIn/SignIn';
import { SignUp } from './screens/SignUp/SIgnUp';
import { HomePage } from './screens/HomePage/HomePage';
import {ProductDetail} from './screens/ProductDetail.js';
import { Payment } from './screens/Payment/Payment.js';
import {}

// import { HomePage } from './screens/HomePage'

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
      <Payment></Payment>
      <Footer></Footer>
    </div>
  );
}

export default App;
