import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import SideList from './SideList';
const SideBar
 = () => {
    return ( <div className="sidebar">

        
    <div className = "videos_type">
    <SideList title="Home" active= "active"><HomeIcon/> </SideList>
        <SideList title="Treading"><WhatshotIcon/> </SideList>
        <SideList title="Subscriptions"><SubscriptionsIcon/> </SideList>

    </div>
    <div className = "videos_libray">
    <SideList title="History"><HistoryIcon/> </SideList>
    <SideList title="Library"><VideoLibraryIcon/> </SideList>

    </div>
    <div className = "videos_Category">

    </div>

    </div>);
}
 
export default SideBar;