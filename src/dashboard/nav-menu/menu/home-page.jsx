import D from '../../../dashboard/dash.module.css'
import HomeImg from '../../../assets/image/home_background.jpeg'
const HomePage = () => {
  return (
    <div className={D.home_page}>
        <h1>LIZMOTORS</h1>
        <img src={HomeImg} alt="" />
    </div>
  )
}

export default HomePage