import './banner.scss'
import http from 'src/api/http'
import recommendReducer from 'src/reducer/recommendReducer'
import { Carousel } from 'antd'
import { useEffect, useReducer, useRef } from 'react'
import { ActionType, IBanner, IBannerResponse, IState } from '../typings'
import { AxiosResponse } from 'axios'
import { Link } from 'react-router-dom'
import { CarouselRef } from 'antd/lib/carousel'

function init(initBanners: IBanner[]): IState {
  return {
    banners: initBanners,
  }
}

const Banner = () => {
  const [state, dispatch] = useReducer(recommendReducer, [], init)

  // 获取banner数据
  useEffect(() => {
    http.post('/banner', { type: 0 }).then((res: AxiosResponse<IBannerResponse>) => {
      const banners = res.data.banners
      console.log(banners)

      if (banners) {
        dispatch({
          type: ActionType.INIT_BANNER,
          payload: banners,
        })
      }
    })
  }, [])

  const bannerRef = useRef<CarouselRef>(null)

  const handlePrev = () => {
    if (bannerRef.current != null) {
      bannerRef.current.prev()
    }
  }
  const handleNext = () => {
    if (bannerRef.current != null) {
      bannerRef.current.next()
    }
  }

  return (
    <div className='banner_wrapper'>
      <div className='arrow arrow_left' onClick={handlePrev}></div>
      <Carousel autoplay ref={bannerRef}>
        {state.banners.map((banner) => {
          return (
            <div key={banner.targetId}>
              <div
                style={{
                  backgroundImage: `url(${banner.imageUrl}?imageView&blur=40x20)`,
                  backgroundPosition: 'center center',
                  backgroundSize: '6000px',
                }}
              >
                <div className='img_wrapper'>
                  <div className='banner_comp'>
                    <Link to={banner.url ? banner.url : `/song/${banner.targetId}`}>
                      <img
                        className='banner_image'
                        src={`${banner.imageUrl}?imageView&quality=89`}
                        alt={banner.typeTitle}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
      <div className='arrow arrow_right' onClick={handleNext}></div>
      <div className='d_bg download_pr'>
        <Link className='d_bg download_btn' to='/download'>
          下载客户端
        </Link>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <span className='shadow shadow_left'></span>
        <span className='shadow shadow_right'></span>
      </div>
    </div>
  )
}
export default Banner
