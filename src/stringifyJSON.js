// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var strArr = '[';
  var newArr = [];
  if (typeof obj === 'number') {
    return '' + obj;;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return "" + null;
  } else if (typeof obj === 'boolean') {
    return "" + obj
  } if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      newArr.push(stringifyJSON(obj[i]));
    }
    return '[' + `${newArr}` + ']'
  } else if (typeof obj === 'object') {
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}'
      }
      newArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + `${newArr}` + '}'
  }
};
