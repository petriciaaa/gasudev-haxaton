import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./dashboard.scss";
import { Routes, useRoutes } from "react-router";
import { Route } from "react-router";
import TeamEditForm from "./TeamEditForm";
import NewsEditForm from "./NewsEditForm";

const Dashboard = () => {
  const [val, setVal] = useState(true);

  return (
    <>
      <section className="dashboard h-auto w-auto flex   ">
        <nav className="sidebar flex flex-col items-start ">
          <div className="sidebar-wrapper  w-full">
            <NavLink
              className=" nav__element "
              to={`/dashboard`}
              onClick={(prev) => setVal(!prev)}
            >
              <button>
                <span> Новости</span>
              </button>
            </NavLink>
            <NavLink className=" nav__element" to={`/dashboard`}>
              <button>
                <span>Состав </span>
              </button>
            </NavLink>
          </div>
        </nav>
        <div className="dashboard__edit w-full">
          {/*           
            // <Routes>
            //   <Route path={`${location.pathname}`} element={<NewsEditForm />}>
            //     {" "}
            //   </Route>
            //   <Route
            //     path={`${location.pathname}/team_edit`}
            //     element={"<TeamEditForm />"}
            //   >
            //     {" "}
            //   </Route>
            // </Routes> */}
          {/* {location.pathname === "/dashboard" && visibleComponent}

          {location.pathname !== "/dashboard/team_edit" && <TeamEditForm />} */}
          {!val ? <NewsEditForm /> : <TeamEditForm />}
        </div>
      </section>
    </>
  );
};
export default Dashboard;
