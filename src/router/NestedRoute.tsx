import { Route } from 'react-router-dom'
import { IRoute } from './route'

/*
 * @Author: tosei
 * @Date: 2021-02-27 15:08:36
 * @LastEditors: tosei
 * @LastEditTime: 2021-02-28 00:36:22
 * @Description: 路由嵌套的组件
 */
const NestedRoute = (route: IRoute) => {
  return <Route path={route.path} exact={route.exact} render={() => <route.component routes={route.routes} />} />
}

export default NestedRoute
