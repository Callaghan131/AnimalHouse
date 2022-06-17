import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Punteggio memory</TableCell>
            <TableCell align="right">Punteggio quiz</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}