type Product = {
  "id": number,
  "product": string,
  "price": string,
  "organic": boolean
}

// To specify that the type will be contained into an array, have [] at the end of the type of data it contains for ts
export const data: Product[] = [{
    "id": 1,
    "product": "Duck - Breast",
    "price": "$6.85",
    "organic": true
  }, {
    "id": 2,
    "product": "Water, Tap",
    "price": "$7.75",
    "organic": true
  }, {
    "id": 3,
    "product": "Tandoori Curry Paste",
    "price": "$2.98",
    "organic": true
  }, {
    "id": 4,
    "product": "Soup V8 Roasted Red Pepper",
    "price": "$3.38",
    "organic": false
  }, {
    "id": 5,
    "product": "Ecolab Crystal Fusion",
    "price": "$0.37",
    "organic": true
  }, {
    "id": 6,
    "product": "Ginger - Pickled",
    "price": "$5.62",
    "organic": false
  }, {
    "id": 7,
    "product": "Beef - Eye Of Round",
    "price": "$7.72",
    "organic": false
  }, {
    "id": 8,
    "product": "Sunflower Seed Raw",
    "price": "$4.72",
    "organic": false
  }, {
    "id": 9,
    "product": "Glucose",
    "price": "$3.23",
    "organic": false
  }, {
    "id": 10,
    "product": "Tart Shells - Sweet, 4",
    "price": "$8.82",
    "organic": true
  }, {
    "id": 11,
    "product": "Sunflower Seed Raw",
    "price": "$0.18",
    "organic": true
  }, {
    "id": 12,
    "product": "Venison - Racks Frenched",
    "price": "$4.43",
    "organic": false
  }, {
    "id": 13,
    "product": "Lychee - Canned",
    "price": "$3.90",
    "organic": false
  }, {
    "id": 14,
    "product": "Croissant, Raw - Mini",
    "price": "$3.43",
    "organic": true
  }, {
    "id": 15,
    "product": "Wine - Blue Nun Qualitatswein",
    "price": "$4.15",
    "organic": false
  }, {
    "id": 16,
    "product": "Squid - U 5",
    "price": "$6.03",
    "organic": false
  }, {
    "id": 17,
    "product": "Chip - Potato Dill Pickle",
    "price": "$7.00",
    "organic": false
  }, {
    "id": 18,
    "product": "Bread - Sticks, Thin, Plain",
    "price": "$7.20",
    "organic": false
  }, {
    "id": 19,
    "product": "Sprite, Diet - 355ml",
    "price": "$5.24",
    "organic": true
  }, {
    "id": 20,
    "product": "Chips - Miss Vickies",
    "price": "$5.04",
    "organic": false
  }, {
    "id": 21,
    "product": "Rabbit - Saddles",
    "price": "$0.72",
    "organic": false
  }, {
    "id": 22,
    "product": "Flour - Rye",
    "price": "$0.21",
    "organic": false
  }, {
    "id": 23,
    "product": "Chicken - Diced, Cooked",
    "price": "$0.36",
    "organic": false
  }, {
    "id": 24,
    "product": "Wine - Manischewitz Concord",
    "price": "$8.74",
    "organic": true
  }, {
    "id": 25,
    "product": "Squash - Guords",
    "price": "$8.29",
    "organic": true
  }, {
    "id": 26,
    "product": "Shrimp - 16/20, Iqf, Shell On",
    "price": "$0.71",
    "organic": true
  }, {
    "id": 27,
    "product": "Rosemary - Dry",
    "price": "$3.34",
    "organic": true
  }, {
    "id": 28,
    "product": "Radish - Black, Winter, Organic",
    "price": "$2.52",
    "organic": true
  }, {
    "id": 29,
    "product": "Garbage Bags - Black",
    "price": "$0.48",
    "organic": false
  }, {
    "id": 30,
    "product": "Napkin - Beverage 1 Ply",
    "price": "$1.97",
    "organic": true
  }, {
    "id": 31,
    "product": "Pepper - Chipotle, Canned",
    "price": "$9.26",
    "organic": false
  }, {
    "id": 32,
    "product": "Rabbit - Frozen",
    "price": "$8.84",
    "organic": true
  }, {
    "id": 33,
    "product": "Lettuce - Iceberg",
    "price": "$7.76",
    "organic": false
  }, {
    "id": 34,
    "product": "Swordfish Loin Portions",
    "price": "$5.37",
    "organic": false
  }, {
    "id": 35,
    "product": "Oven Mitts - 15 Inch",
    "price": "$8.02",
    "organic": false
  }, {
    "id": 36,
    "product": "Yogurt - Plain",
    "price": "$8.63",
    "organic": true
  }, {
    "id": 37,
    "product": "Squid - Breaded",
    "price": "$3.59",
    "organic": false
  }, {
    "id": 38,
    "product": "Cookie - Oreo 100x2",
    "price": "$0.74",
    "organic": true
  }, {
    "id": 39,
    "product": "Pomegranates",
    "price": "$2.84",
    "organic": false
  }, {
    "id": 40,
    "product": "Wine - Port Late Bottled Vintage",
    "price": "$4.93",
    "organic": false
  }, {
    "id": 41,
    "product": "Bread - Ciabatta Buns",
    "price": "$0.12",
    "organic": true
  }, {
    "id": 42,
    "product": "Grenadillo",
    "price": "$3.86",
    "organic": true
  }, {
    "id": 43,
    "product": "Cherries - Bing, Canned",
    "price": "$6.56",
    "organic": false
  }, {
    "id": 44,
    "product": "Potato - Sweet",
    "price": "$0.13",
    "organic": true
  }, {
    "id": 45,
    "product": "Lobster - Live",
    "price": "$2.89",
    "organic": false
  }, {
    "id": 46,
    "product": "Salmon - Smoked, Sliced",
    "price": "$3.34",
    "organic": true
  }, {
    "id": 47,
    "product": "Nantucket - 518ml",
    "price": "$6.12",
    "organic": false
  }, {
    "id": 48,
    "product": "Lettuce - Treviso",
    "price": "$1.53",
    "organic": true
  }, {
    "id": 49,
    "product": "Beef - Flank Steak",
    "price": "$9.55",
    "organic": true
  }, {
    "id": 50,
    "product": "Wine - Hardys Bankside Shiraz",
    "price": "$3.21",
    "organic": false
  }, {
    "id": 51,
    "product": "Mustard - Individual Pkg",
    "price": "$4.70",
    "organic": true
  }, {
    "id": 52,
    "product": "Lamb - Shoulder, Boneless",
    "price": "$4.37",
    "organic": true
  }, {
    "id": 53,
    "product": "Shrimp - Black Tiger 26/30",
    "price": "$4.98",
    "organic": true
  }, {
    "id": 54,
    "product": "Rabbit - Frozen",
    "price": "$2.40",
    "organic": true
  }, {
    "id": 55,
    "product": "Pie Box - Cello Window 2.5",
    "price": "$9.30",
    "organic": true
  }, {
    "id": 56,
    "product": "Propel Sport Drink",
    "price": "$5.24",
    "organic": true
  }, {
    "id": 57,
    "product": "Dry Ice",
    "price": "$3.95",
    "organic": false
  }, {
    "id": 58,
    "product": "Breakfast Quesadillas",
    "price": "$4.10",
    "organic": false
  }, {
    "id": 59,
    "product": "Bar - Granola Trail Mix Fruit Nut",
    "price": "$5.21",
    "organic": false
  }, {
    "id": 60,
    "product": "Pasta - Penne Primavera, Single",
    "price": "$9.16",
    "organic": false
  }, {
    "id": 61,
    "product": "Bandage - Finger Cots",
    "price": "$3.04",
    "organic": true
  }, {
    "id": 62,
    "product": "Lamb Rack - Ontario",
    "price": "$5.03",
    "organic": false
  }, {
    "id": 63,
    "product": "Wine - Vidal Icewine Magnotta",
    "price": "$1.99",
    "organic": false
  }, {
    "id": 64,
    "product": "Salad Dressing",
    "price": "$3.53",
    "organic": false
  }, {
    "id": 65,
    "product": "Fib N9 - Prague Powder",
    "price": "$6.28",
    "organic": true
  }, {
    "id": 66,
    "product": "Alize Red Passion",
    "price": "$9.30",
    "organic": false
  }, {
    "id": 67,
    "product": "Ecolab - Lime - A - Way 4/4 L",
    "price": "$4.47",
    "organic": true
  }, {
    "id": 68,
    "product": "Stock - Beef, White",
    "price": "$0.44",
    "organic": true
  }, {
    "id": 69,
    "product": "Snapple Raspberry Tea",
    "price": "$5.98",
    "organic": false
  }, {
    "id": 70,
    "product": "Fork - Plastic",
    "price": "$6.86",
    "organic": true
  }, {
    "id": 71,
    "product": "Sole - Dover, Whole, Fresh",
    "price": "$8.73",
    "organic": false
  }, {
    "id": 72,
    "product": "Green Scrubbie Pad H.duty",
    "price": "$2.60",
    "organic": true
  }, {
    "id": 73,
    "product": "Carrots - Mini, Stem On",
    "price": "$5.60",
    "organic": true
  }, {
    "id": 74,
    "product": "Cheese - Le Cru Du Clocher",
    "price": "$8.67",
    "organic": false
  }, {
    "id": 75,
    "product": "Cake - Dulce De Leche",
    "price": "$8.52",
    "organic": true
  }, {
    "id": 76,
    "product": "Oats Large Flake",
    "price": "$0.88",
    "organic": false
  }, {
    "id": 77,
    "product": "Coffee Cup 12oz 5342cd",
    "price": "$2.96",
    "organic": true
  }, {
    "id": 78,
    "product": "Cake - Pancake",
    "price": "$8.59",
    "organic": false
  }, {
    "id": 79,
    "product": "Dasheen",
    "price": "$2.42",
    "organic": true
  }, {
    "id": 80,
    "product": "Coffee - Colombian, Portioned",
    "price": "$8.05",
    "organic": false
  }, {
    "id": 81,
    "product": "Wine - Casablanca Valley",
    "price": "$3.07",
    "organic": true
  }, {
    "id": 82,
    "product": "Cherries - Frozen",
    "price": "$0.39",
    "organic": true
  }, {
    "id": 83,
    "product": "Bread Crumbs - Japanese Style",
    "price": "$4.52",
    "organic": false
  }, {
    "id": 84,
    "product": "Sausage - Chorizo",
    "price": "$7.27",
    "organic": false
  }, {
    "id": 85,
    "product": "Lemonade - Strawberry, 591 Ml",
    "price": "$0.15",
    "organic": true
  }, {
    "id": 86,
    "product": "Wine - Port Late Bottled Vintage",
    "price": "$5.82",
    "organic": false
  }, {
    "id": 87,
    "product": "Appetizer - Southwestern",
    "price": "$1.31",
    "organic": false
  }, {
    "id": 88,
    "product": "Tea - Lemon Green Tea",
    "price": "$4.36",
    "organic": false
  }, {
    "id": 89,
    "product": "Pork Loin Bine - In Frenched",
    "price": "$3.98",
    "organic": false
  }, {
    "id": 90,
    "product": "Doilies - 8, Paper",
    "price": "$1.82",
    "organic": false
  }, {
    "id": 91,
    "product": "Orange Roughy 4/6 Oz",
    "price": "$8.79",
    "organic": false
  }, {
    "id": 92,
    "product": "Wine - Fontanafredda Barolo",
    "price": "$5.35",
    "organic": true
  }, {
    "id": 93,
    "product": "Yeast - Fresh, Fleischman",
    "price": "$5.12",
    "organic": true
  }, {
    "id": 94,
    "product": "Lamb - Leg, Bone In",
    "price": "$5.27",
    "organic": true
  }, {
    "id": 95,
    "product": "Roe - Lump Fish, Black",
    "price": "$5.67",
    "organic": false
  }, {
    "id": 96,
    "product": "Crab - Meat",
    "price": "$9.95",
    "organic": false
  }, {
    "id": 97,
    "product": "Sauce - Plum",
    "price": "$6.47",
    "organic": true
  }, {
    "id": 98,
    "product": "Mince Meat - Filling",
    "price": "$4.13",
    "organic": false
  }, {
    "id": 99,
    "product": "Milk - 2%",
    "price": "$1.94",
    "organic": false
  }, {
    "id": 100,
    "product": "Cheese - Cheddar, Old White",
    "price": "$5.77",
    "organic": false
  }]
  