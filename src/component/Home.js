import Slider from './Slider';
import Signup from './Signup';
import Cakelist from './Cakelist';


var signUpDetails =  {
    userDetails: true
}

function Home() {
    return(
        <div className="home-page">
            <Slider />    
            <Signup signUp={signUpDetails}/>    
            <Cakelist />
        </div>
    )
}

export default Home;