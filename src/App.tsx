import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import routes, { IRoute, NestedRoute } from 'src/router/route'
import Footer from './components/Common/Footer/footer'
import Header from './components/Common/Header/header'
import NoMatch from './components/NoMatch/noMatch'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          {routes.map((route: IRoute, i) => (
            <NestedRoute key={i} {...route} />
          ))}
          <Route component={NoMatch} />
          <Redirect from='/' to='/recommend' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
