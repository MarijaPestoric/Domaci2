
// Challenge 1
function addTwo(num) {
	return num+2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word+'s';
}

// uncomment these to check your work
//console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let newArr = [];
	for(let i=0; i<array.length; i++){
   newArr.push(callback(array[i]))
  }
  return newArr
}

//console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for(let i=0; i<array.length; i++){
    callback(array[i])
  }
}

// see for yourself if your forEach works!



// Challenge 5
function mapWith(array, callback) {
  let newArr = [];
 	array.forEach(el=>{
    newArr.push(callback(el));
  });
  return newArr;
  
}
//console.log(mapWith([1, 2, 3], addTwo));


// Challenge 6
function reduce(array, callback, initialValue) {
	var result = initialValue;
  array.forEach(el=> {
    result = callback(result, el);
  });
  
  return result;
}
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0));   //-> 8

// Challenge 7
function intersection(arrays) {
	var arrays = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

  if (arrays.length <= 1) return [];

  return reduce(arrays.slice(1, arrays.length), function(arr1, arr2) {
    var result = [];

    for (var i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) >= 0) {
        result.push(arr2[i]);
      }
    }
    
    return result;
  }, arrays[0]);
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
function union(arrays) {
var arrays = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];
  
  return reduce(arrays.slice(1, arrays.length), function(arr1, arr2) {
    var result = arr1.slice();
    
    for (var i = 0; i < arr2.length; i++) {
      if (result.indexOf(arr2[i]) === -1) {
        result.push(arr2[i]);
      }
    }
    
    return result;
  }, arrays[0]);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
 const matchObj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      matchObj[array1[i]] = array2[i];
    }
  }
  return matchObj;
}

//console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
 const multiMapObj = {};
  for (let i = 0; i < arrVals.length; i++) {
    multiMapObj[arrVals[i]] = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      multiMapObj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));      
    }
  }
  return multiMapObj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
 const newObj = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      newObj[key] = callback(key);
    }
  }
  return newObj;
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

