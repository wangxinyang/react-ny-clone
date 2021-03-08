import './cover.scss'
import { IRcommendList } from 'src/api/typings/recommend'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import addChineseUnit from 'src/utils/addChineseUnit'

interface IProps {
  coverInfo: IRcommendList
}

const Cover = ({ coverInfo }: IProps) => {
  const [playCount, setPlayCount] = useState(coverInfo.playCount)

  useEffect(() => {
    setPlayCount(addChineseUnit(playCount as number, 0))
  }, [])

  return (
    <div className='cover_item'>
      <img src={`${coverInfo.picUrl}?param=140y140`} alt={coverInfo.name} />
      <Link className='cover_all mask' to={`/playlist?id=${coverInfo.id}`} title={coverInfo.name}></Link>
      <div className='desp'>
        <Link className='desp_link' to={`/playlist?id=${coverInfo.id}`} title={coverInfo.name}>
          {coverInfo.name}
        </Link>
      </div>
      <div className='cover_all bottom_info' style={{ display: 'flex' }}>
        <div className='icon_all icon_headset'></div>
        <div className='play_count'>{playCount}</div>
        <div className='icon_all icon_play'></div>
      </div>
    </div>
  )
}

export default Cover
