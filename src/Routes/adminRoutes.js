import React from "react";
// Pages
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const UniversityMasterList = React.lazy(() => import('../pages/UniversityMaster/UniversityMasterList/UniversityMasterList'))
const UniversityMasterView = React.lazy(() => import('../pages/UniversityMaster/UniversityMasterView/UniversityMasterView'))
const UniversityMasterCreate = React.lazy(() => import('../pages/UniversityMaster/UniversityMasterCreate/UniversityMasterCreate'))




const AdminRoutes = [
    { path: "/", name: "Dashboard", element: Dashboard, exact: true },
    { path: "/UniversityMasterList", name: "UniversityMasterList", element: UniversityMasterList, exact: true },
    { path: "/UniversityMasterList/UniversityMasterView", name: "UniversityMasterView", element: UniversityMasterView, exact: true },
    { path: "/UniversityMasterList/UniversityMasterCreate", name: "UniversityMasterCreate", element: UniversityMasterCreate, exact: true },
];

export default AdminRoutes;

