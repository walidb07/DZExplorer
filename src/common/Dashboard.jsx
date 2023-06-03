import HeadDash from "./HeadDash.jsx"
import Recommendations from "./Recommendations.jsx"
import Actualities from "./Actualities.jsx"
function  Dashboard() {
  
    return (
  
        <div className='flex-1 ml-1 mt-20 mr-10 bg-gradient-to-t from-blue-50 to-blue-100 h-5/6 rounded-3xl drop-shadow-2xl'>
        <div className="flex flex-col h-full">
          <div className="flex-1 mt-5 rounded-3xl">
            <HeadDash />
          </div>
          <div className="flex flex-row flex-1 -mt-20">
            <div className="w-1/2">
              <Recommendations />
            </div>
            <div className="w-1/2">
              <Actualities />
            </div>
          </div>
        </div>
      </div>
  
    )
  }
  
  export default Dashboard