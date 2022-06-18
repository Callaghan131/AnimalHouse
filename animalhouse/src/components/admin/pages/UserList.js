import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

import Paper from '@mui/material/Paper';export default function UserList(){
  function createData(
  username,
  pMemory,
  pQuiz,
  password,
) {
  return { username, pMemory, pQuiz, password};
}

const rows = [
  createData('Davide Urbinati', 159, 0, 'admin'),
  createData('Username1', 237, 9, 'admin2'),
  createData('MaxCallegari', 262, 16, 'admin3'),
  createData('Admin', 305, 3, 'admin4'),
  createData('Prova', 356, 16, 'admin5'),
];
return(
  <TableContainer component={Paper} style={{padding:"20px", paddingRight:"30px"}}>
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
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell>{row.username}</TableCell>
          <TableCell align="right">{row.password}</TableCell>
          <TableCell align="right">{row.pMemory}</TableCell>
          <TableCell align="right">{row.pQuiz}</TableCell>
          <TableCell align="right">
           <Link to={"/LoginPage/HomePageAdmin/UserList/"+row.username}>
            <button className="userListEdit" style={{border:"none", borderRadius:"10px", padding:"5px 10px", backgroundColor:"green", color:"white", cursor:"pointer", marginRight:"20px"}}>Edit</button>
           </Link>
            
            <DeleteIcon style={{color:"red", cursor:"pointer"}}></DeleteIcon>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
)
}

