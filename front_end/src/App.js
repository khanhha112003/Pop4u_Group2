import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { HomePage } from './screens/HomePage/HomePage'
import { ProductPage } from './screens/ProductPage/ProductPage'


function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       
       <ProductPage></ProductPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
