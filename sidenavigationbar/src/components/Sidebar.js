
import { AnimatePresence, motion } from "framer-motion"
import { NavLink, Outlet } from "react-router-dom";

// icons
import HomeIcon from '@mui/icons-material/Home';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { Box } from "@mui/material";

const routes = [
    {
        path: '/sidebar',
        name: 'Home',
        icon: <HomeIcon />
    },
    {
        path: '/sidebar/users',
        name: 'Users',
        icon: <HomeIcon />
    }, {
        path: '/sidebar/message',
        name: 'Message',
        icon: <HomeIcon />
    }, {
        path: '/sidebar/analytics',
        name: 'Analytics',
        icon: <HomeIcon />
    }, {
        path: '/sidebar/filemanager',
        name: 'File Manager',
        icon: <HomeIcon />
    }, {
        path: '/sidebar/order',
        name: 'Order',
        icon: <HomeIcon />
    }, {
        path: '/sidebar/saved',
        name: 'Saved',
        icon: <HomeIcon />
    }, {
        path: '/sidebar/settings',
        name: 'Settings',
        icon: <HomeIcon />
    }
]

const Sidebar = (props) => {

    const [isOpen, setIsOpen] = useState(true)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const inputAnimate = {
        hidden:{
            width:0,
            padding:0,
            opacity:0,
            transition:{duration:0.2},
        },
        show:{
            width:'140px',
            padding:'5px 15px',
            transition:{duration:0.2},
            opacity:1
        }

    }

    const showAnimation = {
        hidden:{
            width:0,
            opacity:0,
            transition:{duration:0.5},
        },
        show:{
            width:'auto',
            transition:{duration:0.5},
            opacity:1
        }

    }

    return (
        <>
        <Box component='container'><h1>Navbar</h1></Box>
            <div className="main-container">

                {/* whole navbar inside this  */}
                <motion.div animate={{ width: isOpen ? '200px' : '45px' }} className="sidebar">

                    {/* top section  */}
                    <div className="top_section">

                        <AnimatePresence>
                            {isOpen && <motion.h1  initial="hidden" animate="show" exit="hidden" variants={showAnimation} className="logo">Logo</motion.h1>}
                        </AnimatePresence>

                        <div className="bars" onClick={toggle}><ReorderIcon /></div>
                    </div>

                    {/* serch bar  */}
                    <div className="search">
                        <div className="serach_icon">
                            <SearchIcon />

                            <AnimatePresence>
                                {isOpen && <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimate} placeholder="Search ..." />}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* all menues  */}
                    <section className="routes">
                        {routes.map((route) => (
                            <NavLink to={route.path} key={route.name} className='link'>
                                <div className="icon">{route.icon}</div>
                                <AnimatePresence>
                                    {isOpen && <motion.div initial="hidden" animate="show" exit="hidden" variants={showAnimation} className="link_text">{route.name}</motion.div>}
                                </AnimatePresence>
                            </NavLink>
                        )

                        )}
                    </section>
                </motion.div>

                <main>{props.children}</main>
            </div>
            <Outlet/>
        </>
    )
}

export default Sidebar
