import React from 'react'; 
import './Sidebar.css'
import SidebarRow from './SidebarRow'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StoreFrontIcon from '@material-ui/icons/Store'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
//import { useStateValue } from '../SteProvider'
import avatar from './me.jpg'; 
import { useStateValue } from '../StateProvider'

const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title="Papi" /> 
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={ PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StoreFrontIcon} title="MarketPlace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More"/>

        </div>

    )
}

export default Sidebar; 
