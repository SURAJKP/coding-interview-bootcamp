const arr =new Array(1000000).fill("Hello");

findHello = (arr) => {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === "Hello") {
      console.log("Found Hello");
      break; // more efficient code
    }
  }
}

findHello(arr); // Linear Time O(n)