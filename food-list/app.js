const food = [
  {
    id: 1,
    name: 'strawberry',
    type: 'fruit',
    price: 5.99,
    img: './images/item-1.jpg',
    calory: `50cal `,
  },
  {
    id: 2,
    name: 'pepper',
    type: 'vegetable',
    price: 4.59,
    img: './images/item-2.jpg',
    calory: `25cal `,
  },
  {
    id: 3,
    name: 'carrot',
    type: 'vegetable',
    price: 2.99,
    img: './images/item-3.jpg',
    calory: `30cal`,
  },
  {
    id: 4,
    name: 'banana',
    type: 'fruit',
    price: 3.99,
    img: './images/item-4.jpg',
    calory: `100cal `,
  },
  {
    id: 5,
    name: 'potato',
    type: 'vegetable',
    price: 1.99,
    img: './images/item-5.jpg',
    calory: `100cal `,
  },
  {
    id: 6,
    name: 'almonds',
    type: 'nuts',
    price: 18.99,
    img: './images/item-6.jpg',
    calory: `580cal`,
  },
  {
    id: 7,
    name: 'mango',
    type: 'fruit',
    price: 8.99,
    img: './images/item-7.jpg',
    calory: `60cal `,
  },
  {
    id: 8,
    name: 'Walnuts',
    type: 'nuts',
    price: 22.99,
    img: './images/item-8.jpg',
    calory: `650cal `,
  },
  {
    id: 9,
    name: 'hazelnuts',
    type: 'nuts',
    price: 26.99,
    img: './images/item-9.jpg',
    calory: `620cal`,
  },
  {
    id: 10,
    name: 'orange',
    type: 'fruit',
    price: 3.99,
    img: './images/item-10.jpg',
    calory: `50cal`,
  },
  {
    id: 11,
    name: 'tomatto',
    type: 'vegetable',
    price: 5.99,
    img: './images/item-11.jpg',
    calory: `50cal`,
  },
  {
    id: 12,
    name: 'pistacio',
    type: 'nuts',
    price: 29.99,
    img: './images/item-12.jpg',
    calory: `550cal`,
  },
];

const sectionCenter = document.querySelector('.section-ctr');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
  diplayFoodItems(food);
  displayFoodButtons();
});

function diplayFoodItems(foodItems) {
  let displayFood = foodItems.map(function (item) {
    return `<article class="item">
          <img src=${item.img} alt=${item.name} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.name}</h4>
              <h4 class="price">1kg $${item.price}</h4>
            </header>
            <p class="text">
              Calories per 100g: ${item.calory}
            </p>
          </div>
        </article>`;
  });
  displayFood = displayFood.join('');

  sectionCenter.innerHTML = displayFood;
}
function displayFoodButtons() {
  const categories = food.reduce(
    function (values, item) {
      if (!values.includes(item.type)) {
        values.push(item.type);
      }
      return values;
    },
    ['all']
  );
  const typeBtns = categories
    .map(function (type) {
      return `<button type="button" class="filter-btn" data-id=${type}>
          ${type}
        </button>`;
    })
    .join('');

  btnContainer.innerHTML = typeBtns;
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const type = e.currentTarget.dataset.id;
      const foodtype = food.filter(function (foodItem) {
        if (foodItem.type === type) {
          return foodItem;
        }
      });
      if (type === 'all') {
        diplayFoodItems(food);
      } else {
        diplayFoodItems(foodtype);
      }
    });
  });
}
