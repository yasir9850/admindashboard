import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Yasiradmin</span>
            </div>
            <hr></hr>
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreIcon className='icon' />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <InsertChartIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className='icon' />
                        <span>Notification</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>

                </ul>
            </div>
            <div className='bottom'>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
        
            </div>
        </div>
    )
}

export default Sidebar