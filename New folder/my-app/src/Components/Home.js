import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
 return (
   <div>
     <center>
      
      <h1>Well come to the online movie  tikets  booking website </h1></center>

     <Link to='Screen' id='view'>View all</Link>
     

     
     <div className='homepage'>

<a href="begil"> begil<img src={'begil.jpg'} alt='' width={200}></img></a>
<a href="bagubali"> bagubali<img src={'bagubali.png.webp'} alt='' width={200}></img></a>
<a href="suraraipotru">uraraipotru <img src={'suraraipotru.jpg'} alt='' width={170}></img></a>

</div>
<h4>
 <p id='homepara'>this is home page and you can see the some movies
 </p>
</h4>
        
   </div>
 )
}

export default Home;