import { Link } from 'react-router-dom'
import D from '../../../dashboard/dash.module.css'
const Research = () => {

  return (

    <div className={D.menu_continer}>
      <Link className={D.b2c} to='/marketresearch/b2c'>
        <div className={D.menu}>
          <h1>External</h1>
        </div>
      </Link>
      <Link className={D.b2c} to='/marketresearch/b2c'>
        <div className={D.menu}>
          <h1>Internal</h1>
        </div>
      </Link>

    </div>


  )
}

export default Research