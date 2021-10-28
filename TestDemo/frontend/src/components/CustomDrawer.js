import { Drawer } from '@material-ui/core';
import React from 'react'
import AddEmployeeFrom from './AddEmployeeFrom';


function CustomDrawer() {
    
  return (
    <Drawer
      anchor={"right"}
      elevation={3}
      open={true}
    >
      <div className="p-4">
            <AddEmployeeFrom/>
      </div>
    </Drawer>
  );
}

export default CustomDrawer
