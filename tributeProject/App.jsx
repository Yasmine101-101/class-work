//holds all components together
import Header from './Header/Header.jsx';
import Mainsection from './mainsection/Mainsection.jsx';
function App() {
   return (
     <div className=" p-4 max-w-4xl mx-auto bg-white shadow-lg">
         <Header />
         <Mainsection />
     </div>
   ); 
}
export default App;