import React from 'react'; 
import fb from './fb.jpg'; 
import SearchIcon  from '@material-ui/icons/Search'; 
import HomeIcon  from '@material-ui/icons/Home'; 
import FlagIcon  from '@material-ui/icons/Flag'; 
import SubscriptionsOutlinedIcon  from '@material-ui/icons/SubscriptionsOutlined'; 
import StorefrontOutlinedIcon  from '@material-ui/icons/StorefrontOutlined'; 
import SupervisedUserCircleIcon  from '@material-ui/icons/SupervisedUserCircle'; 

import AddIcon  from '@material-ui/icons/Add'; 
import ForumIcon  from '@material-ui/icons/Forum'; 
import NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive'; 
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore'; 

import { Avatar, IconButton } from '@material-ui/core'; 
import { useStateValue } from '../StateProvider'
import './Header.css';


const Header = () => {
    const [{ user }, dispatch] = useStateValue()
    return  <div className="header"> 
                <div className="header_left">
                    <img src={fb} alt="papi" />
                </div>
              
                <div className="header_input">
                    <SearchIcon /> 
                    <input placeholder="search Fecebook" type="text" />
                </div>

                <div className="header_center">
                    <div className="header_option header_option--active">
                        <HomeIcon fontSize="large" /> 
                    </div>
                    <div className="header_option header_option">
                        <FlagIcon fontSize="large" /> 
                    </div>
                    <div className="header_option header_option">
                        <SubscriptionsOutlinedIcon fontSize="large" /> 
                    </div>
                    <div className="header_option header_option">
                        <StorefrontOutlinedIcon fontSize="large" /> 
                    </div>
                    <div className="header_option header_option">
                        <SupervisedUserCircleIcon fontSize="large" /> 
                    </div>
                </div>

                <div className="header_right">
                    <div className="header_info">
                        <Avatar src={user.photoURL} /> 
                        <h4>{user.displayName}</h4>
                    </div>
                    <IconButton>
                        <AddIcon /> 
                    </IconButton>

                    <IconButton>
                        <ForumIcon /> 
                    </IconButton>

                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>

                    <IconButton>
                        <ExpandMoreIcon /> 
                    </IconButton>
                </div>
            </div>
}

export default Header; 