import { Carousel } from 'antd'
import { useEffect, useReducer } from 'react'
import { IBanner, IBannerResponse, IState } from './typings'
import http from 'src/api/http'
import recommendReducer from 'src/reducer/recommendReducer'
import './banner.scss'
import { AxiosResponse } from 'axios'

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
      console.log(res.data.banners)
    })
  }, [])

  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 className='contentStyle'>1</h3>
        </div>
        <div>
          <h3 className='contentStyle'>2</h3>
        </div>
        <div>
          <h3 className='contentStyle'>3</h3>
        </div>
        <div>
          <h3 className='contentStyle'>4</h3>
        </div>
      </Carousel>
    </>
  )
}
export default Banner
