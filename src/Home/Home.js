import Navigation from '../Navigation/Navigation';
import foodImage from '../images/main-page-image.jpg';

function Home() {
  return (
    <div>       
       <div className="main-image">
        <img src={foodImage} alt='A table full of delicious food!' />
       </div> 
    </div>
  );
}

export default Home;
