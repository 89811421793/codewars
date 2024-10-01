/* let enough = (cap, on, wait) => {
    let busCapacity = cap - on;         // the bus will hold this number
     if (busCapacity>=wait) return 0    // enough space for the passengers
    else return wait - busCapacity;     // number of people who can't go
   }
*/

let enough = (cap, on, wait) => {
    let busCapacity = cap - on;
    return Math.max(0, wait - busCapacity);
  };
