import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
import {MdDashboard} from 'react-icons/md'
import { FcBusinessman } from 'react-icons/fc'
import { GrNotes } from 'react-icons/gr'
import { BsFillCalendarDateFill } from 'react-icons/bs'

const sidebarNavItems = [
      {
            display: 'Dashboard',
            icon: <MdDashboard/>,
            to: '/dashboard',
            section: 'dashboard'
      },
      {
            display: 'Patient',
            icon:<BsFillCalendarDateFill/>,
            to: '/patient',
            section: 'patient'
      },
      {
            display: 'Appointment',
            icon: <FcBusinessman/>,
            to: '/appointment',
            section: 'appointment'
      },
      {
            display: 'Billing',
            icon: <GrNotes/>,
            to: '/billing',
            section: 'billing'
      },
]

const Sidebar = () => {
      const [activeIndex, setActiveIndex] = useState(0);
      const [stepHeight, setStepHeight] = useState(0);
      const sidebarRef = useRef();
      const indicatorRef = useRef();
      const location = useLocation();

      useEffect(() => {
            setTimeout(() => {
                  const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
                  indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
                  setStepHeight(sidebarItem.clientHeight);
            }, 50);
      }, []);

      // change active index
      useEffect(() => {
            const curPath = window.location.pathname.split('/')[1];
            const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
            setActiveIndex(curPath.length === 0 ? 0 : activeItem);
      }, [location]);

      return <div className='sidebar bg-blue-800 text-white w-[230px] h-[780px] mr-3'>
            <div className="sidebar__logo">App Logo</div>
            <div ref={sidebarRef} className="sidebar__menu">
                  <div
                        ref={indicatorRef}
                        className="sidebar__menu__indicator"
                        style={{
                              transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                        }}
                  ></div>
                  {
                        sidebarNavItems.map((item, index) => (
                              <Link to={item.to} key={index} className="text-white">
                                    <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                          <div className="sidebar__menu__item__icon  text-white">
                                                {item.icon}
                                          </div>
                                          <div className="sidebar__menu__item__text  text-white">
                                                {item.display}
                                          </div>
                                    </div>
                              </Link>
                        ))
                  }
            </div>
      </div>;
};

export default Sidebar;