// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var body = document.body
  var results = [];

  function recursion(node) {

    if (node.classList.contains(className)) {
      results.push(node)
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        recursion(node.children[i])
      }
    }
    }

  recursion(body);


  return results
};

// getElementsByClassNameSpec.js:22 HTMLCollection(2) [body.targetClassName, div.targetClassName]
// document.body.classList
// DOMTokenList ["targetClassName", value: "targetClassName"]0: "targetClassName"length: 1value: "targetClassName"__proto__: DOMTokenList
// document.body.classList[0]
// "targetClassName"
// document.body.classList.contains(targetClassName);
// VM7818:1 Uncaught ReferenceError: targetClassName is not defined
//     at <anonymous>:1:34
// (anonymous) @ VM7818:1
// document.body.classList.contains('targetClassName');
// true
// document.body.children
// HTMLCollection(2) [div#mocha, div.targetClassName, mocha: div#mocha]