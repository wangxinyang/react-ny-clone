import './songList.scss'
import { IRcommendList } from 'src/api/typings/recommend'
import Cover from 'src/components/Common/Cover/cover'

interface IProps {
  recommendList: IRcommendList[]
}

const SongList = ({ recommendList }: IProps) => {
  return (
    <div className='cover_wrapper'>
      {recommendList &&
        recommendList.slice(0, 8).map((item) => {
          return <Cover key={item.id} coverInfo={item} />
        })}
    </div>
  )
}

export default SongList
