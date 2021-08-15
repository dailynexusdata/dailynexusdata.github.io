---
title: Hello, world!
path: /hello-world
date: 2019-01-29
---

# Data Wrangling and Manipulation in JS

This guide goes over 3 major concepts:

* Array Operations
* Javascript Objects
* Wrangling in D3

## Array Operations

```js
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Map

Map returns an array where a function is applied to each element of the original array.

Using `.map()` to return an array of the squares of `myArr`.

```js
const squares = myArr.map(x => x**2);
console.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
```

![test](../../static/images/arrayMapExample.png)

We can also use more complex functions:

```js
const factorials = myArr.map((x) => {
    let prod = 1;
    for (let i = 1; i <= x; ++i) {
        prod *= i;
    }
    return prod;
});
console.log(factorials); // [1, 2, 6, 24, 120, 720, 5040, 40320, 362880]
```

The index of the element is passed in as the second item:

```js
const indices = myArr.map((x, i) => i)
console.log(indices) // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

### Filter

Filter returns an array of elements in the original array that meet a condition.

Get the even numbers of the array using `.filter()`. The `%` is the modulus operator which returns the remained after a division. When you divide an even number by 2, there should be a remainder of zero. .filter() returns the values where the passed in function returns `true`.

![](../../static/images/arrayFilterExample.png)

```js
const evenNumbers = myArr.filter(x => x % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8]
```


## Javascript Objects

Objects are key-value collections of data.

```js
const myObj = {
    name: "Labyrinth",
    nWriters: 5
};
```

We can access items by their key:

```js
console.log(myObj.name); // "Labyrinth"
```

### Object Destructuring

We can values out of objects into individual variables with the same name as follows: 

```js
const { name, nWriters } = myObj;
console.log(name, nWriters) // "Labyrinth", 5
```

## Wrangling with D3

Often times our data will be arrays of objects. This array contains data for 3 students.

```js
const students = [
    { major: "Math", gpa: 3.00 },
    { major: "Compsci", gpa: 3.50 },
    { major: "Compsci", gpa: 3.75 }
]
```

### d3.max()

We can get the max gpa of all students:

```js
const maxGpa = d3.max(students, d => d.gpa)
console.log(maxGpa) // 3.75
```

The first argument passed into `d3.max()` has to be an array of values, then the second argument can be a function that returns a value for each element in the passed in array.

### d3.nest()

Often, we'll want to group data by a common value. Here, we're going to group together students with the same major using `d3.nest()`

```js
const nestedData = d3Collection
    .nest()
    .key((d) => d.major)
    .entries(students)

console.log(nestedData)
// [
//   { 
//       key: 'Math', 
//       values: [ { major: 'Math', gpa: 3 } ],
//   },
//   { 
//       key: 'Compsci', 
//       values: [ 
//           { major: 'Compsci', gpa: 3.5 }, 
//           { major: 'Compsci', gpa: 3.75 } 
//       ] 
//   }
// ]
```

Here, we tell d3 that we want to group values by the major, by passing in a function to get the major value in `.key()`. Then we pass the entire array in with `.entries()`.


If we wanted to get the max GPA by department, we can map this array and then use `d3.max()` to get the max value form each department's `values` key.

```js
const maxGpaByDept = nestedData.map(({ key, values }) => ({
    key,
    maxGPA: d3.max(values, (d) => d.gpa),
}));

console.log(maxGpaByDept);
// [ { key: 'Math', maxGPA: 3 }, { key: 'Compsci', maxGPA: 3.75 } ]
```