import Sidebar from "./sidebar/Sidebar";
import Topbar from "./Topbar";
import '../../css/admin.css';
import UserList from "./pages/UserList";
function HomePageAdmin(){
    return(
        <><Topbar />
        <div className="adminContainer">
            <Sidebar />
            <UserList/>
        </div></>
    );
}
export default HomePageAdmin;