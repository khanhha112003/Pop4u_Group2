import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import { HomePage } from './screens/HomePage/HomePage';
import SinglePost from './screens/Blog/SinglePost/SinglePost';
// import BlgFilter from './screens/Blog/BlgFilter/BlgFilter'

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
        {/* <HomePage></HomePage> */}
        <SinglePost></SinglePost>
        {/* <BlgFilter></BlgFilter> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
