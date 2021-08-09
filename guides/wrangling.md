---
title: Hello, world!
path: /hello-world
date: 2019-01-29
---

# Data Wrangling and Manipulation in JS

some d3 js test:

```js
  const container = d3.select("#test");
  
  const svg = container.append('svg');

  svg
    .selectAll("circle")
    .data(myData)
    .append("circle")
    .attr("cx", 10)
    .attr("cy", 10)
    .attr("r", 5);
```
