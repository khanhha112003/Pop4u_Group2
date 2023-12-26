import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import { HomePage } from './screens/HomePage/HomePage'
// import { ProductDetail } from './screens/ProductDetail'
import { Cart } from './screens/Cart'
function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       {/* <ProductDetail></ProductDetail> */}
       <Cart></Cart> 
       {/* <HomePage></HomePage> */}
      <Footer></Footer>
    </div>
  );
  }

export default App;
