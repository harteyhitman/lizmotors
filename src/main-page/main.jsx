// import { Children } from 'react'
import D from '../dashboard/dash.module.css'
import NavMenu from '../dashboard/nav-menu/nav-menu'


const Main = ({children}) => {
  return (
   
      <div className={D.main}>
        <div className={D.child}>
            <NavMenu />
            {children}
        </div>
       
    </div>
  
  
  )
}

export default Main