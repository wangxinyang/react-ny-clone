import Recommend from 'components/Recommend/recommend'
import TopList from 'components/TopList/topList'
import Album from 'components/Album/album'
import Playlist from 'components/Playlist/playlist'
import Djradio from 'components/Djradio/djradio'
import Artist from 'components/Artist/artist'
import MyMusic from 'src/components/MyMusic/myMusic'
import Friend from 'src/components/Friend/friend'
import Download from 'src/components/Download/download'
import NestedRoute from './NestedRoute'

export interface IRoute {
  path: string
  name?: string
  component: any
  exact?: boolean
  routes?: IRoute[]
}

const menus = [
  {
    path: '/',
    name: '发现音乐',
  },
  {
    path: '/my',
    name: '我的音乐',
  },
  {
    path: '/friend',
    name: '朋友',
  },
  {
    path: '/friend',
    name: '商城',
  },
  {
    path: '/friend',
    name: '音乐人',
  },
  {
    path: '/download',
    name: '下载客户端',
  },
]

const routes = [
  {
    path: '/',
    name: '发现音乐',
    component: Recommend,
    exact: true,
  },
  {
    path: '/recommend',
    name: '推荐',
    component: Recommend,
  },
  {
    path: '/toplist',
    name: '排行榜',
    component: TopList,
  },
  {
    path: '/playlist',
    name: '歌单',
    component: Playlist,
  },
  {
    path: '/djradio',
    name: '主播电台',
    component: Djradio,
  },
  {
    path: '/artist',
    name: '歌手',
    component: Artist,
  },
  {
    path: '/album',
    name: '新碟上架',
    component: Album,
  },
  {
    path: '/my',
    name: '我的音乐',
    component: MyMusic,
  },
  {
    path: '/friend',
    name: '朋友',
    component: Friend,
  },
  {
    path: '/download',
    name: '下载客户端',
    component: Download,
  },
]

export default routes

export { menus, NestedRoute }
