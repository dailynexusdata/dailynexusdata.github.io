```js
import { select } from "d3-selection";

const makePlot = (data) => {
    const container = select("#div-id")

    container.selectAll("*").remove();

    container.append("h1").text("My title");

    console.log(data)
}

export default makePlot;
```

Start typing in 'const size =' and select the 'D3 Size Object' which will insert the following code. 
```js
const size = {
    height: 400,
    width: Math.min(600, window.innerWidth - 40),
};
```

Start typing in 'const margin =' and select the 'D3 Margin Object' which will insert the following code. 
```js
const margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  };
```

We can then type 'const svg =' and select the option to setup out svg with the specified size above.
```js
const svg = container
    .append('svg')
    .attr('height', size.height)
    .attr('width', size.width);
```

Now, our HTML looks like:
```html
<div id="div-id">
    <svg height="400" width="600"></svg>
</div>
```
and we can see that inside of our div is our appended svg with the height and width attributes set.


```js
import { scaleLinear, scaleBand } from "d3-scale";

const x = scaleLinear()
    .domain([0, 1])
    .range([margin.left, size.width - margin.right]);

const y = scaleBand()
    .domain(data.map((d) => d.race))
    .range([size.height - margin.bottom, margin.top]);
```