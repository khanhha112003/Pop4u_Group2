import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { AboutUs } from './screens/AboutUs/AboutUs';
import { ArtistList }  from './screens/Artist/Artist';

// import { HomePage } from './screens/HomePage'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AboutUs></AboutUs>
      <ArtistList></ArtistList>
      <Footer></Footer>
    </div>
  );
}

export default App;
