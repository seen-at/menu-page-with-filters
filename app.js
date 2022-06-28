const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

  // new item added to the menu 
  {
    id: 10,
    title: "steak",
    category: "dinner",
    price: 29.99,
    img: "./images/item-10.jpeg",
    desc: `skateit tumblr kickstarter thundercats miga Live-edge lyft af, pork belly cloud bread icelan.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// will load this section with the initial HTML w/o styles and filter
window.addEventListener("DOMContentLoaded", function () {

  // calling the contents of the array with a different function and calling it within DOMContentLoaded makes filtering convenient
  // the contents are stored in the function, calling it will display in the windows
  displayMenuItems(menu);
  displayMenuButtons()
});

// iterates through the passed array and returns the selected keys of the items in the array into the HTML
function displayMenuItems(menuItems) {

  // display functionality can be done in the window event listener, but using fucntion makes the process faster in the window listener
  let displayMenu = menuItems.map(function (item) {

    // hard-coded menu item in the HTML returned here with the contents of the array replacing the original texts
    return `<article class="menu-item">
              <img src= ${item.img} class="photo" alt= ${item.title}>
              <div class="item-info">
               <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </header>
              <p class="item-text">${item.desc}</p>
               </div>
            </article>`
  });

  // join the contents of the array in one string
  // without empty quotation there will be commas in between the items and they will be individual items
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu;
};

function displayMenuButtons() {

  // the buttons loaded dynamically
  // get the unique categories
  // the initial value placed in reduce is 'all' because buttons will be created based on unique categories and all isn't a category 
  const categories = menu.reduce(function (values, item) {

    // values array will accumulate any new category already not present in it
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values;
  }, ['all']
  );
  const categoryBtns = categories.map(function (category) {
    return `
      <button class="filter-btn" type="button" data-id=${category}>
        ${category}
      </button>`
    // contents of the array joined in one string
  }).join('')
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  // filter items
  // dynamically added buttons will not be accessed by filterBtns
  // filterBtns variable is moved within the function dynamically creating the buttons
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {

      // shows the class of the button that has been clicked
      // console.log(event.currentTarget);

      // shows the button that has been clicked but is accessed with the data-id put in the HTML button
      // console.log(event.currentTarget.dataset);

      // shows the value of the button that has been clicked
      // the data-id needs to match the category in the menu array to enable filter functionality
      const category = event.currentTarget.dataset.id;

      // the menu array is assigned into another variable to be filtered 
      const menuCategory = menu.filter(function (menuItem) {

        // the category of the indiviual items is checked from the array and that item is returned
        if (menuItem.category === category) {
          return menuItem;
        };
      });

      // displays the filtered items from the array
      console.log(menuCategory)

      if (category === "all") {
        // calls the function and displays the entire array stored within it
        displayMenuItems(menu);
      }
      else {
        displayMenuItems(menuCategory);
      }
    });
  });
}