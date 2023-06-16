

import './MainPage.css'
import Tabs from './Tabs.jsx'
import Dashboard from './Dashboard.jsx'


function MainPage() {


  return (

     <div className="flex h-screen w-screen">
        <div className='w-1/5'> 
           <Tabs />
        </div>
        <div className='flex-1' > 
           <Dashboard />
        </div>
     </div>

  )
}

export default MainPage
