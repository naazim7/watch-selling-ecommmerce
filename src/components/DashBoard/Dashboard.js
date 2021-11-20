

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import AdminRoute from '../../pages/AppRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from './../hooks/useAuth';
import MakeAdmin from './AdminPanel/MakeAdmin';
import ManageAllOrder from './AdminPanel/ManageAllOrder';
import ManageProduct from './AdminPanel/ManageProduct';
import DashboardHome from './DashboardHome';
import AddReview from './UserPanel/AddReview';
import Orders from './UserPanel/Orders';
import Payment from './UserPanel/Payment';
const drawerWidth = 240;

function Dashboard(props) {
  const {admin,logOut } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const drawer = (
    <div>
    
    <h4 className="text-center my-3 text-primary">Controlls</h4>
      <Divider />
      {
        admin ? (<><p className='dashLink'> <Link to={`${url}/makeadmin`}>Make an Admin</Link></p>
        <Divider />
      <p className='dashLink'> <Link to={`${url}/addproduct`}>Add New Product</Link></p>
        <Divider />
     <p className='dashLink'><Link to={`${url}/manageOrders`}>Manage All Orders</Link></p>
       <Divider />
      <p className='dashLink'> <Link to={`${url}/manageProduct`}>Manage Product</Link></p>
          <Divider /></>)
          :
          <>
          
            <p className='dashLink'> <Link to={`${url}/orders`}>Orders</Link></p>
        <Divider />
      <p className='dashLink'> <Link to={`${url}/payment`}>Payment</Link></p>
        <Divider />
     <p className='dashLink'><Link to={`${url}/addreview`}>Add a Review</Link></p>
       <Divider />
      </>
      }
    <p className='dashLink'  onClick={logOut}> <Link to='/'>Logout</Link></p>
      
      <Divider />
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (<>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      
         <Switch>
        <Route exact path={`${path}`}>
            <DashboardHome></DashboardHome>
            
        </Route>
        <AdminRoute path={`${path}/makeadmin`}>
        <MakeAdmin></MakeAdmin>
        </AdminRoute>
      <AdminRoute path={`${path}/addproduct`}>
        <AddProduct></AddProduct>
         
        </AdminRoute>
      <Route path={`${path}/manageOrders`}>
     <ManageAllOrder></ManageAllOrder>
         
        </Route>
      <AdminRoute path={`${path}/manageProduct`}>
    <ManageProduct></ManageProduct>
         
        </AdminRoute>
      <Route  path={`${path}/orders`}>
    <Orders></Orders>
         
        </Route>
      <Route path={`${path}/payment`}>
    <Payment></Payment>
         
        </Route>
      <Route path={`${path}/addreview`}>
    <AddReview></AddReview>
         
        </Route>
      </Switch>

    
      </Box>
    </Box>

     
    
    





    </>
    

    
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
