import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {

  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => 
  {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) 
    {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      {/* Menu button */}
      <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      {/* Drawer component */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Employees" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Transporters" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Buyers" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default Sidebar