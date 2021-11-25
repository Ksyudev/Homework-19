function BMI()
{   let height =+heightInput.value;
    if (height>3) 
    {height=height/100;} 
    console.log(height);
    let mass = +massInput.value;
    console.log(mass);
    let index = mass/(height**2)
    index = Math.floor(index*100)/100;
    resultPlace.innerHTML = index;
    console.log(index);
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
if (height==0 || mass==0)
    {resultPlace.innerHTML = '';
    diagnosisPlace.innerHTML = 'Введите ваш рост и вес';} 
}