import React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Pay from "../Pay/Pay";
import "./Dashboard.css";
const Dashboard = () => {
  const { logOut } = useAuth();
  let { url, path } = useRouteMatch();
  console.log(url, path);

  return (
    <div>
      <div className="dashboard-container">
        <h1 className="bg-primary text-white m-0 p-3">DASHBOARD</h1>
        <ul className="sidebar nav flex-column">
          <li className="nav-item mt-5">
            <NavLink className="text-dark fw-bold nav-link active" to="/home">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-dark fw-bold nav-link" to={`${path}/pay`}>
              PAY
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="text-dark fw-bold nav-link"
              to={`${url}/myOrders`}
            >
              MY ORDERS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="text-dark fw-bold nav-link"
              to={`${url}/review`}
            >
              REVIEW
            </NavLink>
          </li>
          <button
            onClick={logOut}
            className="mt-5 btn btn-success text-white py-1"
          >
            LogOut
          </button>
        </ul>
      </div>
      <Switch>
        <Route exact path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
