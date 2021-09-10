
## 1. Don't use `var`

When looking at older javascript code, you'll see variables created with `var`. Don't use `var` to create variables.

Most of the time, we won't need to change the values of a variable, so default to creating things using `const`. If you do need to change the value, use `let` instead of `var`.

## 2. Functions

When creating functions please use the arrow notation (`() => {}`). If we need to call this function later, we can assign it to a const.

```js
const sum = (a, b) => {
    return a + b
}

sum(1, 2) // 3
```

Since there is only one line and we're returning a value, this can be shortened, removing the curly brackets and the return. The following function is identical.

```js
const sum = (a, b) => a + b

sum(1, 2) // 3
```

Converting to this shorthand should be done automatically in our projects with ESLint installed.

When returing an object, you can still use the shorthand, just wrap the curly brackets in parenthesis.
```js
const createPerson = (name) => ({ name })

createPerson("labyrinth") // { name: "labyrinth" }
```

## 3. Always use `===`

Using strict equality (`===`) checks that the values *and* the types of what you're comparing are the same. This should always be preferred over the loose equality `==`.

Your code will be more readable and you can avoid potential errors if you don't abuse truthy and falsy values.

## 4. Have descriptive id's and class names

Eventually, our charts will go on the dailynexus.com website, which has it's on CSS styles, id's and class names. We need to make sure that the id's and class names we use don't overlap with other elements on the website.

When creating id's and class names, make them descriptive! Please use this scheme below:

```bash
laby-(project-name)-(chart-name)-element
```

For example, if I have a project that we're calling the 'senate-tracker' and I'm making a bar chart showing the number of votes each person got for a specific position, we can call this chart the 'position-votes-chart', then the id I should assign to the container div is: 'laby-senate-tracker-position-votes-chart'.

If in this bar chart, I'm making an arrow and need an id with the triangle, I should use the id, 'laby-senate-tracker-position-votes-chart-triangle'. If the id was just 'triangle' then it's going to mess up the COVID tracker on the sidebar of the page because I'm already using that ID.

If you have to use these classes or id's multiple times throughout your code, just save the long names to a variable so it's more managable. It is important that the id's and classnames in the html is descriptive and unique!

## 5. D3 imports

In other places on the web, you'll see people write code like:

```js
d3.select('#plot-id');
```

We don't want to be importing all of D3 because then we'll be including a lot of code that we aren't using. Instead, just import the specific functions that we are using. So the code above should be changed to:

```js
// goes at the top of the file:
import { select } from 'd3-selection'

select('#plot-id')
```

Reference <Link to="../d3/imports">this page</Link> to see which functions come from which submodules.

## 6. Use D3 Dates

Dates in Javascript are annoying to use and have cross-browser compatability issues. Look at `d3.timeParse()` and `d3.timeFormat()`.

## 7. ESLint Ignore

Our Prettier-ESLint plugin will format your code, make some transformations (such as changing `var` to `let` or `const`) and show warnings and errors. If there are yellow or red squiggly lines, please read the message and take the steps to correct it. Please do not just add a comment to ignore the warning or error.