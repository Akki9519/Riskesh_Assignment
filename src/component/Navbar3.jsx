import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '@mui/material';

const Navbar3 = () => {
    return (
        <div className="h-12 w-screen bg-slate-400 flex flex-row">
          <div className="border-solid border-2 m-2 rounded">
            <CalendarMonthIcon/>
            </div>
            <div className="border-solid border-2 m-2 w-12 flex flex-row rounded">
            <FilterAltIcon/>
            <div className="text-white">All</div>
            </div>
            <div className="border-solid border-2 m-2 p-1 flex flex-row w-60 rounded">
            
                <input type="text" placeholder="Search" className="bg-inherit" ></input>
            <SearchIcon/>
            </div>
            <Button variant="contained" sx={{marginLeft:"800px",height:"20px",marginTop:"10px"}}>+ New Project</Button>
        </div>
    )
}

export default Navbar3