"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[165],{3710:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return k}});var l,o=n(3366),a=(n(7294),n(4983)),u=n(3076),s=["components"],i={},d=(l="SubmodulesTable",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),r={_frontmatter:i},c=u.Z;function k(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"D3 Importing submodules"),(0,a.kt)("p",null,"When we're using D3, we don't use every single function that's available in the package. In order to reduce file size, we should import the specific functions that we are using."),(0,a.kt)("p",null,"If you look for code online, often you'll see code such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'d3.select("...")\n')),(0,a.kt)("p",null,"Whenever there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"d3."),", this means we can just import the following function name and call it without the ",(0,a.kt)("inlineCode",{parentName:"p"},"d3."),"."),(0,a.kt)("p",null,"For example, instead of the code above we would do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { select } from "d3-selection";\n\nselect("...")\n')),(0,a.kt)("p",null,"In this example, \"d3-selection\" is a submodule as the entire D3 package is split into these submodules. If you ever don't know the name of the submodule that function comes from, you can google something like: 'd3 select' and the first link will be to the d3 github, '",(0,a.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-selection'"},"https://github.com/d3/d3-selection'")," and you can tell that the 'select' function is from 'd3-selection' since that is the last part of the url."),(0,a.kt)("p",null,"If you're using a submodule hat's not listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", you can install new packages using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save packageNameHere\n")),(0,a.kt)("h2",null,"Common functions and their submodules"),(0,a.kt)(d,{mdxType:"SubmodulesTable"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Function Names"),(0,a.kt)("th",null,"Submodules"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"select, selectAll"),(0,a.kt)("td",null,"d3-selection")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"axisLeft, axisBottom"),(0,a.kt)("td",null,"d3-axis")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"max, extent"),(0,a.kt)("td",null,"d3-array")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scaleLinear, scaleBand"),(0,a.kt)("td",null,"d3-scale")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"line, area"),(0,a.kt)("td",null,"d3-shape")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"nest"),(0,a.kt)("td",null,"d3-collection")))))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-guides-d-3-imports-md-665e9d4eb57204bd8828.js.map