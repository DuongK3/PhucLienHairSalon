import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import ListServiceComponent from './Components/InfoManager/ListServiceComponent'
export default function ListService() {
    return (
        <>
            
            <div className='dashboard flex'>
                <div className='dashboardContainer flex'>
                    <Sidebar />
                    <div className='mainContent'>
                        <ListServiceComponent />
                            
                    </div>
                    
                </div>
            </div>

                
            

        </>
        
    )
}