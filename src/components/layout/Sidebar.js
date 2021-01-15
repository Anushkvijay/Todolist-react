import React from 'react';
// import { Content } from './Content';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';
export const Sidebar = () => {
    return(
    <div className="sidebar" data-testid ="sidebar">
       <ul className="sidebar__generic">
       <li><span><FaInbox/></span><span>Inbox</span></li>
       <li><span><FaRegCalendar/></span><span>Today</span></li>
       <li><span><FaRegCalendarAlt/></span><span>Next 7 Days</span></li>
       </ul> 
       <div className ="sidebar__middle">
    <span><FaChevronDown/></span><span><h2>Projects</h2></span>
    </div> 
    <ul className="sidebar__projects">Projects will be here !</ul>
    add project component here!  
    </div>
     
);}