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
import "./ListContainer"








const drawerWidth = 240;
const LeftMenu = () => {




    return(
            <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
                <div class="btn">
                <Button variant="contained" color="success">
                Sources
                </Button>
                <Button disabled variant="outlined" color="error">
                Imports
                </Button>
                </div>
          <List>
            {['Users'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
            <List>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography><div class="todos">Todos</div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    
                    <p style={{ textAlign: 'center' }}>Todo 1</p>
                    
                    
                    <p style={{ textAlign: 'center' }}>Todo 2</p>
                </Typography>
                </AccordionDetails>
            </Accordion>
                </List>
                

        </Box>
      </Drawer>
    )
}

export default LeftMenu