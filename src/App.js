import "./App.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import BookProduct from "./Pages/BookProduct/BookProduct";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path="/product/:id">
              <BookProduct></BookProduct>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
