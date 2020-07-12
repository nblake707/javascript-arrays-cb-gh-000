var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];


function addElementToBeginningOfArray (arr, el) {
  var arr2 = [el,...arr];
  return arr2;
}

// const addElementToBeginningOfArray = (arr, el) => {
//   const arr2 = [el,...arr];
//   return arr2;
//
// }
//
// const destructivelyRemoveElementFromBeginningOfArray = (arr, el) => {
//   arr.unshift(el);
//   return arr;
// }
//
// const addElementToEndOfArray = (arr, el) => {
//   const arr2 = [...arr, el];
//   return arr2;
// }
//
// const destructivelyAddElementToEndOfArray = (arr, el) => {
//    arr.push(el);
//    return arr;
// }
//
// const accessElementInArray = (arr, index) => {
//   return arr[index];
// }
//
//
// const destructivelyRemoveElementFromBeginningOfArray = (arr, x) => {
//      arr.unshift(x);
//      return arr;
// }
//
// const removeElementFromBeginningOfArray = (arr) => {
//   return arr.slice(1);
// }
//
// const destructivelyRemoveElementFromEndOfArray = (arr) => {
//   return arr.pop();
// }
//
// const removeElementFromEndOfArray = (arr) => {
//   const arr2 = arr.slice(0,arr.length -1);
//   return arr2;
// }
