
function index()
{   let height =+heightInput.value;
    console.log(height);
    let mass = +massInput.value;
    console.log(mass);
   /* if (height>3) 
    {let index = mass/((height/100)**2);}
    else */let index = mass/(height**2);
 index = Math.floor(index*100)/100;
 resultPlace.innerHTML = index;
}