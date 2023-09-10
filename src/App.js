
import './App.css';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import image1 from '/home/kainaat/Desktop/kinatpagal/my-app/src/images/Home.png';
import image2 from '/home/kainaat/Desktop/kinatpagal/my-app/src/images/About.png'
import image3 from '/home/kainaat/Desktop/kinatpagal/my-app/src/images/Contact.png';
import Container from './components/Container';
import Category from './components/Category';

function App() {
  const images = [
    image1, image2, image3
    // Add more image URLs as needed
  ];

  return (
    <div className="App">
      <Navbar />
      <Slideshow images={images} />
      <Container />
      <Category />
    </div>
  );
}

export default App;
