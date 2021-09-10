This tutorial will be following on after the Bar Chart Example. 

Create a new file in the plots directory called 'linePlot.js'. Inside of the index.js file, import this file,

```js
// import at the top of index.js after the bar chart import
import makeLinePlot from '../plots/linePlot';
```

And call the function passing in the same data inside of  the `resize` function.

```js
makeLinePlot(data);
```

Setup 'linePlot.js' by using the 'start' short code as done before. Make the id for this plot be: '#nexus-example-line-plot'. Then add another div to 'index.ejs' with this id.


```js
const lineData = data.map((d) => [
    {
        year: 2019,
        val: d[2019],
    },
    {
        year: 2020,
        val: d[2020],
    },
    {
        year: 2021,
        val: d[2021],
    },
]);
```

```js
import { scalePoint } from "d3-scale";
import { max } from "d3-array";

const x = scalePoint()
    .domain([2019, 2020, 2021])
    .range([margin.left, size.width - margin.right]);

const y = scaleLinear()
    .domain([0, max(lineData, (d) => max(d, (v) => v.val))])
    .range([size.height - margin.bottom, margin.top]);
```

```js
import { line } from 'd3-shape';

const myLine = line()
.x((d) => x(d.year))
.y((d) => y(d.val));

svg
    .selectAll('lines')
    .data(lineData)
    .enter()
    .append('path')
    .attr('d', myLine)
    .attr('stroke', 'black')
    .attr('fill', 'none');
```

```js
import { axisBottom } from 'd3-axis';

svg
    .append('g')
    .style('color', '#adadad')
    .style('font-size', '12pt')
    .attr('transform', `translate(0, ${size.height - margin.bottom})`)
    .call(axisBottom().scale(x));
```