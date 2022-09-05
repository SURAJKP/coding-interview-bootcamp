const arr = new Array(1000000).fill("Hello");

findHello = (arr) => {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Hello") {
      console.log("Found Hello");
      break; // more efficient code
    }
  }
  let t1 = performance.now();
  console.log('findHello call took' + (t1 - t2) + 'millisecondes');
}

findHello(arr); // Linear Time O(n)