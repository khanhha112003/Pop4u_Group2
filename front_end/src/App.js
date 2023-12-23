import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import { HomePage } from './screens/HomePage'
import { ProductDetail } from './screens/ProductDetail'
function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
        <ProductDetail></ProductDetail>
      <Footer></Footer>
    </div>
  );
  }

export default App;
