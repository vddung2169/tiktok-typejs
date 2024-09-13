import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import { publicRoutes } from './routes'
import { DefaultLayout } from './Components/Layout/DefaultLayout'


function App() {

  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Component = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout><Component /></Layout>}
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
