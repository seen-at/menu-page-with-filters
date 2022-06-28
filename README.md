One item of the menu hard-coded is in the HTML to create the container of other menu items. 
The function displayMenu uses the hard-coded HTML, .map() through the menu array and assigns into it corresponding variables from the menu array. The items are joined as one big string. The string is assigned into a variable which then dispays the variable using innerHTML.

All button shows all the contents of the menu. Breakfast, lunch, dinner, shakes show respective items

Hard-coded buttons are removed in order to be added dynamically for circumstances when there are new items in the menu with different categories. Unique categories are obtained using .reduce() and put into an array. An item 'all' is set as the initial value of the unique category array. This is done to make sure there is a button that shows all the contents of the menu. In order to identify the button, a data-id class is added to the hard-code using the same names as the category from the menu in order to directly.
Contents of the array are then used to name the buttons. Using the hard-coded button code a big string is created. The string is assigned into a variable which then dispays the variable using innerHTML. 
 
