import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import { HomePage } from './screens/HomePage/HomePage';
import BlgLst from './screens/Blog/BlgLst/BlgLst';
import SinglePost from './screens/Blog/SinglePost/SinglePost';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
        {/* <HomePage></HomePage> */}
        {/* <BlgLst></BlgLst> */}
        <SinglePost></SinglePost>
      <Footer></Footer>
    </div>
  );
}

export default App;
