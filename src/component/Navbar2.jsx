import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';

const Navbar2 = () => {
  return (
    <div className="h-20 bg-slate-400 pr-20 pt-4 border-b-2 flex flex-row">
      <div className="font-bold text-xl ml-5">Projects</div>
      <div className="float-right" style={{marginLeft:"1200px"}}>
        <NotificationsIcon sx={{marginRight:"20px"}}/>
        <AccountCircleIcon sx={{marginRight:"20px"}}/>
        <HelpIcon sx={{marginRight:"20px"}}/>
      </div>
    </div>
  )
}

export default Navbar2