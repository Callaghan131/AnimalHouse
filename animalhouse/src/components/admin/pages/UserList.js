import React, {Component} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin";
import { withRouter } from '../../../withRouter';
import { DeleteService } from "../../Delete/DeleteService";


import trashIco from '../../../images/trash.svg';


class UserList extends Component{

  state={
    user:[],
    scoreMemory:[],
    scoreQuiz:[],
    loaded: false
  }

  getDataUser=()=>{
    var data=[];
    var newArray=[...this.state.user];
    fetch("http://localhost:2800/users")
      .then(res => res.json())
      .then(
        (result) => {
          data=result;
          var cont=0;
          
          for(var i=0; i<data.length;i++){
            console.log(data[i])
            if(data[i]["admin"]!=true){
              
              newArray.push(data[i])
            }
            
            
          }
          
          this.setState({user:newArray});
          this.setState({loaded:true})
        }
    )
  }

  getDataQuiz=()=>{
    var data=[];
    var newArray=[...this.state.scoreQuiz];
    fetch("http://localhost:2800/scoreQuiz")
      .then(res => res.json())
      .then(
        (result) => {
          data=result;
          for(var i=0; i<data.length;i++){
            newArray.push(data[i])
            
          }
          console.log(1);
          this.setState({scoreQuiz:newArray});
        }
    )
  }

  getDataMemory=()=>{
    var data=[];
    var newArray=[...this.state.scoreMemory];
    fetch("http://localhost:2800/scoreMemory")
      .then(res => res.json())
      .then(
        (result) => {
          data=result;
          for(var i=0; i<data.length;i++){
            newArray.push(data[i])
            
          }
          console.log(1);
          this.setState({scoreMemory:newArray});
          
        }
    )
  }

  componentWillMount=()=>{
    this.getDataUser();
    this.getDataMemory();
    this.getDataQuiz();
  }

  scoreUserQuiz=(username)=>{
    var newArray=[...this.state.scoreQuiz];
    for(var i=0; i<newArray.length;i++){
      if(newArray[i]["username"]==username){
        return newArray[i]["punteggio"];
      }
      
    }
  }

  scoreUserMemory=(username)=>{
    var newArray=[...this.state.scoreMemory];
    for(var i=0; i<newArray.length;i++){
      if(newArray[i]["username"]==username){
        return newArray[i]["punteggio"];
      }
      
    }
  }
  
  deleteUser = (username) =>{
    let deleteService = new DeleteService();
    deleteService.deleteUser(
        {
            username: username
        }
    )
    .then(data1 => {
        switch(data1.status){
            case 200: //Utente eliminato
            // Il redirect non funziona
            this.props.navigate("/LoginPage/HomePageAdmin");
            break;
            case 404: //Utente non trovato e non eliminato
                this.error="Utente non trovato";
            break;
            default:
                throw 'Stato non gestito';
                break;
        }
        console.log(data1)
    });
  }

  render(){
  return(
    <>
    <TableContainer style={{padding:"20px", paddingRight:"30px", background:"white"}}>
      <Table style={{ width:"95vw", height:"87vh" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Punteggio memory</TableCell>
            <TableCell align="right">Punteggio quiz</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.loaded ? (this.state.user.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.username}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">{this.scoreUserMemory(row.username)}</TableCell>
              <TableCell align="right">{this.scoreUserQuiz(row.username)}</TableCell>
              <TableCell align="right">
              <Link to={"/LoginPage/HomePageAdmin/UserList/"+row.username}>
                <button className="userListEdit" style={{border:"none", borderRadius:"10px", padding:"5px 10px", backgroundColor:"green", color:"white", cursor:"pointer", marginRight:"10px"}}>Edit</button>
              </Link>
              <DeleteIcon style={{color:"red", cursor:"pointer"}} onClick={() => this.deleteUser(row.username)}></DeleteIcon>  

                {/* <a style={{cursor: "pointer"}} >
                

              <img
               src= {trashIco}
               alt="delete"
               width="24"
               height="24" />
              

                </a> */}

              </TableCell>
            </TableRow>
          ))):null}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    
  );
  }
 
}
export default withRouter(UserList);

