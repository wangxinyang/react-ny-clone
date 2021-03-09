export interface IType {
  id: number
  name: string
}

export interface IRcommendList {
  id: number
  name: string
  copywriter: string
  picUrl: string
  playCount: number | string
  trackCount: number
  trackNumberUpdateTime: number
}

export interface IArtist {
  id: number
  name: string
  musicSize: number
  picId: number
  picUrl: string
  trans: string
  transname?: string
}

export interface IAlbum {
  id: number
  name: string
  picUrl: string
  company: string
  artist: IArtist
  artists: IArtist[]
}

export interface ISubscriber {
  avatarImgId: number
  avatarUrl: string
  backgroundImgId: number
  backgroundUrl: string
  birthday: number
  city: number
  province: number
  defaultAvatar: boolean
  description: string
  djStatus: number
  followed: boolean
  gender: number
  nickname: string
  signature: string
  userId: number
  userType: number
  vipType: number
}

export interface ISong {
  id: number
  name: string
  picUrl: string
}

export interface ITrack {
  al: ISong
  ar: IArtist[] | IArtist
  mark: number
  name: string
  publishTime: number
}

export interface IPlayList {
  id: number
  name: string
  playCount: number
  shareCount: number
  subscribedCount: number
  subscribed: boolean
  subscribers: ISubscriber[]
  description: string
  trackCount: number
  commentCount: number
  createTime: number
  tracks: ITrack[]
  updateTime: number
  userId: number
  status: number
  coverImgUrl: string
}
