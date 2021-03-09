import http from './http'
import { IAlbum, IPlayList, IRcommendList, IType } from './typings/recommend'

type GetHotPlayListFn = () => Promise<IType[]>
type GetRecommendListFn = () => Promise<IRcommendList[]>
type GetTopAlbumListFn = () => Promise<IAlbum[]>
type GetRankListFn = (id: number) => Promise<IPlayList>

// 获取热门歌单分类
const getHotPlayList: GetHotPlayListFn = () => {
  return new Promise((resolve) => {
    http.post<{ tags: IType[] }>('/playlist/hot').then((res) => {
      resolve(res.data.tags)
    })
  })
}

// 获取热门推荐
const getRecommendList: GetRecommendListFn = () => {
  return new Promise((resolve) => {
    http.post<{ result: IRcommendList[] }>('/personalized').then((res) => {
      resolve(res.data.result)
    })
  })
}

// 获取新碟上架数据
const getTopAlbumList: GetTopAlbumListFn = () => {
  return new Promise((resolve) => {
    http.post<{ albums: IAlbum[] }>('/album/newest').then((res) => {
      resolve(res.data.albums)
    })
  })
}

// 获取榜单数据
const getRankList: GetRankListFn = (playId: number) => {
  return new Promise((resolve) => {
    http
      .post<{ playlist: IPlayList }>('/playlist/detail', { id: playId })
      .then((res) => {
        resolve(res.data.playlist)
      })
  })
}

export default { getHotPlayList, getRecommendList, getTopAlbumList, getRankList }
