import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import './MainContainer.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const baseURL = "https://jsonplaceholder.typicode.com/users";

const ListContainer = () => {





    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log("users***", post)
            setPost(response.data);
        });
    }, []);

    if (!post) return null;


    return (
        


<TableContainer component={Paper}>
<Toolbar />
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
      
      <TableCell align="center">id</TableCell>
      <TableCell align="center">name</TableCell>
      <TableCell align="center">username</TableCell>
      <TableCell align="center">email</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {post.map((post) => (
      <TableRow
        key={post.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="center" component="th" scope="row">
          {post.id}
        </TableCell>
        <TableCell align="center">{post.name}</TableCell>
        <TableCell align="center">{post.username}</TableCell>
        <TableCell align="center">{post.email}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>


    );
}

export default ListContainer