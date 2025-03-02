let a = Math.floor(Math.random() * 100);
console.log("Начальное значение", a);
console.log((a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7));
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

// Выполнение через if...else
if (a > 10) 
  console.log(2 * a + 1);
else if ((a>5) || (2*a>5))
   console.log(2 * a + 1);
else
{
   if (2*(a-2)<4)
 {
       if (a%2 == 0) 
           console.log(6);
       else console.log(7);
 }
}

// Альтернативное выполнение через if...else
let A, B, C;

if (a > 10) 
  A = a;
else A = a * 2;

if (a < 3) 
  B = 1;
else B = 2 * (a - 2);

if (B > 4) 
  C = 5;
else {
  if (a % 2 == 0) 
    C = 6;
  else C = 7;
}

if (A > 5) 
  console.log(2 * a + 1);
else console.log(C);

// Выполнение через switch()
switch (true) {
  case (a>=10): console.log(2*a+1); break;
  case (a<10 && 2*a>5): console.log(2*a+1); break;
  case (a<10 && 2*a<5 && a<3 && (a%2 == 0)): console.log(6); break;
  case (a<10 && 2*a<5 && a<3 && (a%2 !== 0)): console.log(7); break;
}