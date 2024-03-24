
import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import D from '../../dashboard/dash.module.css'
import { navMenuItems } from '../../data/data'


const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');



    // const toggleSidebar = () => {
    //     setIsOpen(!isOpen);
    //     console.log('clicked')
    // };
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (

        <div className={D.dash_container}>
            <div className={D.navbar_container}>
                <Link className={D.Logo} to='/'>
                    <h1 className={D.h1}>Lizmotors</h1>
                </Link>
                
                 <Link to='/' className={D.hamburger_menu}>
                    <h1>LzM</h1>
                 </Link>
            </div>


            {navMenuItems.map((items, index) => (
                <Link className={`${D.link} ${isOpen ? 'open' : 'open'}`} 
                to={items.route} key={items.id}
                 onClick={activeLink === index ? 'active' : ''}>
                    <div className="nav_items">
                        <img src={items.img} alt="" /> <div className="item">{`${items.map}`}</div>
                    </div>
                </Link>

            ))}
        </div>
    )
}

export default NavMenu