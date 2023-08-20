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
    { name: 'Dining Chairs', sortOrder: 40 },
    { name: 'Stools', sortOrder: 50 },
    { name: 'Outdoor Chairs', sortOrder: 60 }
  ])

  await Item.deleteMany({})
  const items = await Item.create([
    // lounge chairs -> categories[0]
    {
      name: 'Eames Lounge Chair and Ottoman',
      imageURL: 'https://images.hermanmiller.group/m/31e1574974d26a1f/W-HM_5667_9120884_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 7395.00,
      featured: true
    },
    {
      name: 'Eames Lounge Chair',
      imageURL: 'https://images.hermanmiller.group/m/468770dab3750a76/W-HM_6649_100203587_palisander_vicenza_leather_white_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 6595.00,
      featured: false
    },
    {
      name: 'Eames Molded Plywood Lounge Chair Wood Base (LCW)',
      imageURL: 'https://images.hermanmiller.group/m/7eaf897481a345d3/W-DWR_1378_117630_walnut_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 1395.00,
      featured: false
    },
    {
      name: 'Eames Molded Plywood Lounge Chair, Herman Miller x HAY',
      imageURL: 'https://images.hermanmiller.group/m/153a931e549f1e99/W-HM_EMO_32552.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 1195.00,
      featured: true
    },
    {
      name: 'Wilkes Modular Sofa Group Chair',
      imageURL: 'https://images.hermanmiller.group/m/d510bad4458a7b9c/W-HM_2526586_100206748_beck_lambic_034_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 2295.00,
      featured: true
    },
    {
      name: 'Eames Upholstered Molded Fiberglass Low Wire Base Armchair',
      imageURL: 'https://images.hermanmiller.group/m/2b69e9e9dc08db24/W-HM_2517867_100164853_black_black_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 995.00,
      featured: false
    },
    {
      name: 'Striad Lounge Chair',
      imageURL: 'https://images.hermanmiller.group/m/516a850b3fac8504/W-STR_100070739_heathered_grey_black_swivel_a_BW_AD_20170803163951780.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 3995.00,
      featured: false
    },
    {
      name: 'Eames Molded Plastic Armchair, Rocker Base',
      imageURL: 'https://images.hermanmiller.group/m/f82787df843845c3/W-HM_2197712_100366446_red_orange_black_maple_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 795.00,
      featured: false
    },
    {
      name: 'Nelson Coconut Chair',
      imageURL: 'https://images.hermanmiller.group/m/8267224d6956a984/W-HM_975_100188160_goldenrod_white_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 3795.00,
      featured: true
    },
    {
      name: 'Lispenard Armchair',
      imageURL: 'https://images.hermanmiller.group/m/4219a40d55507d25/W-HM_2513728_100110274_dove_oak_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 2895.00,
      featured: false
    },
    {
      name: 'Cube Armchair',
      imageURL: 'https://images.hermanmiller.group/m/6eabb8a8a9ee122c/W-HM_NCB_31615.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[0],
      price: 5295.00,
      featured: false
    },
    // side chairs -> categories[1]
    {
      name: 'Eames Molded Plastic Side Chair',
      imageURL: 'https://images.hermanmiller.group/m/e9b2745042682c98/W-HM_1104_8975870_white_white_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[1],
      price: 345.00,
      featured: false
    },
    {
      name: 'Eames Molded Plastic Side Chair with Seat Pad',
      imageURL: 'https://images.hermanmiller.group/m/d776d2034df49b5e/W-HM_2518169_100172732_chrome_white_seashell_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[1],
      price: 610.00,
      featured: true
    },
    {
      name: 'Caper Stacking Chair',
      imageURL: 'https://images.hermanmiller.group/m/20e6ce1e175c96a4/W-HM_52_9021079_Fog_f-jpg.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[1],
      price: 315.00,
      featured: false
    },
    {
      name: 'Eames Molded Fiberglass Side Chair',
      imageURL: 'https://images.hermanmiller.group/m/9c4e9612eb5f0d0d/W-HM_1104_788854_red_orange_black_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[1],
      price: 945.00,
      featured: false
    },
    // office chairs -> categories[2]
    {
      name: 'Asari Chair by Herman Miller, High Back',
      imageURL: 'https://images.hermanmiller.group/m/47e8b1a512405632/W-HM_NUA_39239.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 1395.00,
      featured: false
    },
    {
      name: 'Asari Chair by Herman Miller, Mid Back',
      imageURL: 'https://images.hermanmiller.group/m/3d917a6d4eaa83db/W-HM_NUA_39392.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 1525.00,
      featured: true
    },
    {
      name: 'Aeron Chair',
      imageURL: 'https://images.hermanmiller.group/m/447b79b6fd4d7df5/W-AeronChair_100103768_Front.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 1410.00,
      featured: false
    },
    {
      name: 'Embody Chair',
      imageURL: 'https://images.hermanmiller.group/m/5077930732638ff6/W-HM_4737_100147350_graphite_graphite_charcoal_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 1885.00,
      featured: false
    },
    {
      name: 'Sayl Chair',
      imageURL: 'https://images.hermanmiller.group/m/41cff1e42d058c88/W-HM_AS1SA22PAN2BKBBBKBK23512_black_black_tailored_black.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 735.00,
      featured: false
    },
    {
      name: 'Cosm Chair, High Back',
      imageURL: 'https://images.hermanmiller.group/m/ace48eef97af8f71/W-HM_2515455_100128927_nightfall_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 2100.00,
      featured: false
    },
    {
      name: 'Cosm Chair, Low Back',
      imageURL: 'https://images.hermanmiller.group/m/3c19924d476cf0de/W-HM_2515454_100114984_canyon_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 1310.00,
      featured: false
    },
    {
      name: 'Eames Wire Task Chair',
      imageURL: 'https://images.hermanmiller.group/m/d48728a9a702e24e/W-HM_2517949_100168970_chrome_mimosa_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 1525.00,
      featured: false
    },
    {
      name: 'About A Chair 153 Task Chair',
      imageURL: 'https://images.hermanmiller.group/m/eb6a49dfd534c2b8/W-HAY_2516536_100148055_light_grey_polished_aluminum_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 995.00,
      featured: false
    },
    {
      name: 'Zeph Multipurpose Side Chair',
      imageURL: 'https://images.hermanmiller.group/m/e28ed5b8808ac487/W-HM_2537105_100273395_armless_carbon_cayenne_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 745.00,
      featured: false
    },
    {
      name: 'Eames Executive Chair',
      imageURL: 'https://images.hermanmiller.group/m/0bb74475d2dc18e7/W-HM_2055_465021_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[2],
      price: 5215.00,
      featured: false
    },
    // dining chairs -> categories[3]
    {
      name: 'Eames Molded Plywood Dining Chair Metal Base (DCM)',
      imageURL: 'https://images.hermanmiller.group/m/940d1c99708358be/W-HM_5333_121217_walnut_chrome_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[3],
      price: 945.00,
      featured: false
    },
    {
      name: 'Eames Molded Plywood Dining Chair Wood Base (DCW)',
      imageURL: 'https://images.hermanmiller.group/m/a66eee8af69220e1/W-HM_101_243261_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[3],
      price: 1295.00,
      featured: true
    },

    // stools -> categories[4]
    {
      name: 'Eames Turned Stool, Style A',
      imageURL: 'https://images.hermanmiller.group/m/ea2e1db53cc94dea/W-HM_237_103701_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[4],
      price: 1295.00,
      featured: false
    },
    {
      name: 'Eames Turned Stool, Style B',
      imageURL: 'https://images.hermanmiller.group/m/7140e1ea9b4ae20c/W-HM_237_104463__walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[4],
      price: 1295.00,
      featured: false
    },
    {
      name: 'Eames Turned Stool, Style C',
      imageURL: 'https://images.hermanmiller.group/m/94ec136b5e9ceb5a/W-HM_237_104470_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[4],
      price: 1295.00,
      featured: false
    },
    {
      name: 'Eames Turned Stool, Style D',
      imageURL: 'https://images.hermanmiller.group/m/425ceb612c5691f1/W-HM_OCC_41757.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[4],
      price: 1295.00,
      featured: false
    },
    {
      name: 'Spot Stool',
      imageURL: 'https://images.hermanmiller.group/m/4b45f2595b2a29ce/W-HM_2195197_100113161_walnut_brass_vendor_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[4],
      price: 1395.00,
      featured: false
    },
    {
      name: 'Magis Tibu Piston Stool',
      imageURL: 'https://images.hermanmiller.group/m/eadf2475f4964296/W-DWR_2516171_100143731_red_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[4],
      price: 1555.00,
      featured: false
    },
    // outdoor chairs -> categories[5]
    {
      name: 'Magis Bell Chair',
      imageURL: 'https://images.hermanmiller.group/m/2d550a4ab4594ca5/W-HM_2526970_100198962_high_noon_d3.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[5],
      price: 175.00,
      featured: false
    },
    {
      name: 'Magis Spun Chair',
      imageURL: 'https://images.hermanmiller.group/m/d30677b8ebab80c7/W-HM_9540_100063889_red_a1_002.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[5],
      price: 995.00,
      featured: false
    },
    {
      name: 'Crosshatch Chair',
      imageURL: 'https://images.hermanmiller.group/m/435ff5abd5871b3e/W-HM_4874_10000594_walnut_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=fafafa&bg=fafafa&auto=format&w=1200&q=68&h=1000',
      category: categories[5],
      price: 3395.00,
      featured: false
    },
  ])

  console.log(items)

  process.exit()

})()