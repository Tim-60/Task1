function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

console.log(manyChecks());

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

function manyChecksUsingSwitch() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  switch (true) {
    case (a==5): return ('a is less than or equal to 10 an example of a special case and a is less than or equal to 5 and a is odd');
    case (a<5 && (a%2 == 0)): return ('a is less than or equal to 10 and a is less than or equal to 5 and a is even');
    case (a<5 && (a%2 !== 0)): return ('a is less than or equal to 10 and a is less than or equal to 5 and a is odd');
    case (a>5 && a<=10 && (a%2 == 0)): return ('a is less than or equal to 10 and a is greater than 5 and a is even');
    case (a>5 && a<=10 && (a%2 !== 0)): return ('a is less than or equal to 10 and a is greater than 5 and a is odd');
    case (a==15): return ('a is bigger than 10 but a is not 15 and a is greater than 5 and a is odd');
    case (a>10 && (a%2 == 0)): return ('a is bigger than 10 and a is greater than 5 and a is even');
    case (a>10 && (a%2 !== 0)): return ('a is bigger than 10 and a is greater than 5 and a is odd');
  }
}
console.log(manyChecksUsingSwitch());

function manyChecksUsingIfElse() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
 
  if (a>5)
    {
      if (a>10)
      {
        if (a==15) return('a is bigger than 10 but a is not 15 and a is greater than 5 and a is odd');
          else if (a%2==0) return('a is bigger than 10 and a is greater than 5 and a is even');
              else return('a is bigger than 10 and a is greater than 5 and a is odd');
            }
    else if (a%2 == 0) return ('a is less than or equal to 10 and a is greater than 5 and a is even');
      else return ('a is less than or equal to 10 and a is greater than 5 and a is odd');
    }
  else if (a==5) return ('a is less than or equal to 10 an example of a special case and a is less than or equal to 5 and a is odd');
    else if (a%2==0) return ('a is less than or equal to 10 and a is less than or equal to 5 and a is even');
      else return ('a is less than or equal to 10 and a is less than or equal to 5 and a is odd');
}
console.log(manyChecksUsingIfElse());