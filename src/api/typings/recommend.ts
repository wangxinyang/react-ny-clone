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
