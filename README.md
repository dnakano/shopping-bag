# Shopping Bag application
The shopping bag application is written with [React](https://reactjs.org/) and [Redux](https://redux.js.org/) (for demonstration purpose only).

The application is located on [my portfolio website](https://daisukenakano.com/index.php#spa).

The source codes are located in the **src** directory:
* **src/ShoppingBagApp/** - Contains source files used to create Shopping Bag application.
  * **index.jsx** - Entry point of the application: Creates Redux store and mounts the application to DOM.
  * **actions/** - Defines and creates Redux action types and action creators.
  * **assets/** - Image and sample data files used to populate the product list.
  * **components/** - React components written in JSX that create the application.
  * **reducers/** - Create Redux reducers.
  * **stylesheets/** - Sass stylesheet to style the application.
  * **utils/** - JavaScript utility functions used in the application.
* **src/components/** - Generic components (i.e. error message popup, dialog popup, etc.) used in the application.
* **src/stylesheets/** - Sass stylesheet used globally amongst all applications.
* **src/utils/** - JavaScript utility functions used globally amongst all applications.

![Shopping Bag app](img/ShoppingBagApp.PNG)

Technologies used: **Babel, ESLint, JavaScript (ES6+), JSX, PostCSS, React, Redux, Sass, stylelint, webpack**

If you have any questions or comments, please contact me. Thanks for looking!
