import ApplyLeave from './ApplyLeave';
import LayOut from './LayOut';
import Notification from './Notification';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import WebSocketComponent from './WebSocketComponent';
import ChartComponent from './ChartComponent';
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LayOut/>}>
    <Route index element={<Notification/>}/>
    <Route path='Notification' element={<Notification/>}/>
    <Route path='ApplyLeave' element={<ApplyLeave/>}/>
    <Route path='WebSocketComponent' element={<WebSocketComponent/>}/>
    <Route path='ChartComponent'  element={<ChartComponent/>}/>
    </Route>
   </Routes>
   </BrowserRouter>

   </>
  );
};

export default App;
