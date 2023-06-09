// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function (left, right, combinerFunction) {
  var counter,
    results = [];

  for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(left[counter], right[counter]));
  }

  return results;
};
