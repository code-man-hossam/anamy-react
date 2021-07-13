import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './pages/about'
import ServicesPage from './pages/ServicesPage'
import Social from './components/Social'

function App() {
  return (
    <Router>
      <Nav />
      <Social />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/services'>
          <ServicesPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
