import './recommend.scss'
import { useEffect } from 'react'
import { Switch } from 'react-router-dom'
import useAsyncFn from 'src/hooks/useAsyncFn'
import { IRoute, NestedRoute } from 'src/router/route'
import SubNav from '../Common/SubNav/subNav'
import Banner from './Banner/banner'
import Ralbum from './Ralbum/ralbum'
import RplayList from './RplayList/rplaylisty'
import RtopList from './RtopList/rtoplist'
import recommendApis from 'src/api/recommend'
import { IRcommendList, IType } from 'src/api/typings/recommend'

interface IProps {
  routes: IRoute[]
}

const Recommend = ({ routes }: IProps) => {
  // useEffect(() => {
  //   http.post('/personalized').then((res) => {
  //     console.log(res)
  //   })
  // }, [])
  // 获取歌单分类
  const [playList, getPlayListFn] = useAsyncFn(recommendApis.getHotPlayList)
  // 获取热门推荐歌单
  const [recommendList, getRecommendListFn] = useAsyncFn(recommendApis.getRecommendList)

  useEffect(() => {
    console.log(recommendList)
  }, [recommendList])

  useEffect(() => {
    getPlayListFn()
    getRecommendListFn()
  }, [])

  return (
    <div>
      {/* サブメニュー部分 */}
      <SubNav />
      {/* bannerの部分 */}
      <Banner />
      {/* コンテントの部分 */}
      <div className='content_wrapper'>
        <div className='content_left'>
          {/* 热门推荐 */}
          <RplayList playList={playList.value as IType[]} recommendList={recommendList.value as IRcommendList[]} />
          {/* 新碟上架 */}
          <Ralbum />
          {/* 榜单 */}
          <RtopList />
        </div>
        <div className='content_right'>
          <div className='user_profile'></div>
          <div className='singer'></div>
          <div className='hot_dj'></div>
        </div>
      </div>
      <Switch>{routes && routes.map((route, i) => <NestedRoute key={i} {...route} />)}</Switch>
    </div>
  )
}

export default Recommend
