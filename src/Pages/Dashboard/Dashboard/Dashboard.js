import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DashboardHome from "../DashboardHome/DashboardHome";
import Pay from "../Pay/Pay";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import ManageOrders from "../ManageOrders/ManageOrders";
import AddProduct from "../AddProduct/AddProduct";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageProduct from "../ManageProduct/ManageProduct";

const drawerWidth = 180;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logOut } = useAuth();

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink style={{ textDecoration: "none" }} to="/home">
        <Button sx={{ mt: 2 }} color="inherit">
          Home
        </Button>
      </NavLink>
      <Divider />
      {admin ? (
        <Box>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`${url}/manageOrders`}
          >
            <Button sx={{ mt: 2 }} color="inherit">
              Manage All Orders
            </Button>
          </NavLink>
          <br />
          <NavLink style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
            <Button sx={{ mt: 2 }} color="inherit">
              Make Admin
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to={`${url}/addProduct`}>
            <Button sx={{ mt: 2 }} color="inherit">
              Add Product
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`${url}/manageProduct`}
          >
            <Button sx={{ mt: 2 }} color="inherit">
              Manage Products
            </Button>
          </NavLink>
        </Box>
      ) : (
        <Box>
          <NavLink style={{ textDecoration: "none" }} to={`${url}/pay`}>
            <Button sx={{ mt: 2 }} color="inherit">
              Pay
            </Button>
          </NavLink>
          <br />
          <NavLink style={{ textDecoration: "none" }} to={`${url}/myOrders`}>
            <Button sx={{ mt: 2 }} color="inherit">
              My Orders
            </Button>
          </NavLink>
          <br />
          <NavLink style={{ textDecoration: "none" }} to={`${url}/review`}>
            <Button sx={{ mt: 2 }} color="inherit">
              Review
            </Button>
          </NavLink>
        </Box>
      )}
      <Divider sx={{ mt: 5 }} />
      <br />
      <button onClick={logOut} className="btn btn-success text-white py-1">
        LogOut
      </button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
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
            sx={{ mr: 2, display: { sm: "none" } }}
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
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route exact path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute exact path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
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
