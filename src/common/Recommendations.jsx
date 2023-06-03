
import Carousel from './Carousel.jsx'
// eslint-disable-next-line no-undef
function Recommendations() {
 
return(
    <div>
       <span className="relative">
  <span className='ml-10 -mt-5 font-poppins font-bold text-xl'>Recommendations</span>
  <span className="absolute bottom-0 right-1/2 w-1/5 border-b border-green-500 border-xl"></span>
</span>
        <div className="-ml-40">
           <Carousel/> 
         </div>
    </div> 
    );
  }
  

  export default Recommendations;