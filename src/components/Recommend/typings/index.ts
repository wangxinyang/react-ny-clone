export interface IBannerResponse {
  banners: IBanner[]
}

export interface IBanner {
  targetId: number
  imageUrl: string
  typeTitle: string
}

export interface IState {
  banners: IBanner[]
}

export interface IAction {
  type: string
  payload: string | ''
}

export enum ActionType {
  INIT_BANNER = 'init_banner',
}
