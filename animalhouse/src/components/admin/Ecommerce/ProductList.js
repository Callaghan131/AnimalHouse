import React, {Component} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { withRouter } from '../../../withRouter';
import NavbarAdmin from "../NavbarAdmin";
import '../../../css/ProductList.css'
import { TableRow } from "@mui/material";

class ProductList extends Component{

    state={
        product:[],
        loaded:false
    }

    getDataProducts=()=>{
        var data=[];
        var newArray=[...this.state.product];
        fetch("http://localhost:2800/magazzino")
          .then(res => res.json())
          .then(
            (result) => {
              data=result;
              for(var i=0; i<data.length;i++){
                newArray.push(data[i])
                
                
              }
              this.setState({product:newArray});
              this.setState({loaded:true})
            }
        )
    }

    componentWillMount=()=>{
        this.getDataProducts();
    }


    render(){
        return(
            <>
            <NavbarAdmin/>
            
            <TableContainer style={{padding:"20px", paddingRight:"30px", background:"white"}}>
            <button className="userListEdit" style={{border:"none", borderRadius:"10px", padding:"5px 10px", backgroundColor:"green", color:"white", cursor:"pointer", marginLeft:"87vw"}}>Add Product</button>
                <Table style={{ width:"95vw", height:"87vh" }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Immagine</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Categoria</TableCell>
                        <TableCell>Prezzo</TableCell>
                        <TableCell>Quantità</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.loaded ? (this.state.product.map((product) => (
                        product.map((row)=>(
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell><img src={`data:image/jpeg;base64,${row.immagine}`} style={{widht:"20vw", height:"20vh"}}></img></TableCell>
                                <TableCell>{row.nome}</TableCell>
                                <TableCell>{row.categoria}</TableCell>
                                <TableCell>{row.prezzo}</TableCell>
                                <TableCell>{row.disponibilità}</TableCell>
                                <TableCell>
                                <Link to={"/LoginPage/HomePageAdmin/ProductList/"+row.categoria+"/"+row.id}>
                                    <button className="userListEdit" style={{border:"none", borderRadius:"10px", padding:"5px 10px", backgroundColor:"green", color:"white", cursor:"pointer", marginRight:"20px"}}>Edit</button>
                                </Link>
                                    
                                    <DeleteIcon style={{color:"red", cursor:"pointer"}}></DeleteIcon>
                                </TableCell>    
                            </TableRow>
                        ))
                    ))):null}
                    </TableBody>
                </Table>
            </TableContainer>
            </>
        );
    }
}

export default withRouter(ProductList);