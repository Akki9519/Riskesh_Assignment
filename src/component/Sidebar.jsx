import React from 'react'
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className="bg-blue-400 h-screen w-36">
    <div className="border-solid border-2 m-2">
    <ChangeHistoryIcon sx={{margin:"5px"}}/>
    </div>
    <div className="border-solid border-2 m-2">
    <FolderIcon sx={{margin:"5px"}}/>
    </div>
    <div className="border-solid border-2 m-2">
    <SettingsIcon sx={{margin:"5px"}}/>
    </div>
    </div>
  )
}

export default Sidebar