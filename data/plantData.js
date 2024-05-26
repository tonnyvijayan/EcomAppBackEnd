const product = [
  {
    name: "String of Pearls",
    productDescription:
      "It is a creeping, perennial, succulent vine native to the Cape Provinces of South Africa. In its natural environment its stems trail on the ground, rooting where they touch and form dense mats",
    category: "hanging plants",
    price: 255,
    maxDiscount: 35,
    imageUrl:
      "https://cdn-eflke.nitrocdn.com/ZeIxUHBKgPenxSfQIafxPEVEQQhlZwSo/assets/images/optimized/rev-f92ba80/cloudshillsucculents.co.uk/wp-content/uploads/2015/01/Senecio-rowlyeanus-35-copy-600x600.webp",
    new: true,
    rating: "4",
    bestseller: false,
    inStock: false,
    deliveryTime: "",
  },
  {
    name: "Monstera",
    productDescription:
      "  Monstera deliciosa, commonly called split-leaf philodendron orswiss cheese plant, is native to Central America. It is aclimbing, evergreen perennial vine that is perhaps most noted forits large perforated leaves on thick plant stems and its longcord-like aerial roots",
    category: "tropical vine",
    price: 465,
    maxDiscount: 23,

    imageUrl:
      "https://media.greg.app/cGxhbnQtZGItcGhvdG9zL21vbnN0ZXJhXy5qcGc=?format=pjpeg&optimize=high&auto=webp&precrop=1000:1000,smart&fit=crop&width=1000&height=1000",
    new: true,
    rating: "4.1",
    bestseller: false,
    inStock: false,
    deliveryTime: "",
  },
  {
    name: "String of Hearts",
    productDescription:
      "  The string of hearts is a popular household hanging plant with heart-shaped leaves that has won the hearts of millions of people worldwide. The string of hearts, scientifically known as Ceropegia woodii. This attractive succulent is best used for decoration purposes, especially in interior design.",
    category: "hanging plants",
    price: 665,
    maxDiscount: 18,

    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/string-of-hearts-plant-ceropegia-woodii-1647292866.jpg?crop=1.00xw:0.670xh;0,0&resize=1200:*",
    new: false,
    rating: "4.4",
    bestseller: false,
    inStock: false,
    deliveryTime: "",
  },
  {
    name: "Rose",
    productDescription:
      "The queen of flowers, rose is very beautiful and attractive.Roses symbolize love, royalty, beauty, sensuality, secrecy, and mysticism. They are also associated with achievement and perfection It grows in different colours like red, white, yellow, pink and other varieties. Small thorns on the stem protect the plant.",
    category: "flowering outdoor plants",
    price: 165,
    maxDiscount: 23,

    imageUrl:
      "https://puspitanursery.in/wp-content/uploads/2021/07/512RvWb5pzS.jpg",
    new: false,
    rating: "5",
    bestseller: true,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Sunflower",
    productDescription:
      "Sunflowers are useful plants with large flower heads, or blooms. They are named for the way they turn their blooms from east to west to follow the Sun. Sunflowers were first grown in North and South America. Today they are also grown in other parts of the world, including Europe and Asia.",
    category: "flowering outdoor plants",
    price: 225,
    maxDiscount: 45,

    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENnEBV_3omcqCu1VbwJjGYozTSiyGppY7SQ&usqp=CAU",
    new: false,
    rating: "4.5",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Dahlia",
    productDescription:
      "Dahlia is a genus of bushy, tuberous, herbaceous perennial plants native to Mexico and Central America. As a member of the Asteraceae family of dicotyledonous plants, its relatives include the sunflower, daisy, chrysanthemum, and zinnia.",
    category: "flowering outdoor plants",
    price: 125,
    maxDiscount: 15,

    imageUrl:
      "https://www.bhg.com/thmb/swx9lQOfSM6vEo9J1Xw4tUP-upM=/1244x0/filters:no_upscale():strip_icc()/pink-dahlias-growing-in-container-6d50f97eb9aa46cf8632559636fec153.jpg",
    new: false,
    rating: "3.9",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Jasmine",
    productDescription:
      "Common jasmine is a climbing shrub that can grow up to 8 metres tall. The leaves are made up of 7 to 9 smaller 'leaflets', which are long, pointed and oval-shaped. The flowers are white or very pale pink, with five petals and strongly scented",
    category: "flowering outdoor plants",
    price: 195,
    maxDiscount: 35,

    imageUrl:
      "https://www.michlers.com/cdn/shop/products/PairJasminePots.jpg?v=1614268885&width=2048",
    new: false,
    rating: "4.1",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Tradescantia",
    productDescription:
      "Tradescantia zebrina is a herbaceous perennial often grown as a houseplant. It has interesting variegated foliage striped green, white, and gray leaves with purple undersides. The leaves are ovate and clasp the stem at the base. Tiny three-petaled lavender-purple flowers appear infrequently indoors.",
    category: "outdoor plants",
    price: 375,
    maxDiscount: 37,

    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgsAY7qB-nPkYt5i4cHXngwab6bx704l4rbEJb7oIC53xapory-4GLN4nLHXqisEkGh0&usqp=CAU",
    new: false,
    rating: "4.3",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "String of pearls(variegated)",
    productDescription:
      "Variegated String of Pearls is a well loved wishlist item for all plant collectors. It's known for its pearl like leaves that are swirled in cream, green, and sometimes even pink and purple colors with the right combination of sun stress and water. The thin, string-like stems trail elegantly and can cascade several feet.",
    category: "Hanging plants",
    price: 575,
    maxDiscount: 24,

    imageUrl:
      "https://jnsucculents.com.au/cdn/shop/files/Variegated-String-of-Pearls_530x@2x.jpg?v=1686570493",
    new: false,
    rating: "4.4",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "String of hearts(variegated)",
    productDescription:
      "Variegated String of Hearts is a well loved wishlist item for all plant collectors. It's known for its heart like leaves that are swirled in cream, green, and sometimes even pink and purple colors with the right combination of sun stress and water. The thin, string-like stems trail elegantly and can cascade several feet.",
    category: "Hanging plants",
    price: 675,
    maxDiscount: 21,

    imageUrl: "https://i.ebayimg.com/images/g/UjsAAOSw8Atg2Xa~/s-l1600.jpg",
    new: false,
    rating: "4.6",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Aglaonema(Snow White)",
    productDescription:
      "Aglaonema is a genus of flowering plants in the arum family, Araceae. They are native to tropical and subtropical regions of Asia and New Guinea. They are known commonly as Chinese evergreens. Aglaonema. Aglaonema commutatum",
    category: "outdoor plants",
    price: 375,
    maxDiscount: 23,

    imageUrl:
      "https://budsnblush.com/cdn/shop/products/AglaonemaSnowwhite.jpg?v=1660309236",
    new: false,
    rating: "4.0",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Aglaonema(Red)",
    productDescription:
      "Aglaonema is a genus of flowering plants in the arum family, Araceae. They are native to tropical and subtropical regions of Asia and New Guinea. They are known commonly as Chinese evergreens. Aglaonema. Aglaonema commutatum",
    category: "outdoor plants",
    price: 275,
    maxDiscount: 40,

    imageUrl: "https://urbano.in/wp-content/uploads/2020/09/red.jpeg",
    new: false,
    rating: "4.0",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Callisia Repens",
    productDescription:
      "Callisia repens is a creeping herb and can root at the nodes to form a big mat. Its leaves are ovate and measure up to 4 cm long and 2 cm wide, acute at the tip and rounded at the base. The leaf margins are hairy. Its flowers are borne in cluster in the leaf axils, small and white",
    category: "outdoor plants",
    price: 175,
    maxDiscount: 15,

    imageUrl:
      "https://nurserynisarga.in/wp-content/uploads/2020/08/turtle-vine-23.webp",
    new: false,
    rating: "4.2",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Pink Lady",
    productDescription:
      "Callisia repens is a creeping herb and can root at the nodes to form a big mat. Its leaves are ovate and measure up to 4 cm long and 2 cm wide, acute at the tip and rounded at the base. The leaf margins are hairy. Its flowers are borne in cluster in the leaf axils, small and white",
    category: "outdoor plants",
    price: 475,
    maxDiscount: 33,

    imageUrl:
      "https://i.etsystatic.com/17296139/r/il/b9be89/4448171168/il_1080xN.4448171168_s662.jpg",
    new: false,
    rating: "4.5",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Snake Plant",
    productDescription:
      "It has web-like underground roots and thick, sword-shaped leaves with a unique banded pattern. It can flower once a year, producing clusters of cream-coloured flowers, that may develop into small orange fruits",
    category: "succulent",
    price: 95,
    maxDiscount: 29,

    imageUrl:
      "https://www.thespruce.com/thmb/SsHaPRyZppWJ-ZHmbKhl_vdBWBo=/2048x0/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-04-d3990a1d0e1d4202a824e929abb12fc1-349b52d646f04f31962707a703b94298.jpeg",
    new: false,
    rating: "4.1",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Graptopetalum",
    productDescription:
      "Graptopetalums change color and size depending on growing conditions. Those in partial or dappled shade are blue-gray; in full, hot sun, gray-pink; in bright shade to full sun, pinkish yellow. They're smaller (about 2 inches in diameter) when stressed and larger (4 inches) when pampered.",
    category: "succulent",
    price: 395,
    maxDiscount: 26,

    imageUrl:
      "https://i.pinimg.com/736x/2f/fc/6a/2ffc6a099c0e910e7fe463bd33f63685.jpg",
    new: false,
    rating: "4.4",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Jade Plant",
    productDescription:
      "Crassula ovata, commonly known as jade plant, lucky plant, money plant or money tree, is a succulent plant with small pink or white flowers that is native to the KwaZulu-Natal and Eastern Cape provinces of South Africa, and Mozambique; it is common as a houseplant worldwide",
    category: "succulent",
    price: 463,
    maxDiscount: 28,

    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/jade-plant-care-643d549d9e04a.jpg",
    new: false,
    rating: "4.4",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Aeonium",
    productDescription:
      "These plants are grown primarily for their attractive rosettes of waxy leaves. The leaves may be solid green, green variegated with creamy yellow, bronzy-purple, or dark purple. Mature plants of A. arboretum and related hybrids grow about 3 feet tall.",
    category: "succulent",
    price: 763,
    maxDiscount: 30,

    imageUrl:
      "https://esucculent.com/cdn/shop/products/Aeonium_DutchRose_900x.png?v=1657684757",
    new: false,
    rating: "4.7",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Pothos",
    productDescription:
      "Pothos is an evergreen plant with thick, waxy, green, heart-shaped leaves with splashes of yellow. As a houseplant, it is commonly grown as a hanging plant. Pothos can climb by means of aerial roots, and wild or cultivated plants grown outdoors can reach enormous heights using tall trees as support",
    category: "creepers",
    price: 763,
    maxDiscount: 20,

    imageUrl:
      "https://media.houseandgarden.co.uk/photos/64bff5f4d6a55acd0397054e/master/pass/Screenshot%202023-07-25%20at%2017.17.10.png",
    new: false,
    rating: "4.7",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Bougainvillea",
    productDescription:
      "Bougainvillea is a genus of flowering plants.it is often grown as gardening plant in warm climate. Bougainvilleas first came from South America. They are climbing plants grown for decoration in tropical countries, and in the southern United States.it is Grenada's national flower.",
    category: "creepers",
    price: 963,
    maxDiscount: 15,

    imageUrl:
      "https://lh3.googleusercontent.com/proxy/Rr0LJ7r6W2_OxSvaaQjhLVWwmV5qIODA77NX7Ap9Hl5G1JFjlSkVVTHqrySBvdy8yiEoF193248OvJplnHLyp5r1Mwe8h8XcuaEfhgDcJ1IkGijRXf3BLcRkZECBPU1U",
    new: false,
    rating: "4.4",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
  {
    name: "Mandevilla",
    productDescription:
      "This tropical vine bears a nonstop supply of large, trumpet-shaped blooms in shades of red, pink, and white. It's also lovely in landscape beds and borders -- and is frequently used to climb up and over arbors, trellises, and mailbox posts.",
    category: "creepers",
    price: 722,
    maxDiscount: 36,

    imageUrl:
      "https://cdn11.bigcommerce.com/s-5ahp77r7un/images/stencil/1280x1280/products/2604/4999/Sundenia-Crimson-full-plant__03023.1553892532.jpg?c=2",
    new: false,
    rating: "4.1",
    bestseller: false,
    inStock: true,
    deliveryTime: "",
  },
];

console.log(product.length);
