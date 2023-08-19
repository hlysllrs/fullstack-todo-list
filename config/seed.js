require('dotenv').config()
require('./database')

const Category = require('../models/category')
const { Item } = require('../models/item');

(async function () {

  await Category.deleteMany({})
  const categories = await Category.create([
    { name: 'Lounge Chairs', sortOrder: 10 },
    { name: 'Side Chairs', sortOrder: 20 },
    { name: 'Office Chairs', sortOrder: 30 },
    { name: 'Outdoor Chairs', sortOrder: 40 },
    { name: 'Dining Chairs', sortOrder: 50 },
    { name: 'Stools', sortOrder: 60 }
  ])

  await Item.deleteMany({})
  const items = await Item.create([
    { name: 'Eames Lounge Chair', imageURL: '../../img/products/eames-lounge-chair.avif', category: categories[0], price: 5795.00 },
    { name: 'Eames Molded Plywood Lounge Chair', imageURL: '../../img/products/eames-lcw.avif', category: categories[0], price: 5.95 },
    { name: 'Eames Molded Plastic Side Chair', imageURL: '../../img/products/eames-molded.avif', category: categories[1], price: 6.95 },
    { name: 'Hot Dog', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[0], price: 3.95 },
    { name: 'Crab Plate', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[1], price: 14.95 },
    { name: 'Fried Shrimp', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[1], price: 13.95 },
    { name: 'Whole Lobster', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[1], price: 25.95 },
    { name: 'Taco', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[2], price: 1.95 },
    { name: 'Burrito', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[2], price: 4.95 },
    { name: 'Pizza Slice', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[3], price: 3.95 },
    { name: 'Spaghetti', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[3], price: 7.95 },
    { name: 'Garlic Bread', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[3], price: 1.95 },
    { name: 'French Fries', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[4], price: 2.95 },
    { name: 'Green Salad', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[4], price: 3.95 },
    { name: 'Ice Cream', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[5], price: 1.95 },
    { name: 'Cup Cake', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[5], price: 0.95 },
    { name: 'Custard', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[5], price: 2.95 },
    { name: 'Strawberry Shortcake', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[5], price: 3.95 },
    { name: 'Milk', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[5], price: 0.95 },
    { name: 'Coffee', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[5], price: 0.95 },
    { name: 'Mai Tai', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[5], price: 8.95 },
    { name: 'Beer', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[5], price: 3.95 },
    { name: 'Wine', imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000', category: categories[5], price: 7.95 },
  ])

  console.log(items)

  process.exit()

})()