import "./App.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import BookProduct from "./Pages/BookProduct/BookProduct";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Pay from "./Pages/Dashboard/Pay/Pay";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute exact path="/product/:id">
              <BookProduct></BookProduct>
            </PrivateRoute>
            {/* <PrivateRoute exact path="/addNewPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute> */}
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
