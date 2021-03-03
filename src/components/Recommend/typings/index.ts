export interface IBanner {
  targetId: number
  imageUrl: string
  typeTitle: string
  url: string | null
  encodeId: string
}

export interface IBannerResponse {
  banners: IBanner[]
}

export interface IState {
  banners: IBanner[]
}

export interface IAction {
  type: string
  payload: IBanner[] | IBanner | []
}

export enum ActionType {
  INIT_BANNER = 'init_banner',
}
