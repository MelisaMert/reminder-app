/** Dependencies */
import { BrowserRouter} from 'react-router-dom';
import RootRouter from './routes';

/** Components */
import Layout from './components/Layout/Layout'

/** Stylesheets */
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <RootRouter />
        </Layout>
      </BrowserRouter>
    </div >
  )
}

export default App
