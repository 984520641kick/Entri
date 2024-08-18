import React from 'react'
import {Link}from 'react-router-dom'

  function Screen (){
  return (
    <div> 
          
<center>
  <h1>

<p>this is screen pages </p>

</h1>
<p>choose your movies 

</p>
</center>

<input id='screeninput' type='search' placeholder='search your location'>
</input>

<div className='photo'>
  <div id='image'>
    
<a href="beast">beast <img src={'beast.jpg'} alt='' width={200}></img></a> 
<a href='emaikanodigal'>emaikanodigal <img src={'emaikanodi.jpg.jpg'} alt='' width={200}></img></a>
<a href='love today'>love today <img src={'love today.webp'} alt='' width={200}></img></a>

<div id='beast'>

<a href="beast">beast <img id='best' src={'beast.jpg'} alt='' width={200}></img></a>
<a href="ponniyin-selven-2">ponniyinselvan<img id='ponnyin-selven-2' src={'ponniyin-selvan-2.jpg'} alt='' width={200}></img></a>
<a href="jailar"> jailar<img src={'jailar.jpg'} alt='' width={200}></img></a>
</div>

<a href="begil"> begil<img src={'begil.jpg'} alt='' width={200}></img></a>
<a href="bagubali"> bagubali<img src={'bagubali.png.webp'} alt='' width={200}></img></a>
<a href="suraraipotru">uraraipotru <img src={'suraraipotru.jpg'} alt='' width={200}></img></a>

<div id='ohgod'>
<a href="vikaran">vikaran<img src={'vikaran.png.jpg'} alt='' width={200}></img></a>
<a href="kannum  kannum koliyadithal">kannum <img src={'kannum kannum koliyadithal.jpg'} alt='' width={200}></img></a>
<a href="tharalabrabu">tharalabrabu<img src={'tharalabrabu.jpg'} alt='' width={200}></img></a>


<div id='vikaram'>
  
 

<a href="enthiran">vikaran<img src={'enthiran.png'} alt='' width={200}></img></a>
<a href="vikaran">aranmanai<img src={'aranmanai.jpg'} alt='' width={200}></img></a>
<a href="Payment"> oh my god<img src={'oh my god.jpg'} alt='' width={200}></img></a>
</div>
  
<Link to="/Seat">Seat Booking  / </Link>
 
<Link to="/Payment">Payment / </Link>

<Link to="/Tickets">Tickets / </Link>

<Link to="/Rating">Rating / </Link>


</div>
</div>
</div>
<center>
<h3 id='screendatail'>some details</h3>
<p id='movitickettpage'>
this is one of the movie ticket booking websites
you can book your tickets easyly

</p>
</center>
    </div>
  )
}

export default Screen;