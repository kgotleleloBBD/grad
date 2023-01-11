function collatz(n,steps) {

  steps = steps+ 1;

  try {

    if (n%2 === 0) {
      n = n/2;
    }else {
      n = 3*n + 1
    }
    
    console.log(n);
  
    if (n === 1) {
  
      console.log('it ends with one');
      console.log(`steps: ${steps}`);
      return;
    }
    return collatz(n,steps);
  }
  catch(err) {
    console.log(`it ends with: ${n}`);
    console.log(`steps: ${steps}`);
    return;
  }
}

collatz(27,0);