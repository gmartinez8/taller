function squaredArray(arr) {
  arr = arr.reduce((accum, current) => {
    current = Math.abs(current);
    accum.push(current);

    return accum;
  }, []).sort();


  const result = arr.reduce((accum, current) => {
    const square = current**2;
    accum.push(square);

    return accum;
  }, []);

  return result;
}

module.exports = squaredArray;