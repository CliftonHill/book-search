# Book Search
Search for books.
* **by Clifton Hill**
* cliftonhhill [@] gmail [dot] com / [GitHub Profile](https://github.com/CliftonHill) / [LinkedIn](https://www.linkedin.com/in/crusadingthought)
* App live at: <https://cliftonhill.github.io/book-search/>

## Introduction
Solo Project for Chingu Voyager 25, due 10/27/20. This project utilized code from a partially completed book review list project that was experimenting with React components. This project uses Google Books API to search for books with matching terms, display the top 10 results with a brief summary. Clicking on the book tile provides a more in depth summary via a modal, clicking on the Book Page Link takes to full Google Books Preview page.
* Made with React, material-UI, super-agent, Google Books API, Node, HTML, CSS.
* Code is © 2020 by Clifton Hill

## How to Run Project locally
1. Clone Project locally
2. run `npm install`
3. `npm start`

## Features:
* Search Google Books API, display visual results, get further details, link to Google Books Preview page
* Responsive website: ready for desktop or mobile use

## Future improvements:
* Save to a personal library (integrate database)
* Add self rating Feature
* Add community review score
* Clean up CSS and refine/break down components to be modular (include CSS styles in modularity)

## Bugs fixed:
* Reset search hook values to remedy display search result problem
* Search button not consistently working with clicking. Discovered that menu button field was partly obscuring search button at small screen widths. Fixed CSS field overlap. Issue appears resolved.

## Bugs:
* edit React Button "book page" to reflect React button effects (hover, click ripple, etc.) Button currently is just static.
* search terms inconsistent in their result. "dog" always netted a result, "sanderson" frequently returned an error. -->Still need to detail how this was corrected

---
## REACT BOILERPLATE
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
