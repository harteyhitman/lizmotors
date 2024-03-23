import { useState } from 'react';
import S from '../end-users/enduser.module.css'
import Hover from './Hover';
import { IoMdReturnLeft } from "react-icons/io";
import { Link } from 'react-router-dom';




const EndUsers = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (<>
    <Link to='/marketresearch/b2c'>
      <IoMdReturnLeft className={S.return} />
    </Link>

    <div className={S.end_users}>
        <div className={S.users} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Online {isHovered && (<Hover />)}</div>
      <div className={S.users} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>Interviews {isHovered1 && (<Hover />)}</div>
     <div className={S.users} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>Public Data {isHovered2 && (<Hover />)}</div>
      <div className={S.users} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>Health {isHovered3 && (<Hover />)}</div>
    </div>
  </>
  )
}

export default EndUsers