const _ = require("lodash");
const saveData = _.debounce((v) => console.log("Data saved!", v), 2000);

saveData("a");
saveData("b");
saveData("c");
saveData("d");
saveData("e");

// const logMessage = _.throttle(() => console.log("Throttled!"), 1000);

// setInterval(logMessage, 200);

// deep cloning
const obj = { a: 1, b: { c: 2 } };
const clonedObj = _.cloneDeep(obj);
clonedObj.b.c = 42;

console.log(obj.b.c); // 2
console.log(clonedObj.b.c); // 42

const obj2 = { a: { b: { c: 42 } } };
console.log(_.get(obj2, "a.b.c")); // 42

const nested = [1, [2, [3, [4]]]];
console.log(_.flatten(nested)); // [1, 2, [3, [4]]]
console.log(_.flattenDeep(nested)); // [1, 2, 3, 4]

console.log(_.uniq([1, 2, 2, 3])); // [1, 2, 3]

const users = [{ id: 1 }, { id: 2 }, { id: 1 }];
console.log(_.uniqBy(users, "id")); // [{ id: 1 }, { id: 2 }]

const obj1 = { a: 1, b: { c: 2 } };
const obj3 = { b: { d: 3 } };
console.log(_.merge(obj1, obj3)); // { a: 1, b: { c: 2, d: 3 } }

const array = [1, 2, 3, 4];
console.log(_.shuffle(array));

const expensiveFunction = (num) => {
    console.log("input------", num);
    return num * 2;
};
const memoized = _.memoize(expensiveFunction);

console.log("result---", memoized(2)); // 10
console.log("result---", memoized(10)); // 10
console.log("result---", memoized(2)); // Cached result: 10

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(_.intersection(array1, array2)); // [2, 3]

const array3 = [1, 2, 3];
const array4 = [2, 3, 4];
console.log(_.xor(array3, array4)); // [1, 4]

const array5 = [1, 2, 3, 4];
const array6 = [3, 4, 5, 6];

// Find common values between array1 and array2
const commonValues = _.intersection(array5, array6);

// Combine array1 values and common values from array2
const result = _.union(array1, commonValues);
console.log(result); // [1, 2, 3, 4]
