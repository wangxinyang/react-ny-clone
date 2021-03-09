import './rtoplist.scss'
import ThemeTitle from 'src/components/Common/ThemeTitle/themeTitle'
import { IPlayList } from 'src/api/typings/recommend'
import { Link } from 'react-router-dom'

interface IProps {
  hotList: IPlayList
  newList: IPlayList
  originalList: IPlayList
}

const RtopList = ({ hotList, newList, originalList }: IProps) => {
  return (
    <div>
      {/* 标题头部 */}
      <ThemeTitle title={'榜单'} moreLink={'/discover/toplist'} />
      {/* 榜单内容 */}
      <div className='list_wrapper'>
        <div className='blk'>
          <div className='top'>
            <div className='top_cover'>
              <img src={`${hotList.coverImgUrl}?param=100y100`} alt={hotList.name} />
              <Link to={`/discover/toplist?id=${hotList.id}`} />
            </div>
            <div className='top_title'>
              <Link to=''></Link>
              <div className='top_icon'>
                <Link to='' />
                <Link to='' />
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='content_item'>
              <span>1</span>
              <Link to=''></Link>
              <div className='opt'>
                <div className='play_song'></div>
                <div className='add_song'></div>
                <div className='mark_song'></div>
              </div>
            </div>
            <div className='more'></div>
          </div>
        </div>
        <div className='blk'>
          <div className='top'>
            <div className='top_cover'>
              <img src='' alt='' />
              <Link to=''></Link>
            </div>
            <div className='top_title'>
              <Link to=''></Link>
              <div className='top_icon'>
                <Link to='' />
                <Link to='' />
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='content_item'>
              <span>1</span>
              <Link to=''></Link>
              <div className='opt'>
                <div className='play_song'></div>
                <div className='add_song'></div>
                <div className='mark_song'></div>
              </div>
            </div>
            <div className='more'></div>
          </div>
        </div>
        <div className='blk'>
          <div className='top'>
            <div className='top_cover'>
              <img src='' alt='' />
              <Link to=''></Link>
            </div>
            <div className='top_title'>
              <Link to=''></Link>
              <div className='top_icon'>
                <Link to='' />
                <Link to='' />
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='content_item'>
              <span>1</span>
              <Link to=''></Link>
              <div className='opt'>
                <div className='play_song'></div>
                <div className='add_song'></div>
                <div className='mark_song'></div>
              </div>
            </div>
            <div className='more'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RtopList
