import { Link } from 'react-router-dom'
import './sideContent.scss'

interface IProps {
  isSinger: boolean
}

const SideContent = ({ isSinger }: IProps) => {
  return (
    <div className={isSinger ? 'singer-item' : 'dj-item'}>
      {isSinger ? (
        <Link to='/' className='singer-item_link'>
          <div className='singer-item_head'>
            <img src='' alt='' />
          </div>
          <div className='singer-item_info'>
            <h4>
              <span className='singer-item_thide'>张惠妹aMEI</span>
              <p className='singer-item_desc'>台湾歌手张惠妹</p>
            </h4>
          </div>
        </Link>
      ) : (
        <>
          <Link to='/' className='dj-item_link'>
            <img src='' alt='' />
          </Link>
          <div className='dj-item_info'>
            <p>
              <a href='/user/home?id=278438485' className='nm-icn f-thide s-fc0'>
                陈立
              </a>
            </p>
            <p className='f-thide s-fc3'>心理学家、美食家陈立教授</p>
          </div>
        </>
      )}
    </div>
  )
}

export default SideContent
