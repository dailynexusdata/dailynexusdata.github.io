# Setup the directory

Open a new directory on your computer and run:

```bash
npm init @dailynexus/starter@0.2.0
```

When asked, proceed with the installation. When asked, put `nexus-example` as the project name.

# Get the data

Inside of the function in `src/site/index.js`, add the following line where specified.

```js
const data = await csv(
  "https://raw.githubusercontent.com/" +
    "dailynexusdata/uc-admissions/main/data/admits.csv",
  (d) => ({
    2019: +d["2019"],
    2020: +d["2020"],
    2021: +d["2021"],
    campus: d.campus,
  })
);
```

`csv` is a function from `d3-fetch` (that we import at the top of the file) which takes the url of a csv file and converts it to an array of objects representing each row.

Checkout what is returned when you run:
```js
console.log(await csv(
  "https://raw.githubusercontent.com/" +
    "dailynexusdata/uc-admissions/main/data/admits.csv"))
```

We need the `await` in front of `csv` to make sure our program waits for the file to be downloaded. What you'll notice from this output is that the number of people is represented as a string, and we'll want to change this to a number type.

`csv` can take in a second argument, which is a function that transforms each row. We passed in the function,

```js
(d) => ({
    2019: +d["2019"],
    2020: +d["2020"],
    2021: +d["2021"],
    campus: d.campus,
  })
```

This function is called for each row, passing in the data as the parameter `d`. You can add a `console.log` inside of this function see see what is being passed in.

```js
(d) => {
  console.log(d);
  return {
    2019: +d["2019"],
    2020: +d["2020"],
    2021: +d["2021"],
    campus: d.campus,
  }
}
```

When you put a `+` in front of a variable, it converts the variable to a number, so this function is just returning the same data but with the proper types.

# Create a file for the new plot

Make a file inside of src/plots called 'barChart.js' and leave it empty for now. Eventually, we'll have a function inside of this file that is being exported. Go back to index.js and import the function. Then call the function, passing in our data inside of the `resize` function.

```js
// at the top of the file
import makeBarChart from "../plots/barChart";

// inside of resize:
makeBarChart(data);
```

Go back to 'barChart.js' and start typing 'start', select the 'start d3 starter' option. This is going to have you fill out parts of the file, you can type on selected text and then when done, press TAB to go to the next entry. You're going to have to create an id for the div that the plot is going in. We can call it 'bar-chart'.

```js
const container = select("#nexus-example-bar-chart").attr(
  "class",
  "nexus-example"
);
```

Now, we need to add this element into our webpage. Inside of src/site/index.ejs, scroll down until you see a comment and fill in the id like below:

```html
<!--

    ADD PLOTS HERE:

-->
<div id="nexus-example-bar-chart"></div>
```

If you ever need to add html, do it in the .ejs file, NOT in the index.html file.

The rest of this tutorial will be inside of the src/plots/barChart.js file.

# Tutorial

The start of your file will already look something like this, and please add anything that's not already there.

```js
import { select } from "d3-selection";

const makePlot = (data) => {
  const container = select("#div-id");

  container.selectAll("*").remove();

  container.append("h1").text("My title");

  console.log(data);
};

export default makePlot;
```

The first line shows how to import a function from a d3 module. Throughout this tutorial, we will be importing many functions, please put them all together, at the start of the file.

Then we declare a function, `makePlot`, which is exported at the very end of this section. The export allows use to pass in data from a separate file. The rest of our code will all go inside of this makePlot function.

First, we need to tell d3 where we can make our chart. We do this by using the select function we imported and specifying the id of a div in our index.html.

The next line is useful when we make the chart responsive and adjust for different device widths, so keep it in.

The next line shows how we can use d3 to interface with our html. We're telling d3 to append an h1 (a heading) into our container and pass in the text "My title". When the code is run, you'll see that html element on the page.

It's always a good idea to use console.log to see what's going on. Make sure you can see this output in your browser's console.

At the very start of the file include this comment with a short description of the file and your name after the @author as you see below.

```js
/**
 * Description of the file
 * @author your-name
 */
```

Start typing in 'const size =' and select the 'D3 Size Object' which will insert the following code.

```js
const size = {
  height: 400,
  width: Math.min(600, window.innerWidth - 40),
};
```

We're going to setup our plot to have a height of 400px and a width of 600px. We want to store these values in this object and will reference this object in the rest of the code so if we ever change the dimensions of the plot, we can have the rest of the code update automatically.

