import { ActionType, IAction, IBanner, IState } from 'src/components/Recommend/typings'

function recommendReducer(state: IState, action: IAction): IState {
  const { type, payload } = action
  switch (type) {
    case ActionType.INIT_BANNER:
      return { ...state, banners: payload as IBanner[] }
    default:
      return state
  }
  return state
}

export default recommendReducer
