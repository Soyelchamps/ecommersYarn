import { Home } from './Pages/Home';
import { Navbar } from './Share/Navbar';
import { Producto } from './Pages/Producto';

import  {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
          <Navbar />
        <Routes>
            <Route path='/' element ={<Home/>} />
            <Route path='producto' element={<Producto/>} />
             <Route>
              <Route index element={<Home />} />
              <Route path=':productoId' element={<Producto />} />
             </Route>

        </Routes>
      </BrowserRouter>
      );
  }
export default App;
