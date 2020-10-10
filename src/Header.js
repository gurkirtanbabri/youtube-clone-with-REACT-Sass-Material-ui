import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Header = () => {
    return (<div className="Header">
    
    <div className="leftDiv">
        <MenuIcon/>
        
<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"/>
    </div>

    
    <div className="canterDiv">
<input placeholder="Search"/>
<SearchIcon/>
    </div>

    
    <div className="rightDiv">
<VideoCallIcon/>
<AppsIcon/>
<NotificationsIcon/>
<AccountCircleIcon/>
    </div>
    </div>
        
    );
}
 
export default Header;
