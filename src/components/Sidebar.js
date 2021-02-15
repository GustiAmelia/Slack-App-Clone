import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon/>
            Amel
          </h3>
        </div>
        <CreateIcon/>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
      <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
      <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
      <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
      <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
      <hr/>
      <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
      <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
    </div>
  )
}

export default Sidebar
