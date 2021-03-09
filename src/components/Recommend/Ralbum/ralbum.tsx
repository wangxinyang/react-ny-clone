import './ralbum.scss'
import ThemeTitle from 'src/components/Common/ThemeTitle/themeTitle'
import { Carousel } from 'antd'
import { useRef } from 'react'
import { CarouselRef } from 'antd/lib/carousel'
import { IAlbum } from 'src/api/typings/recommend'
import AlbumCover from 'src/components/Common/AlbumCover/albumCover'

interface IProps {
  topAlbumList: IAlbum[]
}

const Ralbum = ({ topAlbumList }: IProps) => {
  const diskRef = useRef<CarouselRef>(null)

  const handlePrev = () => {
    if (diskRef.current != null) {
      diskRef.current.prev()
    }
  }

  const handleNext = () => {
    if (diskRef.current != null) {
      diskRef.current.next()
    }
  }

  return (
    <div>
      {/* 标题头部 */}
      <ThemeTitle title={'新碟上架'} moreLink={'/discover/album'} />
      {/* album的swiper */}
      <div className='disk'>
        <div className='disk_inner'>
          <div className='arrow arrow_left' onClick={handlePrev}></div>
          <div className='swiper_item'>
            <Carousel ref={diskRef} dots={false}>
              {[0, 1].map((index) => {
                return (
                  <div key={index}>
                    <div className='album-items'>
                      {topAlbumList &&
                        topAlbumList.slice(index * 5, (index + 1) * 5).map((album) => {
                          return <AlbumCover key={album.id} album={album} />
                        })}
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
          <div className='arrow arrow_right' onClick={handleNext}></div>
        </div>
      </div>
    </div>
  )
}

export default Ralbum
