
import cakes from './data';
import Cake from './Cake';


function Cakelist() {
    return(
        <div className="container-fluid mb-5">
            <div className="row">
                {cakes.map((each,index) => {
                    return (
                        <Cake data={each} key={index}/>
                    )
                } )}
            </div>
        </div>
    )
}

export default Cakelist;