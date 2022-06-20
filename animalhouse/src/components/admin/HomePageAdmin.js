import UserList from "./pages/UserList";
import NavbarAdmin from "./NavbarAdmin";
function HomePageAdmin(){
    return(
        <><NavbarAdmin />
        <div className="adminContainer" style={{display:"flex"}}>
            <UserList/>
        </div></>
    );
}
export default HomePageAdmin;