
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
 if ( index <=18.5 )
    {diagnosisPlace.innerHTML = 'Ваша масса тела недостаточная';}
else if ((index>=18.5) && (index<25))
    {diagnosisPlace.innerHTML = 'Ваша масса тела нормальная';}
else if ((index>=25) && (index<30))
    {diagnosisPlace.innerHTML = 'Ваша масса тела избыточная';}
else if ((index>=30) && (index<35))
    {diagnosisPlace.innerHTML = 'У Вас ожирение 1 степени';}
else if ((index>=35) && (index<40))
    {diagnosisPlace.innerHTML = 'У Вас ожирение 2 степени';}
else if (index>=40)
    {diagnosisPlace.innerHTML = 'У Вас ожирение 3 степени';}
}