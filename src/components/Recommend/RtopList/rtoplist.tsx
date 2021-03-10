import './rtoplist.scss'
import ThemeTitle from 'src/components/Common/ThemeTitle/themeTitle'
import { IPlayList } from 'src/api/typings/recommend'
import Rank from './Rank/rank'
import { AsyncState } from 'src/hooks/useAsyncFn'
import Loading from 'src/components/Common/Loading/loading'

interface IProps {
  hotList: AsyncState<IPlayList>
  newList: AsyncState<IPlayList>
  originalList: AsyncState<IPlayList>
}

const RtopList = ({ hotList, newList, originalList }: IProps) => {
  return (
    <div>
      {/* 标题头部 */}
      <ThemeTitle title={'榜单'} moreLink={'/discover/toplist'} />
      {/* 榜单内容 */}
      <div className='list_wrapper'>
        {/* 飙升榜 */}
        <Rank rankInfo={hotList} />
        {/* 新歌榜 */}
        <Rank rankInfo={newList} />
        {/* 原创榜 */}
        <Rank rankInfo={originalList} />
      </div>
    </div>
  )
}

export default RtopList
