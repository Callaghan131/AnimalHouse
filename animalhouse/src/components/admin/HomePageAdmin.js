import '../../css/admin.css';
import UserList from "./pages/UserList";
import NavbarAdmin from "./navabarAdmin";
function HomePageAdmin(){
    return(
        <><NavbarAdmin />
        <div className="adminContainer">
            <UserList/>
        </div></>
    );
}
export default HomePageAdmin;