Start typing in 'const margin =' and select the 'D3 Margin Object' which will insert the following code. When writing code in d3 we refer to the empty space we want to leave around the edge of the plot as margin (even though it's padding in CSS).

```js
const margin = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10,
};
```

Then we can append an svg element (which is like a canvas for where we're going to make our plot) by typing 'const svg =' and select the option to setup out svg with the specified size above.

```js
const svg = container
  .append("svg")
  .attr("height", size.height)
  .attr("width", size.width);
```

You should now see an empty space under the title and our HTML looks like:

```html
<div id="div-id">
  <svg height="400" width="600"></svg>
</div>
```

and we can see that inside of our div is our appended svg with the height and width attributes set.

When making plots, we're going to use scales to figure out where to put svg elements, their dimensions, color, etc. Scales have a domain (the values you want to pass into the scale) and a range that find the pixel location of where your inputs should be placed.

When making horizontal bar charts, we're going to need an x-axis that takes values from 0-100% and we want this to take up the entire width of our svg except for the margins on the left and right.

We also need the bars spaced out vertically. To do this, we can use scaleBand() which has a domain of the category names of the bars and we want this to take up the entire height of the svg except for the margins on the top and bottom.

To get an array for all of the category names, we can use Javascript's map function. Our `data` constant is an array of objects for each bar. Map takes a function and applies that to each element in the array. We want to convert all of the objects into just the category name and we can do this by returning the object.`category name`. You will need to replace `categoryNameHere` with the key name of the object whose value is the category you want.

```js
// add these lines to the top of the file:
import { scaleLinear, scaleBand } from "d3-scale";
import { max } from 'd3-array';

const x = scaleLinear()
  .domain([0, max(data, (d) => d[2020])])
  .range([margin.left, size.width - margin.right]);

const y = scaleBand()
  .domain(data.map((d) => d.categoryNameHere))
  .range([margin.top, size.height - margin.bottom]);
```

Now we need to put the bars on the chart:

```js
svg
  .selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", x(0))
  .attr("y", (d) => y(d.categoryNameHere))
  .attr("width", (d) => x(d[2020]) - x(0))
  .attr("height", y.bandwidth() / 2);
```

Later, we'll see data binding in d3, but for now just know we have to make a selection (it can be anything really), passing on our data array using .data() and then enter the selection with .enter(). The following methods are run for each element in our data array.

To make bars we need to append the svg 'rect' and specify the bar's x and y location along with it's width and height. We want the bars to start at x=0, which we can specify by using our x scale that we defined above and passing in a 0. We can either pass in values or functions into these attributes. The width of the bar should be from its percentage to x=0, which we specify by calling x with the items .pct and subtracting x(0). If you're confused about what's being passed into this function, replace that function with,

```js
(d) => {
  console.log(d);
  return x(d[2020]) - x(0);
};
```

This is very helpful to do, and you'll see that this function is being called for all of the individual elements of data.

We can set the y location using the y axis we setup. The height of the bar should at most be `y.bandwidth()`, but we'll want to leave some space in between bars and so you can divide this value by 2. You should see black bars displayed on the svg when you run this code.

We can color the bars by adding the following attribute:

```js
.attr("fill", scaleOrdinal(schemeTableau10))
```

which will need these functions imported:

```js
import { schemeTableau10 } from "d3-scale-chromatic";
import { scaleOrdinal } from "d3-scale";
```

Since we are already importing from d3-scale, include `scaleOrdinal` in the previous import instead. You will also need to install 'd3-scale-chromatic' by running `npm install --save d3-scale-chromatic` in a terminal in VSCode.

We can display the x axis by using the following code:

```js
// add this line to the top of the file:
import { axisBottom } from "d3-axis";

svg
  .append("g")
  .attr("transform", `translate(0, ${size.height - margin.bottom})`)
  .attr("color", "#adadad")
  .call(
    axisBottom(x)
      .ticks(5)
      .tickFormat((d) => `${Math.round(d * 100)}${d === 1 ? "%" : ""}`)
  );
```

Now, you may see part of the axis, but not all of the ticks. This is because our margin.bottom is too small. Go up to where we setup the margin object and increase the value for bottom. You should be able to then see the entire axis and the bars should scale accordingly to the changed area.

We can add labels to the bars in a similar way we created the rectangles themselves.

This time, append svg "text" and specify the x and y location using attributes and the text to display by using .text().

```js
svg
  .selectAll("labels")
  .data(data)
  .enter()
  .append("text")
  .text((d) => d.categoryNameHere)
  .attr("x", x(0))
  .attr("y", (d) => y(d.categoryNameHere));
```

You can subtract a number (try 5) from the y, so the label has some space from the bar.

# Adding Hover over

It would be nice if when we put our mouse over the bar, we can see the actual value. To do this, we can add event handlers to our rects.

```js
// add this line to the top of the file:
import { selectAll } from "d3-selection";

// add to the end of the bars
.on("mouseenter", (event, d) => {
    svg
    .append("text")
    .attr('x', x(d[2020]))
    .attr('y', y(d.categoryNameHere))
    .text(d[2020])
    .attr("class", "hover-over-text");
})
.on("mouseleave", () => {
    selectAll(".hover-over-text").remove();
});
```

When you move your mouse over a rect, the "mouseenter" event is fired and the specified function is called. In this function, I append text like we did above, and also give this text a class, so we can remove it later.

When the mouse is moved out of the rect, the "mouseleave" event is fired and the next function is called. This function selects all elements with the class specified above and removes them, so the text goes away.

Add or subtract a few pixels from the x and y values to make the text appear at then end of the bar and not overlappping. You can also specify the "fill" on the text as we did for the rectangles so they have the same color. Instead of passing in `d.pct` to the text, multiply this number by 100 and add a percent sign.
