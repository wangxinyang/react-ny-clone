import './rightSideBar.scss'
import { Link } from 'react-router-dom'
import SideContent from './sideContent'

interface IProps {
  isSinger: boolean
  title: string
}

const RightSideBar = ({ isSinger, title }: IProps) => {
  return (
    <div className='side-wrapper'>
      <div className='side-title'>
        <span>{title}</span>
        {isSinger ? <Link to={'/discover/artist/signed'}>查看全部 &gt;</Link> : ''}
      </div>
      <div className='side-content'>
        {[0, 1, 2].map((index) => (
          <SideContent key={index} isSinger={isSinger} />
        ))}
      </div>
      {isSinger ? <div className='side-btn'></div> : ''}
    </div>
  )
}

export default RightSideBar
