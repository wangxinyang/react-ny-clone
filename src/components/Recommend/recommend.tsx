import { FC, useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import http from 'src/api/http'
import { IRoute, NestedRoute } from 'src/router/route'
import SubNav from '../Common/SubNav/subNav'
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
      <SubNav />
      <Switch>{routes && routes.map((route, i) => <NestedRoute key={i} {...route} />)}</Switch>
    </div>
  )
}

export default Recommend
