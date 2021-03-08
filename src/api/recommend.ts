import http from './http'
import { IRcommendList, IType } from './typings/recommend'

type GetHotPlayListFn = () => Promise<IType[]>
type GetRecommendListFn = () => Promise<IRcommendList[]>

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

export default { getHotPlayList, getRecommendList }
