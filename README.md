Project created using Vue-cli. As such, it was automatically created with vue-router and vuex, as well as jest as modules. I modified a bit the structure of the project to fit my usual style of trying to have an index file inside a scripts folder to easier way to import later on. Babel is missing the default export from, with it enabled, it would be more elegant.

I try in this kind of tests to test some ideas that I haven't explored too much and I want to see how well they work.
There are 3 things that I wanted to try:
- The use of scoped styling and the effect of using simple class names to structure the app. If not present, I would use a BEM methodology for class naming conventions.
- The use of css styles that I don't usually apply. There wasn't a requirement for browsers, so I played with some CSS, like, grid to structure parts of the page or filers for applying hover on the images.
- Use of picture element. Since different resolution images were provided, I wanted to test using the picture element to load different sized images for different resolutions. I wanted to use SVG, for their infinite scalability, but didn't want to apply changes on all the SVGs so they would work properly as inline. I wanted to work from what was given, without modifying it, so I ended up with the pngs.

Some decisions are part of what I believe is some good practices for a frontend project. Resorting to a global, reset for the css and also the use of mixins and variables to help modulate css. Also, based on my experience with react, the use of child-parent communication in some instances to help centralize some functionalities in the component that I believe should control the state changes of the components it contains.

You'll also see a folder called utils, where I usually add small functions that assist through the project that I find that will be reused. For vuex, I used saved constants to use on mutators. I liked the idea of keeping them in a file so a developer could see the entirety of mutators available. I've also tried using modules on vuex, for better managing future growth of the store.

I've tried to provide some amount of accessibility, mainly to guarantee keyboard navigation and some arias for voiceover.

Notification icons and animation used were based on this codepen:
https://codepen.io/alimuzzaman/pen/LyoyPj
