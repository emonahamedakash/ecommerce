import { Chip, IconButton} from '@mui/material'
import React, {useEffect, useState} from 'react'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Link, useNavigate} from "react-router-dom";
import {Delete, Edit} from "@mui/icons-material";
import TableContainer from "@mui/material/TableContainer";
import axios from "axios";
import {BASE_URL} from "../constants/baseUrl";

export const User = ()=> {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const routeChange = (path) =>{
        navigate(path);
    }

    useEffect( () => {
        fetchUsers().then();
    }, []);

    const fetchUsers = async ()=> {
        await axios.get(`${BASE_URL}/api/v1/user/list`, {
            params: {
                "access_token": localStorage.getItem("accessToken")
            }
        }).then((response) => {
            console.log(response.data);
            let temp = [];
            response.data.forEach((item) => {
                let data = item;
                temp.push(data);
                console.log(item.id);
            })
            setUsers(temp);
        });
    }

    return (
        <div style={{margin:16}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: 'bold'}}>User ID</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>Name</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>Email Address</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>Username</TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="right">Role</TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{user.id}</TableCell>
                                <TableCell component="th" scope="row">{user.name}</TableCell>
                                <TableCell component="th" scope="row">{user.email}</TableCell>
                                <TableCell component="th" scope="row">{user.username}</TableCell>
                                <TableCell align="right"><Chip label={user.role} color={user.role=='Admin'?'error':'success'}/></TableCell>
                                <TableCell align="right">
                                    <Link to={'/edit-user/'+user.id}>
                                        <IconButton size='small' color='primary'>
                                            <Edit/>
                                        </IconButton>
                                    </Link>
                                    <IconButton size='small' color='error'>
                                        <Delete/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}