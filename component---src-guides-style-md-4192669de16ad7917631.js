"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[84],{6126:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return p}});var a,o=n(3366),s=(n(7294),n(4983)),r=n(3076),l=["components"],i={},u=(a="Link",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),h={_frontmatter:i},c=r.Z;function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,s.kt)(c,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",null,"1. Don't use ",(0,s.kt)("inlineCode",{parentName:"h2"},"var")),(0,s.kt)("p",null,"When looking at older javascript code, you'll see variables created with ",(0,s.kt)("inlineCode",{parentName:"p"},"var"),". Don't use ",(0,s.kt)("inlineCode",{parentName:"p"},"var")," to create variables."),(0,s.kt)("p",null,"Most of the time, we won't need to change the values of a variable, so default to creating things using ",(0,s.kt)("inlineCode",{parentName:"p"},"const"),". If you do need to change the value, use ",(0,s.kt)("inlineCode",{parentName:"p"},"let")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"var"),"."),(0,s.kt)("h2",null,"2. Functions"),(0,s.kt)("p",null,"When creating functions please use the arrow notation (",(0,s.kt)("inlineCode",{parentName:"p"},"() => {}"),"). If we need to call this function later, we can assign it to a const."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const sum = (a, b) => {\n    return a + b\n}\n\nsum(1, 2) // 3\n")),(0,s.kt)("p",null,"Since there is only one line and we're returning a value, this can be shortened, removing the curly brackets and the return. The following function is identical."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const sum = (a, b) => a + b\n\nsum(1, 2) // 3\n")),(0,s.kt)("p",null,"Converting to this shorthand should be done automatically in our projects with ESLint installed."),(0,s.kt)("p",null,"When returing an object, you can still use the shorthand, just wrap the curly brackets in parenthesis."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const createPerson = (name) => ({ name })\n\ncreatePerson("labyrinth") // { name: "labyrinth" }\n')),(0,s.kt)("h2",null,"3. Always use ",(0,s.kt)("inlineCode",{parentName:"h2"},"===")),(0,s.kt)("p",null,"Using strict equality (",(0,s.kt)("inlineCode",{parentName:"p"},"==="),") checks that the values ",(0,s.kt)("em",{parentName:"p"},"and")," the types of what you're comparing are the same. This should always be preferred over the loose equality ",(0,s.kt)("inlineCode",{parentName:"p"},"=="),"."),(0,s.kt)("p",null,"Your code will be more readable and you can avoid potential errors if you don't abuse truthy and falsy values."),(0,s.kt)("h2",null,"4. Have descriptive id's and class names"),(0,s.kt)("p",null,"Eventually, our charts will go on the dailynexus.com website, which has it's on CSS styles, id's and class names. We need to make sure that the id's and class names we use don't overlap with other elements on the website."),(0,s.kt)("p",null,"When creating id's and class names, make them descriptive! Please use this scheme below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"laby-(project-name)-(chart-name)-element\n")),(0,s.kt)("p",null,"For example, if I have a project that we're calling the 'senate-tracker' and I'm making a bar chart showing the number of votes each person got for a specific position, we can call this chart the 'position-votes-chart', then the id I should assign to the container div is: 'laby-senate-tracker-position-votes-chart'."),(0,s.kt)("p",null,"If in this bar chart, I'm making an arrow and need an id with the triangle, I should use the id, 'laby-senate-tracker-position-votes-chart-triangle'. If the id was just 'triangle' then it's going to mess up the COVID tracker on the sidebar of the page because I'm already using that ID."),(0,s.kt)("p",null,"If you have to use these classes or id's multiple times throughout your code, just save the long names to a variable so it's more managable. It is important that the id's and classnames in the html is descriptive and unique!"),(0,s.kt)("h2",null,"5. D3 imports"),(0,s.kt)("p",null,"In other places on the web, you'll see people write code like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"d3.select('#plot-id');\n")),(0,s.kt)("p",null,"We don't want to be importing all of D3 because then we'll be including a lot of code that we aren't using. Instead, just import the specific functions that we are using. So the code above should be changed to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// goes at the top of the file:\nimport { select } from 'd3-selection'\n\nselect('#plot-id')\n")),(0,s.kt)("p",null,"Reference ",(0,s.kt)(u,{to:"../d3/imports",mdxType:"Link"},"this page")," to see which functions come from which submodules."),(0,s.kt)("h2",null,"6. Use D3 Dates"),(0,s.kt)("p",null,"Dates in Javascript are annoying to use and have cross-browser compatability issues. Look at ",(0,s.kt)("inlineCode",{parentName:"p"},"d3.timeParse()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"d3.timeFormat()"),"."),(0,s.kt)("h2",null,"7. ESLint Ignore"),(0,s.kt)("p",null,"Our Prettier-ESLint plugin will format your code, make some transformations (such as changing ",(0,s.kt)("inlineCode",{parentName:"p"},"var")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"const"),") and show warnings and errors. If there are yellow or red squiggly lines, please read the message and take the steps to correct it. Please do not just add a comment to ignore the warning or error."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-guides-style-md-4192669de16ad7917631.js.map