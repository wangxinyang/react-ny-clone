import './recommend.scss'
import { useEffect } from 'react'
import { Link, Switch } from 'react-router-dom'
import useAsyncFn from 'src/hooks/useAsyncFn'
import { IRoute, NestedRoute } from 'src/router/route'
import SubNav from '../Common/SubNav/subNav'
import Banner from './Banner/banner'
import Ralbum from './Ralbum/ralbum'
import RplayList from './RplayList/rplaylisty'
import RtopList from './RtopList/rtoplist'
import recommendApis from 'src/api/recommend'
import { IAlbum, IPlayList, IRcommendList, IType } from 'src/api/typings/recommend'
import http from 'src/api/http'
import qs from 'qs'
import { PLAY_LIST_HOT_ID, PLAY_LIST_NEW_ID, PLAY_LIST_ORIGINAL_ID } from 'src/constants/constants'
import RightSideBar from './RightSideBar/rightSideBar'

interface IProps {
  routes: IRoute[]
}

const Recommend = ({ routes }: IProps) => {
  // useEffect(() => {
  //   http.post('/playlist/detail', { params: { id: 3779629 } }).then((res) => {
  //     console.log(res)
  //   })
  // }, [])
  // 获取歌单分类
  const [playList, getPlayListFn] = useAsyncFn(recommendApis.getHotPlayList)
  // 获取热门推荐歌单
  const [recommendList, getRecommendListFn] = useAsyncFn(recommendApis.getRecommendList)
  // 获取新碟上架数据
  const [topAlbumList, getTopAlbumListFn] = useAsyncFn(recommendApis.getTopAlbumList)
  // 获取飙升榜数据
  const [hotList, getHotListFn] = useAsyncFn(recommendApis.getRankList)
  // 获取新歌榜数据
  const [newList, getNewListFn] = useAsyncFn(recommendApis.getRankList)
  // 获取原创榜数据
  const [originalList, getOriginalListFn] = useAsyncFn(recommendApis.getRankList)

  useEffect(() => {
    console.log(hotList.loading)
  }, [hotList])

  useEffect(() => {
    getPlayListFn()
    getRecommendListFn()
    getTopAlbumListFn()
    getHotListFn(PLAY_LIST_HOT_ID)
    getNewListFn(PLAY_LIST_NEW_ID)
    getOriginalListFn(PLAY_LIST_ORIGINAL_ID)
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
          <Ralbum topAlbumList={topAlbumList.value as IAlbum[]} />
          {/* 榜单 */}
          <RtopList hotList={hotList} newList={newList} originalList={originalList} />
        </div>
        <div className='content_right'>
          <div className='profile_bg user_profile'>
            <p className='note'>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <Link to='/' className='profile_bg login-btn'>
              用户登录
            </Link>
          </div>
          <RightSideBar isSinger={true} title={'入驻歌手'} />
          <RightSideBar isSinger={false} title={'热门主播'} />
        </div>
      </div>
      <Switch>{routes && routes.map((route, i) => <NestedRoute key={i} {...route} />)}</Switch>
    </div>
  )
}

export default Recommend
