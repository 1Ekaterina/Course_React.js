import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom';


function Home() {
    
  return (
     <header>
          <h1>Home</h1>
       <ul>
         <li>
           <Link to="/profile">Profile</Link>
         </li>

         <li>
           <Link to="/chat">Chats</Link>
         </li>

         {/* <li>
           <Link to="/">Home</Link>
         </li> */}
       </ul>
     </header>
     
  );
}
export default Home;