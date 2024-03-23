import { Link } from 'react-router-dom'
import style from '../components/components.module.css'
import { IoMdReturnLeft } from 'react-icons/io'
import S from '../end-users/enduser.module.css'

const B2c = () => {
  return (
    <>
      <Link to='/marketresearch'>
        <IoMdReturnLeft className={S.return} />
      </Link>
      <div className={style.b2c_container}>
        <Link className={style.link_b2c} to='/marketresearch/b2c/endusers'>
          <button>b2c</button>
        </Link>
        <Link className={`${style.link_b2c}`} to='/marketresearch/b2c/endusers'>
          <button className='link_btn2'>b2c</button>
        </Link>
      </div>
    </>

  )
}

export default B2c