/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Movie from "views/Movie";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Notifications from "views/Notifications.jsx";
import Genre from "views/Genre";
import Template from "views/Template";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  // {
  //   path: "/moviedetail/:movie_id",
  //   name: "Chi tiết phim",
  //   icon: "pe-7s-video",
  //   component: MovieDetail,
  //   layout: "/admin"
  // },
  {
    path: "/movies",
    name: "Danh sách phim",
    icon: "pe-7s-film",
    component: Movie,
    layout: "/admin"
  },
  {
    path: "/genres",
    name: "Chủ đề phim",
    icon: "pe-7s-note2",
    component: Genre,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    Upgrade: true,
    path: "/users",
    name: "User",
    icon: "pe-7s-user",
    component: Template,
    layout: "/admin"
  }
];

export default dashboardRoutes;
