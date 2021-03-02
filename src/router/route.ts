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

export interface ISubNavs {
  id: number
  path: string
  name: string
  isSelected?: boolean
}

const menus = [
  {
    id: 1,
    path: '/',
    name: '发现音乐',
  },
  {
    id: 2,
    path: '/my',
    name: '我的音乐',
  },
  {
    id: 3,
    path: '/friend',
    name: '朋友',
  },
  {
    id: 4,
    path: '/',
    name: '商城',
  },
  {
    id: 5,
    path: '/',
    name: '音乐人',
  },
  {
    id: 6,
    path: '/download',
    name: '下载客户端',
  },
]

const subNavs = [
  {
    id: 1,
    path: '/discover',
    name: '推荐',
    isSelected: true,
  },
  {
    id: 2,
    path: '/discover/toplist',
    name: '排行榜',
  },
  {
    id: 3,
    path: '/discover/playlist',
    name: '歌单',
  },
  {
    id: 4,
    path: '/discover/djradio',
    name: '主播电台',
  },
  {
    id: 5,
    path: '/discover/artist',
    name: '歌手',
  },
  {
    id: 6,
    path: '/discover/album',
    name: '新碟上架',
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
    path: '/discover',
    name: '推荐',
    component: Recommend,
    routes: [
      {
        path: '/discover/toplist',
        name: '排行榜',
        component: TopList,
      },
      {
        path: '/discover/playlist',
        name: '歌单',
        component: Playlist,
      },
      {
        path: '/discover/djradio',
        name: '主播电台',
        component: Djradio,
      },
      {
        path: '/discover/artist',
        name: '歌手',
        component: Artist,
      },
      {
        path: '/discover/album',
        name: '新碟上架',
        component: Album,
      },
    ],
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

export { menus, subNavs, NestedRoute }
