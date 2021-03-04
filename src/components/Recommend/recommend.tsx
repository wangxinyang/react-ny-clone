import { FC, useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import http from 'src/api/http'
import { IRoute, NestedRoute } from 'src/router/route'
import SubNav from '../Common/SubNav/subNav'
import Banner from './Banner/banner'
import './recommend.scss'

interface IProps {
  routes: IRoute[]
}

const Recommend = ({ routes }: IProps) => {
  // useEffect(() => {
  //   http.post('/cellphone/existence/check', { phone: '18725767885' }).then((res) => {
  //     console.log(res)
  //   })
  // }, [])

  return (
    <div>
      {/* サブメニュー部分 */}
      <SubNav />
      {/* bannerの部分 */}
      <Banner />
      {/* コンテントの部分 */}

      <Switch>{routes && routes.map((route, i) => <NestedRoute key={i} {...route} />)}</Switch>
    </div>
  )
}

export default Recommend
