import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import routes, { IRoute, NestedRoute } from 'src/router/route'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route: IRoute, i) => (
            <NestedRoute key={i} {...route} />
          ))}
          <Redirect from='/' to='/recommend' />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
