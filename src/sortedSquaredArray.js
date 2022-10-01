function squaredArray(arr) {
  let result = arr.reduce((accum, current) => {
    const square = current**2;
    accum.push(square);

    return accum;
  }, []).sort((a,b) => a - b);

  return result;
}

module.exports = squaredArray;
