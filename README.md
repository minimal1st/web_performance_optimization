# Front-End Web Developer Nanodegree

## Web Performance Optimization Project

### Description of the Project
In this project, I was provided with a web portfolio and I had to optimize it in order to achieve **60 frames per second** and a **PageSpeed score of 90**. In order to achieve this goal, a number of **optimization tricks** were used.

### Optimization tricks and tools used
- **Minification** of HTML files [using gulp-htmlmin]
- **Minification** of CSS files [using gulp-clean-css]
- **Inlining** of CSS files [manually]
- **Removal** of unused CSS selectors [using gulp-uncss]
- **Uglification** of JavaScript files [using gulp-uglify]
- **Compression** and optimal resizing of images [using gulp-imagemin]
- **Modification** of js functions [manually]
- Use of the **async** attribute in \<script> tags. [manually]

### Optimization details
**manual resizing** applied to:
- `pizzeria.jpg` to width of 100px

**cleancss** and **csso** applied to:
- `css/style.css`
- `css/print.css`

**manual inling** applied to: 
- `css/style.css`

**uglify** applied to:
- `js/perfmatters.js`

**htmlmin** applied to:
- `project-2048.html`
- `project-mobile.html`
- `project-webperf.html`
- `views/pizza.html`
- `index.html`

**imagemin** applied to:
- `img/2048.png`
- `img/cam_be_like.jpg`
- `img/mobilewebdev.jpg`
- `img/profilepic.jpg`
- `views/images/pizzeria.jpg`

**gulp** plugins used:
- `gulp-imagemin`
- `gulp-htmlmin`
- `gulp-clean-css`
- `gulp-uncss`
- `gulp-csso`
- `gulp-uglify`

### Automation Tool 
- In order to automate most of these tasks, the automation tool **gulp** was used.

### Building the 'dist' directory
- In order to launch gulp which will perform most of the tasks previously mentioned, simply type `gulp`, which will run the default task in gulpfile.js, which includes all the other tasks. **gulp** can be installed using the npm package manager.

### License 

MIT License

Copyright (c) 2016 minimal1st

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
