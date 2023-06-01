import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line react-hooks/rules-of-hooks
function Actualities() {
  
  return (
    <div className="flex flex-row ml-20">
    <div className="ml-20 flex flex-col w-6/12 mr-1 px-0 h-full mt-1 mb-16">
      <div className="flex items-center py-6 px-10">
        <div className="flex flex-row h-6 w-6 itens-center">
        <FontAwesomeIcon 
          icon={faEnvelope}
          className="px-3 py-3 rounded-xl text-dark-800 drop-shadow-3xl ml-auto w-7 h-7"
        />
        <span className='mr-56 -mt-5 font-poppins font-bold text-xl'>Actualités</span>
        </div>
        <div className="flex items-center py-6 px-80">
         </div>
      </div>
      <div className="px-10 pb-5 mb-4">
      </div>
  <div className="flex flex-col rounded-3xl px-10 pb-10 overflow-scroll bg-blue-100 ml-5 border border-bottom border-black mb-8 ">

:<p>loading...</p>

</div>
</div>
</div>
  );
}  

export default Actualities