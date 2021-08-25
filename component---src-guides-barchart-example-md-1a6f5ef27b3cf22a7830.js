"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[607],{5297:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return d}});var a=n(3366),o=(n(7294),n(4983)),s=n(3076),i=["components"],l={},r={_frontmatter:l},h=s.Z;function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(h,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The start of your file will already look something like this, and please add anything that's not already there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { select } from "d3-selection";\n\nconst makePlot = (data) => {\n    const container = select("#div-id")\n\n    container.selectAll("*").remove();\n\n    container.append("h1").text("My title");\n\n    console.log(data)\n}\n\nexport default makePlot;\n')),(0,o.kt)("p",null,"The first line shows how to import a function from a d3 module. Throughout this tutorial, we will be importing many functions, please put them all together, at the start of the file."),(0,o.kt)("p",null,"Then we declare a function, ",(0,o.kt)("inlineCode",{parentName:"p"},"makePlot"),", which is exported at the very end of this section. The export allows use to pass in data from a separate file. The rest of our code will all go inside of this makePlot function."),(0,o.kt)("p",null,"First, we need to tell d3 where we can make our chart. We do this by using the select function we imported and specifying the id of a div in our index.html. "),(0,o.kt)("p",null,"The next line is useful when we make the chart responsive and adjust for different device widths, so keep it in."),(0,o.kt)("p",null,"The next line shows how we can use d3 to interface with our html. We're telling d3 to append an h1 (a heading) into our container and pass in the text \"My title\". When the code is run, you'll see that html element on the page. "),(0,o.kt)("p",null,"It's always a good idea to use console.log to see what's going on. Make sure you can see this output in your browser's console."),(0,o.kt)("p",null,"At the very start of the file include this comment with a short description of the file and your name after the @author as you see below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Description of the file\n * @author your-name\n */\n")),(0,o.kt)("p",null,"Start typing in 'const size =' and select the 'D3 Size Object' which will insert the following code. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const size = {\n    height: 400,\n    width: Math.min(600, window.innerWidth - 40),\n};\n")),(0,o.kt)("p",null,"We're going to setup our plot to have a height of 400px and a width of 600px. We want to store these values in this object and will reference this object in the rest of the code so if we ever change the dimensions of the plot, we can have the rest of the code update automatically."),(0,o.kt)("p",null,"Start typing in 'const margin =' and select the 'D3 Margin Object' which will insert the following code. When writing code in d3 we refer to the empty space we want to leave around the edge of the plot as margin (even though it's padding in CSS)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const margin = {\n    top: 10,\n    right: 10,\n    bottom: 10,\n    left: 10,\n  };\n")),(0,o.kt)("p",null,"Then we can append an svg element (which is like a canvas for where we're going to make our plot) by typing 'const svg =' and select the option to setup out svg with the specified size above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const svg = container\n    .append('svg')\n    .attr('height', size.height)\n    .attr('width', size.width);\n")),(0,o.kt)("p",null,"You should now see an empty space under the title and our HTML looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div id="div-id">\n    <svg height="400" width="600"></svg>\n</div>\n')),(0,o.kt)("p",null,"and we can see that inside of our div is our appended svg with the height and width attributes set."),(0,o.kt)("p",null,"When making plots, we're going to use scales to figure out where to put svg elements, their dimensions, color, etc. Scales have a domain (the values you want to pass into the scale) and a range that find the pixel location of where your inputs should be placed. "),(0,o.kt)("p",null,"When making horizontal bar charts, we're going to need an x-axis that takes values from 0-100% and we want this to take up the entire width of our svg except for the margins on the left and right."),(0,o.kt)("p",null,"We also need the bars spaced out vertically. To do this, we can use scaleBand() which has a domain of the category names of the bars and we want this to take up the entire height of the svg except for the margins on the top and bottom. "),(0,o.kt)("p",null,"To get an array for all of the category names, we can use Javascript's map function. Our ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," constant is an array of objects for each bar. Map takes a function and applies that to each element in the array. We want to convert all of the objects into just the category name and we can do this by returning the object.",(0,o.kt)("inlineCode",{parentName:"p"},"category name"),". You will need to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"categoryNameHere")," with the key name of the object whose value is the category you want."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// add this line to the top of the file:\nimport { scaleLinear, scaleBand } from "d3-scale";\n\nconst x = scaleLinear()\n    .domain([0, 1])\n    .range([margin.left, size.width - margin.right])\n\nconst y = scaleBand()\n    .domain(data.map((d) => d.categoryNameHere))\n    .range([margin.top, size.height - margin.bottom]);\n')),(0,o.kt)("p",null,"Now we need to put the bars on the chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},' svg\n    .selectAll("bars")\n    .data(data)\n    .enter()\n    .append("rect")\n    .attr("x", x(0))\n    .attr("y", (d) => y(d.categoryNameHere))\n    .attr("width", (d) => x(d.pct) - x(0))\n    .attr("height", y.bandwidth() / 2)\n')),(0,o.kt)("p",null,"Later, we'll see data binding in d3, but for now just know we have to make a selection (it can be anything really), passing on our data array using .data() and then enter the selection with .enter(). The following methods are run for each element in our data array. "),(0,o.kt)("p",null,"To make bars we need to append the svg 'rect' and specify the bar's x and y location along with it's width and height. We want the bars to start at x=0, which we can specify by using our x scale that we defined above and passing in a 0. We can either pass in values or functions into these attributes. The width of the bar should be from its percentage to x=0, which we specify by calling x with the items .pct and subtracting x(0). If you're confused about what's being passed into this function, replace that function with,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(d) => {\n    console.log(d);\n    return x(d.pct) - x(0);\n}\n")),(0,o.kt)("p",null,"This is very helpful to do, and you'll see that this function is being called for all of the individual elements of data."),(0,o.kt)("p",null,"We can set the y location using the y axis we setup. The height of the bar should at most be ",(0,o.kt)("inlineCode",{parentName:"p"},"y.bandwidth()"),", but we'll want to leave some space in between bars and so you can divide this value by 2. You should see black bars displayed on the svg when you run this code."),(0,o.kt)("p",null,"We can color the bars by adding the following attribute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'.attr("fill", scaleOrdinal(schemeTableau10))\n')),(0,o.kt)("p",null,"which will need these functions imported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { schemeTableau10 } from "d3-scale-chromatic";\nimport { scaleOrdinal } from "d3-scale";\n')),(0,o.kt)("p",null,"Since we are already importing from d3-scale, include ",(0,o.kt)("inlineCode",{parentName:"p"},"scaleOrdinal")," in the previous import instead."),(0,o.kt)("p",null,"We can display the x axis by using the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// add this line to the top of the file:\nimport { axisBottom } from "d3-axis";\n\nsvg\n    .append("g")\n    .attr("transform", `translate(0, ${size.height - margin.bottom})`)\n    .attr("color", "#adadad")\n    .call(\n      axisBottom(x)\n        .ticks(5)\n        .tickFormat((d) => `${Math.round(d * 100)}${d === 1 ? "%" : ""}`)\n    );\n')),(0,o.kt)("p",null,"Now, you may see part of the axis, but not all of the ticks. This is because our margin.bottom is too small. Go up to where we setup the margin object and increase the value for bottom. You should be able to then see the entire axis and the bars should scale accordingly to the changed area."),(0,o.kt)("p",null,"We can add labels to the bars in a similar way we created the rectangles themselves."),(0,o.kt)("p",null,'This time, append svg "text" and specify the x and y location using attributes and the text to display by using .text().'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'svg\n    .selectAll("labels")\n    .data(data)\n    .enter()\n    .append("text")\n    .text((d) => d.categoryNameHere)\n    .attr("x", x(0))\n    .attr("y", (d) => y(d.categoryNameHere));\n')),(0,o.kt)("p",null,"You can subtract a number (try 5) from the y, so the label has some space from the bar."),(0,o.kt)("h1",null,"Adding Hover over"),(0,o.kt)("p",null,"It would be nice if when we put our mouse over the bar, we can see the actual value. To do this, we can add event handlers to our rects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { selectAll } from "d3-selection";\n\n// add to the end of the bars\n.on("mouseenter", (event, d) => {\n    svg\n    .append("text")\n    .attr("x", x(d.pct))\n    .attr("y", y(d.letter))\n    .text(d.pct)\n    .attr("class", "hover-over-text");\n})\n.on("mouseleave", () => {\n    selectAll(".hover-over-text").remove();\n});\n')),(0,o.kt)("p",null,'When you move your mouse over a rect, the "mouseenter" event is fired and the specified function is called. In this function, I append text like we did above, and also give this text a class, so we can remove it later.'),(0,o.kt)("p",null,'When the mouse is moved out of the rect, the "mouseleave" event is fired and the next function is called. This function selects all elements with the class specified above and removes them, so the text goes away.'),(0,o.kt)("p",null,'Add or subtract a few pixels from the x and y values to make the text appear at then end of the bar and not overlappping. You can also specify the "fill" on the text as we did for the rectangles so they have the same color. Instead of passing in ',(0,o.kt)("inlineCode",{parentName:"p"},"d.pct")," to the text, multiply this number by 100 and add a percent sign."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-guides-barchart-example-md-1a6f5ef27b3cf22a7830.js.map