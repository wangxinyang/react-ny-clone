import http from './http'
import { IAlbum, IRcommendList, IType } from './typings/recommend'

type GetHotPlayListFn = () => Promise<IType[]>
type GetRecommendListFn = () => Promise<IRcommendList[]>
type GetTopAlbumListFn = () => Promise<IAlbum[]>

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

export default { getHotPlayList, getRecommendList, getTopAlbumList }
