import React from 'react';
import { IoClose } from 'react-icons/io5';
import './SideBox.css';

const SideBox = ({ children }: any) => {
  return (
    <div className="side_box disable">
      <div className="close_side_box_area">
        <IoClose className="close_side_box_icon" />
      </div>
      <div className="side_box_content">{children}</div>
    </div>
  );
};

export default SideBox;
