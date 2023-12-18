import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { HomePage } from './screens/HomePage'
function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
        <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
