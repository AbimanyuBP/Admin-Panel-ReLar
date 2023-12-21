import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import MopedIcon from '@mui/icons-material/Moped';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Mimin Panel</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <a href={route("dashboard")}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </a>
                <p className="title">LIST</p>
                <a href={route("users")}>
                    <li>
                        <PeopleIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </a>
                <a href={route("products")}>
                    <li>
                        <StoreIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </a>
                <li>
                    <MopedIcon className="icon"/>
                    <span>Deliveries</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <BarChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className="icon"/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetyIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <IntegrationInstructionsIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar