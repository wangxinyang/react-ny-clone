import { IRcommendList, IType } from 'src/api/typings/recommend'
import SongList from 'src/components/Recommend/SongList/songList'
import ThemeTitle from 'src/components/Common/ThemeTitle/themeTitle'

interface IProps {
  playList: IType[]
  recommendList: IRcommendList[]
}

const RplayList = ({ playList, recommendList }: IProps) => {
  return (
    <div>
      {/* 标题头部 */}
      <ThemeTitle title={'热门推荐'} playList={playList} moreLink={'/discover/playlist'} />
      {/* 歌单内容 */}
      <SongList recommendList={recommendList} />
    </div>
  )
}

export default RplayList
