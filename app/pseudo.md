# React Restaurant

### Use React to build an online menu for a Bootcamp restaurant, getting the menu items using an API call, and only loading one page.

### Questions
- How do we change state?
    * Where does state live?
- How do we navigate the website without loading new pages?
- How do we conditionally render?

### State
- App.js
    * State for the webpage will live in my App.js file. Establish state changing function to be used in another component
    * API call will happen here, data will be passed through to other components

- Home.js
    * Used as a landing page
    * Also what will show while the API data loads in
    * Can be accessed at any time by clicking on the logo in the navbar

- Header.js
    * Always showing on the page
    * Used as a navigator to take the user to each category on the menu

- Footer.js
    * Always showing on the page
    * Has arbitrary information about the restaurant

- Appetizers.js/Breakfast.js/Dessert.js/Dinner.js/Lunch.js/Sides.js
    * State identifiers and categories of the menu that will render on click from the navbar
    * Each component will take the API data passed from App.js and filter it to only have that category of items
    * Title/price/description will be taken from the dataset mapped into bootstrap cards to make the menu items