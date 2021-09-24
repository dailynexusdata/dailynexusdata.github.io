# D3 Importing submodules

When we're using D3, we don't use every single function that's available in the package. In order to reduce file size, we should import the specific functions that we are using.

If you look for code online, often you'll see code such as:

```js
d3.select("...")
```

Whenever there is a `d3.`, this means we can just import the following function name and call it without the `d3.`.

For example, instead of the code above we would do:
```js
import { select } from "d3-selection";

select("...")
```

In this example, "d3-selection" is a submodule as the entire D3 package is split into these submodules. If you ever don't know the name of the submodule that function comes from, you can google something like: 'd3 select' and the first link will be to the d3 github, 'https://github.com/d3/d3-selection' and you can tell that the 'select' function is from 'd3-selection' since that is the last part of the url.

If you're using a submodule hat's not listed in the `package.json`, you can install new packages using the following command:
```bash
npm install --save packageNameHere
```

## Common functions and their submodules

<SubmodulesTable>
    <thead>
        <tr>
            <th>Function Names</th>
            <th>Submodules</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>select, selectAll</td>
            <td>d3-selection</td>
        </tr>
        <tr>
            <td>axisLeft, axisBottom</td>
            <td>d3-axis</td>
        </tr>
        <tr>
            <td>max, extent</td>
            <td>d3-array</td>
        </tr>
        <tr>
            <td>scaleLinear, scaleBand</td>
            <td>d3-scale</td>
        </tr>
        <tr>
            <td>line, area</td>
            <td>d3-shape</td>
        </tr>
        <tr>
            <td>nest</td>
            <td>d3-collection</td>
        </tr>
    </tbody>
</SubmodulesTable>