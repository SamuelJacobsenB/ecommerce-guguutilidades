'use client';

import { useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { SideBoxType } from '@/types/SideBoxType';
import './SideBox.css';

const SideBox = (props: SideBoxType) => {
  const SideBoxDiv: any = useRef();

  const handleCloseSideBox = (): void => {
    SideBoxDiv.current.classList.add('disable');
  };

  return (
    <div
      className={`side_box disable ${props.className}`}
      onClick={handleCloseSideBox}
      ref={SideBoxDiv}
    >
      <div className="close_side_box_area">
        <IoClose className="close_side_box_icon" />
      </div>
      <div className="side_box_content">{props.children}</div>
    </div>
  );
};

export default SideBox;
