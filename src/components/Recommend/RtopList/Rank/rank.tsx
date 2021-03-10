import './rank.scss'
import { Link } from 'react-router-dom'
import { IPlayList } from 'src/api/typings/recommend'
import { AsyncState } from 'src/hooks/useAsyncFn'
import Loading from 'src/components/Common/Loading/loading'

interface IProps {
  rankInfo: AsyncState<IPlayList>
}

const Rank = ({ rankInfo }: IProps) => {
  const rank = rankInfo.value as IPlayList
  return (
    <>
      {rankInfo.loading ? (
        <div className='blk'>
          <Loading />
        </div>
      ) : (
        <div className='blk'>
          <div className='top'>
            <div className='top_cover'>
              <img src={`${rank.coverImgUrl}?param=100y100`} alt={rank.name} />
              <Link to={`/discover/toplist?id=${rank.id}`} />
            </div>
            <div className='top_title'>
              <Link to={`/discover/toplist?id=${rank.id}`}>
                <h3>{rank.name}</h3>
              </Link>
              <div className='top_icon'>
                <Link to='/' className='btn play_btn' title='播放'>
                  播放
                </Link>
                <Link to='/' className='btn mark_btn' title='收藏'>
                  收藏
                </Link>
              </div>
            </div>
          </div>
          <div className='content'>
            <ol className='content_item'>
              {rank.tracks &&
                rank.tracks.slice(0, 10).map((track, index) => {
                  return (
                    <li key={index} className='rank_list'>
                      <span className='no-top' style={{ color: index <= 2 ? '#c10d0c' : '#666' }}>
                        {index + 1}
                      </span>
                      <Link to={`/song?id=${track.al.id}`} title={track.name} className='song_info'>
                        {track.name}
                      </Link>
                      <div className='opt'>
                        <div className='song play_song'></div>
                        <div className='add_song'></div>
                        <div className='song mark_song'></div>
                      </div>
                    </li>
                  )
                })}
            </ol>
            <div className='more'>
              <Link to={`/discover/toplist?id=${rank.id}`}>查看全部</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Rank
