// import { Children } from 'react'
import D from '../dashboard/dash.module.css'
import NavMenu from '../dashboard/nav-menu/nav-menu'
import M from './main.module.css'


const Main = ({children}) => {
  return (
   
      <div className={M.main}>
        <div className={M.nav_menu}>
            <NavMenu />

        </div>
        <div className={M.child}>
            {children}
        </div>
    </div>
  
  
  )
}

export default Main