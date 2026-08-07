/* ==========================================================================
   CAKE LOVER — ADMIN MANAGEMENT SCRIPT (FULL 5 SECTIONS CRUD)
   1. Cakes & Categories Menu
   2. Hero Slider Showcase Images
   3. Scrolling Marquee Strip ("Handcrafted Fresh Daily")
   4. Brand Story Photos & Text ("Who We Are")
   5. Instagram Reels & Videos ("Trending Now")
   ========================================================================== */

const STORAGE_KEY = 'cakelover_products';
const STORAGE_CAT_KEY = 'cakelover_categories';
const STORAGE_HERO_KEY = 'cakelover_hero_slides';
const STORAGE_MARQUEE_KEY = 'cakelover_marquee_items';
const STORAGE_STORY_KEY = 'cakelover_brand_story';
const STORAGE_REELS_KEY = 'cakelover_reels';
const STORAGE_OFFER_KEY = 'cakelover_offer_banner';

const AUTH_KEY = 'cakelover_admin_auth';
const DEFAULT_USER = 'cakelover_admin';
const DEFAULT_PASS = 'CakeLover@2026#Namakkal';

let productsList = [];
let categoriesList = [];
let heroSlidesList = [];
let marqueeList = [];
let brandStoryData = {};
let reelsList = [];
let offerBannerData = {};

const DEFAULT_OFFER_BANNER = {
  title: "Today's Offer Ends In:",
  hrs: 3,
  mins: 44,
  secs: 9,
  cta: "Order Now",
  link: "https://wa.me/919159158325"
};

// Initial default datasets
const DEFAULT_CATEGORIES = [
  { id: 'caramel-nut', name: 'Caramel Nut' },
  { id: 'flavored', name: 'Flavored' },
  { id: 'extreme-combo', name: 'Extreme Combo' },
  { id: 'choco-cakes', name: 'Choco Cakes' },
  { id: 'special-edition', name: 'Special Edition' },
  { id: 'premium-special', name: 'Premium Special' },
  { id: 'delight-cakes', name: 'Delight Cakes' }
];

const DEFAULT_PRODUCTS = [
  { id:1,  name:"Choco Scotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:734,  originalPrice:1099, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/caramel chocolate.jfif", desc:"Delicious blend of rich chocolate and golden butterscotch crunch.", active:true },
  { id:2,  name:"Red Scotch Cake",            category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:882,  originalPrice:1299, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Red velvet Cake .jfif", desc:"Soft red velvet sponge with a crispy butterscotch crunch layer.", active:true },
  { id:3,  name:"Ferro Scotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1150, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/Southern Caramel Cake_ 5-Star Recipe You Must Try - My Favorite Recipes.jfif", desc:"Premium Ferrero-style hazelnut crunch combined with rich caramel.", active:true },
  { id:4,  name:"Rasmalai Scotch Cake",       category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:706,  originalPrice:1050, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/Crissie's Homemade _ Colorado Springs CO.jfif", desc:"Desi rasmalai milk sponge paired with golden butterscotch bits.", active:true },
  { id:5,  name:"Triple Scotch Cake",         category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1150, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/butterscotch.jfif", desc:"Triple-layered caramel mousse and crispy praline nuggets.", active:true },
  { id:6,  name:"Milky Scotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:853,  originalPrice:1250, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes2/cakes2/cake.jfif", desc:"Silky milk cream sponge infused with butterscotch crunch.", active:true },
  { id:7,  name:"Butterscotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:662,  originalPrice:990,  offerText:"Buy 1kg get ½kg free", rating:4.7, img:"./cakes2/cakes2/butterscotch.jfif", desc:"Classic golden butterscotch with real caramel drizzle.", active:true },
  { id:8,  name:"Classic Vanilla Cake",       category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:440,  originalPrice:650,  offerText:"Buy 1kg get ½kg free", rating:4.6, img:"./cakes2/cakes2/cake.jfif", desc:"Pure Madagascar vanilla bean cream over fluffy white sponge.", active:true },
  { id:9,  name:"White Forest Cake",          category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:603,  originalPrice:890,  offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/White Forest Cake.jfif", desc:"White chocolate curls over vanilla sponge with cherry fillings.", active:true },
  { id:10, name:"Mango Cake",                 category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:574,  originalPrice:850,  offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/Mango Chiffon Cake.jfif", desc:"Fresh Alphonso mango pulp blended into light whipped cream.", active:true },
  { id:11, name:"Pineapple Cake",             category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:574,  originalPrice:850,  offerText:"Buy 1kg get ½kg free", rating:4.7, img:"./cakes/cakes/Dole Whip Cake.jfif", desc:"Juicy pineapple compote layered with light vanilla cream.", active:true },
  { id:12, name:"Blueberry Cake",             category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/Blueberry Cake.jfif", desc:"Wild blueberry reduction swirled into smooth vanilla frosting.", active:true },
  { id:13, name:"Strawberry Cake",            category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:574,  originalPrice:850,  offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes/cakes/cakestrawberry.jfif", desc:"Fresh strawberry compote layered with sweet vanilla cream.", active:true },
  { id:14, name:"Red Velvet Cake",            category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/Red Velvet White Chocolate.jfif", desc:"Soft crimson cocoa sponge layered with rich cream cheese.", active:true },
  { id:15, name:"Black Forest Cake [500 G]",  category:"flavored",        tag:"500g Pack",        basePrice:515,  originalPrice:750,  offerText:"500g Pack",            rating:4.8, img:"./cakes/cakes/Black forest cake recipe.jfif", desc:"Classic dark chocolate shavings with maraschino cherries in a half kg pack.", active:true },
  { id:16, name:"Choco Vanilla Cake",         category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/choconillla", desc:"Dual-flavored marble swirl of rich cocoa and pure vanilla.", active:true },
  { id:17, name:"Choco Strawberry Cake",      category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/cakestrawberry.jfif", desc:"Decadent dark chocolate ganache paired with fresh strawberry cream.", active:true },
  { id:18, name:"Butterscotch And Blueberry Cake", category:"extreme-combo", tag:"1 kg + ½ kg FREE", basePrice:706, originalPrice:1050, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/Blueberry Cake.jfif", desc:"Fruity blueberry swirls combined with crunchy butterscotch bits.", active:true },
  { id:19, name:"German Black Forest Cake",   category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:721,  originalPrice:1080, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/black-forest-gateau.jfif", desc:"Authentic German-style dark chocolate cake loaded with cherries.", active:true },
  { id:20, name:"German Chocolate Cake",      category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:721,  originalPrice:1080, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Dark Chocolate .jfif", desc:"Rich chocolate cake with coconut-pecan filling and fudge.", active:true },
  { id:21, name:"Chocolate Cake",             category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.7, img:"./cakes2/cakes2/download (5).jfif", desc:"Rich moist cocoa sponge smothered in silky chocolate frosting.", active:true },
  { id:22, name:"Choco Truffle Cake",         category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:706,  originalPrice:1050, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/download (3).jfif", desc:"Pure chocolate fudge layered with silky cream and truffle glaze.", active:true },
  { id:23, name:"Dead By Chocolate Cake",     category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:735,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Dark Chocolate .jfif", desc:"Triple-layer dark chocolate ganache for true cocoa lovers.", active:true },
  { id:24, name:"Choco Forest Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:735,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/black-forest-gateau.jfif", desc:"Extra chocolatey black forest loaded with dark cocoa curls.", active:true },
  { id:25, name:"Choco Excess Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:735,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/download (8).jfif", desc:"Overloaded with melted dark chocolate, fudge & choco chips.", active:true },
  { id:26, name:"Choco KitKat Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:809,  originalPrice:1199, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/download (5).jfif", desc:"Bordered with crispy KitKat bars and topped with choco balls.", active:true },
  { id:27, name:"Choco Walnut Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1150, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/coffee_mocha_cake.jfif", desc:"Rich chocolate sponge packed with roasted crunchy walnuts.", active:true },
  { id:28, name:"Choco Oreo Cake",            category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:809,  originalPrice:1199, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/download (3).jfif", desc:"Crushed Oreo cookie cream layered inside rich chocolate sponge.", active:true },
  { id:29, name:"Milky Truffle Cake",         category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:809,  originalPrice:1199, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/cake3.jfif", desc:"Creamy milk chocolate truffle with white cocoa drippings.", active:true },
  { id:30, name:"Ritch Choco KitKat Cake",    category:"special-edition", tag:"1 kg + 1 kg FREE", basePrice:1469, originalPrice:2199, offerText:"Buy 1kg get 1kg free", rating:4.95, img:"./cakes/cakes/download (5).jfif", desc:"Luxury celebration cake wrapped in KitKat bars with rich truffle core.", active:true },
  { id:31, name:"Black Forest Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/Black forest cake recipe.jfif", desc:"Premium black forest layered with imported cherries & dark cacao.", active:true },
  { id:32, name:"Mango Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Mango Chiffon Cake.jfif", desc:"Alphonso mango cream cake with premium fruit glaze.", active:true },
  { id:33, name:"White Forest Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/White Forest Cake.jfif", desc:"Belgian white chocolate curls with luxury cherry reduction.", active:true },
  { id:34, name:"Pineapple Premium Cake",     category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Dole Whip Cake.jfif", desc:"Fresh tropical pineapple compote over rich vanilla sponge.", active:true },
  { id:35, name:"Blueberry Premium Cake",     category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/Blueberry Cake.jfif", desc:"Handpicked wild blueberry compote layered with whipped cream.", active:true },
  { id:36, name:"Blackcurrant Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/download (4).jfif", desc:"Exotic blackcurrant berry glaze over soft vanilla sponge.", active:true },
  { id:37, name:"Red Velvet Premium Cake",    category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:955,  originalPrice:1390, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/Red Velvet White Chocolate.jfif", desc:"Signature crimson cocoa cake with imported cream cheese icing.", active:true },
  { id:38, name:"Choco Truffle Premium Cake", category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/download (8).jfif", desc:"Dense Belgian chocolate truffle cake finished with cocoa dust.", active:true },
  { id:39, name:"Butterscotch Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/butterscotch.jfif", desc:"Golden caramel praline crunch with rich butterscotch mousse.", active:true },
  { id:40, name:"Ferro Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/caramel chocolate.jfif", desc:"Ferrero hazelnut rocher mousse layered with dark chocolate fudge.", active:true },
  { id:41, name:"Lemon Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/Dream cake.jfif", desc:"Zesty lemon curd cream layered into fresh vanilla chiffon sponge.", active:true },
  { id:42, name:"Choco Almond Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/download (5).jfif", desc:"Roasted California almonds embedded in rich chocolate ganache.", active:true },
  { id:43, name:"Milky Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes2/cakes2/download (6).jfif", desc:"Luscious condensed milk sponge with whipped white cream.", active:true },
  { id:44, name:"Pista Delight Cake",         category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:956,  originalPrice:1390, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/rasmalai cake.jfif", desc:"Real Iranian pistachio cream swirled into aromatic cardamom sponge.", active:true },
  { id:45, name:"Tender Coconut Delight Cake",category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/birthday cake.jfif", desc:"Fresh tender coconut malai folded into light vanilla cream.", active:true },
  { id:46, name:"Strawberry Delight Cake",    category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Sprinkle Birthday Cake _ Hungry Happenings.jfif", desc:"Luscious fresh strawberry crush layered with velvety cream.", active:true },
  { id:47, name:"Butterscotch Delight Cake",  category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/white-wedding-cake.jfif", desc:"Rich butterscotch cream with extra crispy golden praline.", active:true },
  { id:48, name:"Mango Delight Cake",         category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes/cakes/download (4).jfif", desc:"Sweet mango puree swirled into soft vanilla sponge.", active:true },
  { id:49, name:"Royal Choco Delight Cake",   category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/download (7).jfif", desc:"Royal dark chocolate fudge with silky whipped cream accent.", active:true },
  { id:50, name:"Blueberry Delight Cake",     category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/(13) Facebook.jfif", desc:"Wild blueberry crush layered with vanilla sponge & cream.", active:true }
];

const DEFAULT_HERO_SLIDES = [
  { name: 'Choco Scotch Cake', img: './cakes/cakes/caramel chocolate.jfif', rating: '4.8★', orders: '33 Google Reviews' },
  { name: 'Red Scotch Cake', img: './cakes/cakes/Red velvet Cake .jfif', rating: '4.9★', orders: '33 Google Reviews' },
  { name: 'Ferro Scotch Cake', img: './cakes/cakes/Southern Caramel Cake_ 5-Star Recipe You Must Try - My Favorite Recipes.jfif', rating: '4.95★', orders: '33 Google Reviews' },
  { name: 'Rasmalai Scotch Cake', img: "./cakes/cakes/Crissie's Homemade _ Colorado Springs CO.jfif", rating: '4.85★', orders: '33 Google Reviews' },
  { name: 'Black Forest Cake', img: './cakes/cakes/Black forest cake recipe.jfif', rating: '4.8★', orders: '33 Google Reviews' },
  { name: 'Strawberry Delight', img: './cakes/cakes/cakestrawberry.jfif', rating: '4.8★', orders: '33 Google Reviews' },
  { name: 'Ritch Choco KitKat Cake', img: './cakes/cakes/download (5).jfif', rating: '4.95★', orders: '33 Google Reviews' },
  { name: 'Mango Premium Cake', img: './cakes/cakes/Mango Chiffon Cake.jfif', rating: '4.9★', orders: '33 Google Reviews' },
  { name: 'White Forest Cake', img: './cakes/cakes/White Forest Cake.jfif', rating: '4.8★', orders: '33 Google Reviews' },
  { name: 'Pineapple Cake', img: './cakes/cakes/Dole Whip Cake.jfif', rating: '4.7★', orders: '33 Google Reviews' },
  { name: 'Butterscotch Cake', img: './cakes2/cakes2/butterscotch.jfif', rating: '4.7★', orders: '33 Google Reviews' },
  { name: 'Blueberry Cake', img: './cakes2/cakes2/Blueberry Cake.jfif', rating: '4.9★', orders: '33 Google Reviews' },
  { name: 'Rasmalai Fusion', img: './cakes2/cakes2/rasmalai cake.jfif', rating: '4.95★', orders: '33 Google Reviews' },
  { name: 'Red Velvet Premium Cake', img: './cakes2/cakes2/Red Velvet White Chocolate.jfif', rating: '4.95★', orders: '33 Google Reviews' },
  { name: 'Tender Coconut Delight', img: './cakes2/cakes2/Dream cake.jfif', rating: '4.9★', orders: '33 Google Reviews' }
];

const DEFAULT_MARQUEE_ITEMS = [
  { img: "./cakes/cakes/Red velvet Cake .jfif", label: "Red Velvet" },
  { img: "./cakes/cakes/caramel chocolate.jfif", label: "Nutella Delight" },
  { img: "./cakes/cakes/Dole Whip Cake.jfif", label: "Pineapple" },
  { img: "./cakes/cakes/Black forest cake recipe.jfif", label: "Black Forest" },
  { img: "./cakes/cakes/Mango Chiffon Cake.jfif", label: "Mango" },
  { img: "./cakes/cakes/White Forest Cake.jfif", label: "White Forest" },
  { img: "./cakes/cakes/cakestrawberry.jfif", label: "Strawberry" },
  { img: "./cakes/cakes/Dark Chocolate .jfif", label: "Dark Chocolate" },
  { img: "./cakes/cakes/download (5).jfif", label: "Kitkat Nuts" },
  { img: "./cakes/cakes/download (3).jfif", label: "Choco Truffle" },
  { img: "./cakes/cakes/birthday cake.jfif", label: "Birthday Special" },
  { img: "./cakes2/cakes2/butterscotch.jfif", label: "Butterscotch Dream" },
  { img: "./cakes2/cakes2/Blueberry Cake.jfif", label: "Blueberry Blossom" },
  { img: "./cakes2/cakes2/rasmalai cake.jfif", label: "Rasmalai Special" },
  { img: "./cakes2/cakes2/Red Velvet White Chocolate.jfif", label: "Red Velvet White Choco" },
  { img: "./cakes2/cakes2/Dream cake.jfif", label: "Dream Cake Special" },
  { img: "./cakes2/cakes2/cake3.jfif", label: "Luxury Celebration" }
];

const DEFAULT_BRAND_STORY = {
  img1: './cakes/cakes/Red velvet Cake .jfif',
  img2: './cakes2/cakes2/butterscotch.jfif',
  img3: './cakes/cakes/Black forest cake recipe.jfif',
  img4: './cakes2/cakes2/Dream cake.jfif',
  quote: `"If we wouldn't serve it at our own family function, we won't sell it to you."`,
  body: `Cake Lover started in Namakkal with one goal — bake cakes the way they should be. Real butter, fresh cream, and no shortcuts. Every cake is made on the day of your order. No frozen bases, no readymade fillings. Just honest baking, every single day.`
};

const DEFAULT_REELS = [
  { img: "./cakes/cakes/birthday cake.jfif", title: "Celebration Cakes", desc: "Crafted for magical moments 🎉", views: "9.7k", shares: "41", link: "https://www.instagram.com/cakes_lover_namakkal_official/" },
  { img: "./cakes/cakes/Sprinkle Birthday Cake _ Hungry Happenings.jfif", title: "Sprinkle Birthday", desc: "Colorful & joyful ✨", views: "3.9k", shares: "13", link: "https://www.instagram.com/cakes_lover_namakkal_official/" },
  { img: "./cakes/cakes/Dark Chocolate .jfif", title: "Dark Chocolate", desc: "Pure cocoa indulgence 🍫", views: "4.5k", shares: "26", link: "https://www.instagram.com/cakes_lover_namakkal_official/" },
  { img: "./cakes/cakes/Dole Whip Cake.jfif", title: "Tropical Pineapple", desc: "Fresh whipped delight 🍍", views: "2.5k", shares: "12", link: "https://www.instagram.com/cakes_lover_namakkal_official/" },
  { img: "./cakes/cakes/caramel chocolate.jfif", title: "Caramel Drizzle", desc: "Golden & buttery 🍯", views: "5.1k", shares: "32", link: "https://www.instagram.com/cakes_lover_namakkal_official/" },
  { img: "./cakes2/cakes2/Dream cake.jfif", title: "Dream Cake", desc: "Pastel perfection 🌸", views: "7.2k", shares: "48", link: "https://www.instagram.com/cakes_lover_namakkal_official/" },
  { img: "./cakes2/cakes2/Red Velvet White Chocolate.jfif", title: "Red Velvet White Choco", desc: "Velvet meets white gold ❤️", views: "6.8k", shares: "39", link: "https://www.instagram.com/cakes_lover_namakkal_official/" },
  { img: "./cakes2/cakes2/cake3.jfif", title: "Luxury Celebration", desc: "Gold-touched grandeur ✨", views: "8.1k", shares: "55", link: "https://www.instagram.com/cakes_lover_namakkal_official/" }
];

let productsList = [];
let categoriesList = [];
let heroSlidesList = [];
let marqueeList = [];
let brandStoryData = {};
let reelsList = [];

const bc = window.BroadcastChannel ? new BroadcastChannel('cakelover_updates') : null;

document.addEventListener('DOMContentLoaded', async () => {
  checkAuth();

  // Show a brief loading state
  const adminContent = document.getElementById('admin-content');
  if (adminContent) adminContent.style.opacity = '0.5';

  // Try to load from Supabase first
  let loadedFromCloud = false;
  if (window.SupabaseDB) {
    try {
      const cloudData = await SupabaseDB.loadConfig();
      if (cloudData && (cloudData.products || cloudData.categories)) {
        // Merge cloud data into window.CAKELOVER_DATA and localStorage
        window.CAKELOVER_DATA = cloudData;
        localStorage.setItem('cakelover_products', JSON.stringify(cloudData.products || []));
        localStorage.setItem('cakelover_categories', JSON.stringify(cloudData.categories || []));
        localStorage.setItem('cakelover_hero_slides', JSON.stringify(cloudData.heroSlides || []));
        localStorage.setItem('cakelover_marquee_items', JSON.stringify(cloudData.marqueeItems || []));
        localStorage.setItem('cakelover_brand_story', JSON.stringify(cloudData.brandStory || {}));
        localStorage.setItem('cakelover_reels', JSON.stringify(cloudData.reels || []));
        if (cloudData.offerBanner) localStorage.setItem('cakelover_offer_banner', JSON.stringify(cloudData.offerBanner));
        loadedFromCloud = true;
        console.log('[Admin] Data loaded from Supabase.');
      }
    } catch (e) {
      console.warn('[Admin] Supabase load failed, using local data:', e);
    }
  }

  if (adminContent) adminContent.style.opacity = '1';

  loadCategories();
  loadProducts();
  loadHeroSlides();
  loadMarqueeItems();
  loadBrandStory();
  loadReels();
  loadOfferBanner();
});

// ===== TOAST NOTIFICATION =====
function showToast(msg, type) {
  let toast = document.getElementById('admin-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'admin-toast';
    toast.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:99999;padding:14px 22px;border-radius:12px;font-size:0.9rem;font-weight:600;box-shadow:0 6px 30px rgba(0,0,0,0.18);display:flex;align-items:center;gap:10px;transition:all 0.3s ease;transform:translateY(20px);opacity:0;pointer-events:none;min-width:200px;max-width:360px;';
    document.body.appendChild(toast);
  }
  const isError = type === 'error';
  toast.style.background = isError ? '#FF4757' : 'linear-gradient(135deg,#1A1A2E,#16213E)';
  toast.style.color = '#fff';
  toast.style.border = isError ? '1px solid rgba(255,100,100,0.3)' : '1px solid rgba(255,255,255,0.15)';
  toast.innerHTML = `<i class="fa-solid ${isError ? 'fa-circle-xmark' : 'fa-circle-check'}" style="color:${isError ? '#FFD1D1' : '#4ECCA3'};font-size:1.1rem;"></i> ${msg}`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, 3500);
}

// ===== TAB SWITCHING =====
function switchAdminSection(secId) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.admin-tab-panel').forEach(p => p.classList.remove('active'));

  const btn = document.getElementById(`tab-btn-${secId}`);
  const panel = document.getElementById(`panel-${secId}`);
  if (btn) btn.classList.add('active');
  if (panel) panel.classList.add('active');
}

// ===== AUTHENTICATION =====
function checkAuth() {
  const isAuth = localStorage.getItem(AUTH_KEY) === 'true';
  const overlay = document.getElementById('login-overlay');
  const content = document.getElementById('admin-content');

  if (isAuth) {
    if (overlay) overlay.style.display = 'none';
    if (content) content.style.display = 'block';
  } else {
    if (overlay) overlay.style.display = 'flex';
    if (content) content.style.display = 'none';
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const userInput = document.getElementById('admin-user');
  const passInput = document.getElementById('admin-pass');
  const errorBox = document.getElementById('login-error');

  const rawUser = userInput ? userInput.value.trim() : '';
  const password = passInput ? passInput.value.trim() : '';

  const email = rawUser.includes('@') ? rawUser : `${rawUser}@cakelover.com`;

  if (errorBox) {
    errorBox.style.display = 'none';
    errorBox.textContent = '';
  }

  let authenticated = false;

  // 1. Direct local credential check (Instant login)
  if ((rawUser === DEFAULT_USER || rawUser === 'cakelover_admin' || email === `${DEFAULT_USER}@cakelover.com`) &&
      (password === DEFAULT_PASS || password === (localStorage.getItem('cakelover_custom_pass') || DEFAULT_PASS))) {
    authenticated = true;
  }

  // 2. Try Supabase Auth Sign In if available
  if (!authenticated && window.SupabaseAuth) {
    try {
      const { data, error } = await window.SupabaseAuth.signInWithPassword(email, password);
      if (!error && data && (data.user || data.access_token)) {
        authenticated = true;
      }
    } catch(err) {}
  }

  if (authenticated) {
    localStorage.setItem(AUTH_KEY, 'true');
    if (errorBox) errorBox.style.display = 'none';
    checkAuth();
    showToast('Logged in successfully!');
  } else {
    if (errorBox) {
      errorBox.textContent = 'Invalid Username/Email or Password. Please try again.';
      errorBox.style.display = 'block';
    }
    if (passInput) passInput.select();
  }
}

function handleLogout() {
  localStorage.removeItem(AUTH_KEY);
  checkAuth();
  showToast('Logged out');
}

// ===== SECTION 1: CATEGORIES =====
function loadCategories() {
  const stored = localStorage.getItem(STORAGE_CAT_KEY);
  if (stored) {
    try { categoriesList = JSON.parse(stored); } catch(e) { categoriesList = [...DEFAULT_CATEGORIES]; }
  } else if (window.CAKELOVER_DATA && Array.isArray(window.CAKELOVER_DATA.categories) && window.CAKELOVER_DATA.categories.length > 0) {
    categoriesList = window.CAKELOVER_DATA.categories;
  } else {
    categoriesList = [...DEFAULT_CATEGORIES];
  }
  renderCategoryDropdowns();
}

function saveCategoriesToStorage(notify = true) {
  localStorage.setItem(STORAGE_CAT_KEY, JSON.stringify(categoriesList));
  if (bc) bc.postMessage('categories_updated');
  renderCategoryDropdowns();
  updateStats();
  syncLiveDataToServer(notify ? 'Category saved & live website updated!' : null);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
  });
}

function getCategoryName(catId) {
  const found = categoriesList.find(c => c.id === catId);
  return found ? found.name : (catId ? catId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Uncategorized');
}

function renderCategoryDropdowns() {
  const filterSelect = document.getElementById('admin-category-filter');
  const cakeCatSelect = document.getElementById('cake-category');

  const currentFilterVal = filterSelect ? filterSelect.value : 'all';
  const currentFormVal = cakeCatSelect ? cakeCatSelect.value : (categoriesList[0] ? categoriesList[0].id : '');

  if (filterSelect) {
    filterSelect.innerHTML = `<option value="all">All Cakes (${productsList.length})</option>`;
    categoriesList.forEach(cat => {
      const count = productsList.filter(p => p.category === cat.id).length;
      filterSelect.innerHTML += `<option value="${cat.id}">${escapeHtml(cat.name)} (${count})</option>`;
    });
    if (categoriesList.some(c => c.id === currentFilterVal)) filterSelect.value = currentFilterVal;
  }

  if (cakeCatSelect) {
    cakeCatSelect.innerHTML = '';
    categoriesList.forEach(cat => {
      cakeCatSelect.innerHTML += `<option value="${cat.id}">${escapeHtml(cat.name)}</option>`;
    });
    if (currentFormVal && categoriesList.some(c => c.id === currentFormVal)) cakeCatSelect.value = currentFormVal;
  }
}

function openCategoryModal() {
  renderCategoryTable();
  document.getElementById('category-modal')?.classList.add('open');
}

function closeCategoryModal() {
  document.getElementById('category-modal')?.classList.remove('open');
}

function renderCategoryTable() {
  const tbody = document.getElementById('category-table-rows');
  if (!tbody) return;

  tbody.innerHTML = '';
  if (categoriesList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:20px; color:#888;">No categories found.</td></tr>`;
    return;
  }

  categoriesList.forEach(cat => {
    const count = productsList.filter(p => p.category === cat.id).length;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${escapeHtml(cat.name)}</strong><small style="display:block; color:#888;">Key: ${escapeHtml(cat.id)}</small></td>
      <td style="text-align:center;"><span class="offer-tag-badge" style="background:#EBF3FF; color:var(--logo-blue);">${count} cakes</span></td>
      <td style="text-align:center;"><button type="button" class="btn-table-action delete" onclick="deleteCategory('${cat.id}')"><i class="fa-solid fa-trash-can"></i></button></td>
    `;
    tbody.appendChild(tr);
  });
}

function handleAddNewCategory(e) {
  e.preventDefault();
  const input = document.getElementById('new-category-name');
  const name = input.value.trim();
  if (!name) return;

  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (categoriesList.some(c => c.id === id || c.name.toLowerCase() === name.toLowerCase())) {
    alert('A category with this name already exists!');
    return;
  }

  categoriesList.push({ id, name });
  saveCategoriesToStorage(true);
  input.value = '';
  renderCategoryTable();
  renderAdminTable(productsList);
}

function deleteCategory(catId) {
  const cat = categoriesList.find(c => c.id === catId);
  if (!cat) return;
  if (categoriesList.length <= 1) { alert('You must have at least one category!'); return; }

  const count = productsList.filter(p => p.category === catId).length;
  let msg = `Are you sure you want to delete "${cat.name}"?`;
  if (count > 0) msg += `\n\nWarning: ${count} cake(s) in this category will be reassigned to remaining first category.`;

  if (confirm(msg)) {
    categoriesList = categoriesList.filter(c => c.id !== catId);
    const fallbackId = categoriesList[0].id;
    if (count > 0) {
      productsList = productsList.map(p => p.category === catId ? { ...p, category: fallbackId } : p);
      saveProductsToStorage(false);
    }
    saveCategoriesToStorage(true);
    renderCategoryTable();
    renderAdminTable(productsList);
  }
}

// ===== SECTION 1: PRODUCTS =====
function loadProducts() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try { productsList = JSON.parse(stored); } catch(e) { productsList = [...DEFAULT_PRODUCTS]; }
  } else if (window.CAKELOVER_DATA && Array.isArray(window.CAKELOVER_DATA.products) && window.CAKELOVER_DATA.products.length > 0) {
    productsList = window.CAKELOVER_DATA.products;
  } else {
    productsList = [...DEFAULT_PRODUCTS];
  }
  renderCategoryDropdowns();
  renderAdminTable(productsList);
  updateStats();
}

function saveProductsToStorage(notify = true) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productsList));
  if (bc) bc.postMessage('products_updated');
  renderCategoryDropdowns();
  syncLiveDataToServer(notify ? 'Cake menu saved & live website updated!' : null);
}

function resetToDefaults() {
  if (confirm('Reset all cakes back to original 50 items?')) {
    productsList = [...DEFAULT_PRODUCTS];
    categoriesList = [...DEFAULT_CATEGORIES];
    saveCategoriesToStorage(false);
    saveProductsToStorage(true);
    renderAdminTable(productsList);
    updateStats();
  }
}

async function updateStats() {
  const statTotal = document.getElementById('stat-total');
  const statCategories = document.getElementById('stat-categories');
  const statActive = document.getElementById('stat-active');
  const statAvgPrice = document.getElementById('stat-avg-price');

  let realCount = productsList.length;

  // Fetch current authenticated user and database count from Supabase
  if (window.SupabaseStorage) {
    const sdk = window.SupabaseStorage.getSDK();
    if (sdk) {
      try {
        const { data: { user } } = await sdk.auth.getUser();
        if (user?.id) {
          const { count, error } = await sdk
            .from('cakes')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', user.id);

          if (!error && count !== null && count > 0) {
            realCount = count;
          }
        }
      } catch (e) {
        console.warn('[Supabase] Count fetch info:', e);
      }
    }
  }

  if (statTotal) statTotal.textContent = realCount;
  if (statCategories) statCategories.textContent = categoriesList.length;
  if (statActive) statActive.textContent = productsList.filter(p => p.active !== false).length;
  if (productsList.length > 0 && statAvgPrice) {
    const avg = Math.round(productsList.reduce((acc, p) => acc + (Number(p.basePrice) || 0), 0) / productsList.length);
    statAvgPrice.textContent = `₹${avg}`;
  }
}

function renderAdminTable(items) {
  const tbody = document.getElementById('admin-product-rows');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (items.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:40px; color:#888;">No cakes found.</td></tr>`;
    return;
  }

  items.forEach(p => {
    const tr = document.createElement('tr');
    const isActive = p.active !== false;
    tr.innerHTML = `
      <td><img src="${p.img || './cakes/cakes/caramel chocolate.jfif'}" alt="${escapeHtml(p.name)}" class="cake-thumb" onerror="this.src='./cakes/cakes/caramel chocolate.jfif'"></td>
      <td class="cake-name-cell"><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.desc || '')}</small></td>
      <td><span class="cat-badge">${escapeHtml(getCategoryName(p.category))}</span></td>
      <td><span class="offer-tag-badge">${escapeHtml(p.tag || p.offerText || 'Special Offer')}</span></td>
      <td><span class="price-tag">₹${p.basePrice}</span></td>
      <td><span class="original-price-tag">${p.originalPrice ? '₹' + p.originalPrice : '-'}</span></td>
      <td><button class="status-badge ${isActive ? 'active' : 'hidden'}" onclick="toggleStatus(${p.id})"><i class="fa-solid ${isActive ? 'fa-check' : 'fa-eye-slash'}"></i> ${isActive ? 'Active' : 'Hidden'}</button></td>
      <td>
        <div class="action-btn-group">
          <button class="btn-table-action edit" onclick="editCake(${p.id})"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-table-action delete" onclick="deleteCake(${p.id})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function filterAdminProducts() {
  const searchVal = document.getElementById('admin-search').value.toLowerCase().trim();
  const categoryVal = document.getElementById('admin-category-filter').value;
  const filtered = productsList.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchVal) || (p.desc && p.desc.toLowerCase().includes(searchVal));
    const matchesCategory = categoryVal === 'all' || p.category === categoryVal;
    return matchesSearch && matchesCategory;
  });
  renderAdminTable(filtered);
}

function openCakeModal(cakeId = null) {
  const modal = document.getElementById('cake-modal');
  const title = document.getElementById('modal-title');
  const form = document.getElementById('cake-form');
  form.reset();
  document.getElementById('edit-cake-id').value = '';
  document.getElementById('img-preview').src = './cakes/cakes/caramel chocolate.jfif';

  if (cakeId) {
    const item = productsList.find(p => p.id === cakeId);
    if (item) {
      title.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit: ${escapeHtml(item.name)}`;
      document.getElementById('edit-cake-id').value = item.id;
      document.getElementById('cake-name').value = item.name;
      document.getElementById('cake-category').value = item.category || (categoriesList[0] ? categoriesList[0].id : '');
      document.getElementById('cake-tag').value = item.tag || item.offerText || '';
      document.getElementById('cake-price').value = item.basePrice;
      document.getElementById('cake-original-price').value = item.originalPrice || '';
      document.getElementById('cake-rating').value = item.rating || 4.8;
      document.getElementById('cake-active').value = String(item.active !== false);
      document.getElementById('cake-desc').value = item.desc || '';
      document.getElementById('cake-img-url').value = item.img || '';
      if (item.img) document.getElementById('img-preview').src = item.img;
    }
  } else {
    title.innerHTML = `<i class="fa-solid fa-plus-circle"></i> Add New Cake`;
  }
  modal.classList.add('open');
}

function closeCakeModal() { document.getElementById('cake-modal').classList.remove('open'); }

function saveCake(e) {
  e.preventDefault();
  const idInput = document.getElementById('edit-cake-id').value;
  const name = document.getElementById('cake-name').value.trim();
  const category = document.getElementById('cake-category').value;
  const tag = document.getElementById('cake-tag').value.trim();
  const basePrice = Number(document.getElementById('cake-price').value);
  const originalPrice = document.getElementById('cake-original-price').value ? Number(document.getElementById('cake-original-price').value) : (basePrice + 400);
  const rating = Number(document.getElementById('cake-rating').value) || 4.8;
  const active = document.getElementById('cake-active').value === 'true';
  const desc = document.getElementById('cake-desc').value.trim();
  const imgUrlInput = document.getElementById('cake-img-url');
  const imgUrl = imgUrlInput.value.trim() || document.getElementById('img-preview').src;
  const filePath = imgUrlInput.dataset.filePath || null;

  if (!name || !basePrice) { alert('Please fill in Cake Name and Price'); return; }

  if (idInput) {
    const index = productsList.findIndex(p => p.id === Number(idInput));
    if (index !== -1) {
      productsList[index] = { ...productsList[index], name, category, tag, basePrice, originalPrice, rating, active, desc, img: imgUrl, filePath: filePath || productsList[index].filePath };
    }
  } else {
    const newId = productsList.length > 0 ? Math.max(...productsList.map(p => p.id)) + 1 : 1;
    productsList.unshift({ id: newId, name, category, tag: tag || '1 kg + ½ kg FREE', basePrice, originalPrice, offerText: tag || 'Buy 1kg get ½kg free', rating, active, desc, img: imgUrl, filePath });
  }

  saveProductsToStorage(true);
  renderAdminTable(productsList);
  updateStats();
  closeCakeModal();
}

function toggleStatus(id) {
  const index = productsList.findIndex(p => p.id === id);
  if (index !== -1) {
    productsList[index].active = productsList[index].active === false ? true : false;
    saveProductsToStorage(true);
    filterAdminProducts();
    updateStats();
  }
}

async function deleteCake(id) {
  const item = productsList.find(p => p.id === id);
  if (item && confirm(`Delete "${item.name}"?`)) {
    if (item.filePath && window.SupabaseStorage) {
      await SupabaseStorage.deleteFile(item.filePath);
    }
    productsList = productsList.filter(p => p.id !== id);
    saveProductsToStorage(true);
    renderAdminTable(productsList);
    updateStats();
  }
}

async function handleImageFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const cakeId = document.getElementById('edit-cake-id').value || 'new';

  if (window.SupabaseStorage) {
    showToast('Uploading cake photo to Supabase Storage...');
    const { filePath, signedUrl, error } = await SupabaseStorage.uploadFile(file, 'cakes', cakeId);
    if (!error && signedUrl) {
      document.getElementById('img-preview').src = signedUrl;
      const urlInput = document.getElementById('cake-img-url');
      urlInput.value = signedUrl;
      urlInput.dataset.filePath = filePath;
      showToast('Cake photo uploaded to Supabase Storage!');
      return;
    }
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    document.getElementById('img-preview').src = evt.target.result;
    document.getElementById('cake-img-url').value = evt.target.result;
  };
  reader.readAsDataURL(file);
}

function updateImagePreviewFromUrl() {
  const url = document.getElementById('cake-img-url').value.trim();
  if (url) document.getElementById('img-preview').src = url;
}

// ===== SECTION 2: HERO SLIDESHOW MANAGER =====
function loadHeroSlides() {
  const stored = localStorage.getItem(STORAGE_HERO_KEY);
  if (stored) {
    try { heroSlidesList = JSON.parse(stored); } catch(e) { heroSlidesList = [...DEFAULT_HERO_SLIDES]; }
  } else {
    heroSlidesList = [...DEFAULT_HERO_SLIDES];
    saveHeroSlidesToStorage(false);
  }
  renderHeroTable();
}

function saveHeroSlidesToStorage(notify = true) {
  localStorage.setItem(STORAGE_HERO_KEY, JSON.stringify(heroSlidesList));
  if (bc) bc.postMessage('hero_updated');
  renderHeroTable();
  if (notify) showToast('Hero Slides updated live!');
}

function renderHeroTable() {
  const countEl = document.getElementById('count-hero');
  if (countEl) countEl.textContent = heroSlidesList.length;

  const tbody = document.getElementById('admin-hero-rows');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (heroSlidesList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:#888;">No hero slides. Click "Add New Hero Slide".</td></tr>`;
    return;
  }

  heroSlidesList.forEach((slide, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${slide.img}" alt="${escapeHtml(slide.name)}" class="cake-thumb"></td>
      <td><strong>${escapeHtml(slide.name)}</strong></td>
      <td><span class="cat-badge" style="background:#FFF0F2; color:var(--logo-red);">${escapeHtml(slide.rating || '4.9★')}</span></td>
      <td><span style="font-size:0.8rem; color:#555;">${escapeHtml(slide.orders || '33 Google Reviews')}</span></td>
      <td style="text-align:center;">
        <div class="action-btn-group">
          <button class="btn-table-action edit" onclick="editHeroSlide(${idx})"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-table-action delete" onclick="deleteHeroSlide(${idx})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openHeroSlideModal(idx = null) {
  const modal = document.getElementById('hero-slide-modal');
  document.getElementById('hero-slide-form').reset();
  document.getElementById('hero-slide-index').value = '';
  document.getElementById('hero-img-prev').src = './cakes/cakes/caramel chocolate.jfif';

  if (idx !== null) {
    const item = heroSlidesList[idx];
    if (item) {
      document.getElementById('hero-modal-title').innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit Hero Slide #${idx + 1}`;
      document.getElementById('hero-slide-index').value = idx;
      document.getElementById('hero-slide-name-input').value = item.name;
      document.getElementById('hero-slide-rating-input').value = item.rating || '4.9★';
      document.getElementById('hero-slide-orders-input').value = item.orders || '33 Google Reviews';
      document.getElementById('hero-img-url').value = item.img;
      document.getElementById('hero-img-prev').src = item.img;
    }
  } else {
    document.getElementById('hero-modal-title').innerHTML = `<i class="fa-solid fa-plus-circle"></i> Add New Hero Slide`;
  }
  modal.classList.add('open');
}

function closeHeroSlideModal() { document.getElementById('hero-slide-modal').classList.remove('open'); }

async function handleHeroImgFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const slideIdx = document.getElementById('hero-slide-index').value || 'new';

  if (window.SupabaseStorage) {
    showToast('Uploading hero image to Supabase Storage...');
    const { filePath, signedUrl, error } = await SupabaseStorage.uploadFile(file, 'hero_slides', slideIdx);
    if (!error && signedUrl) {
      document.getElementById('hero-img-prev').src = signedUrl;
      const urlInput = document.getElementById('hero-img-url');
      urlInput.value = signedUrl;
      urlInput.dataset.filePath = filePath;
      showToast('Hero image uploaded to Supabase Storage!');
      return;
    }
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    document.getElementById('hero-img-prev').src = evt.target.result;
    document.getElementById('hero-img-url').value = evt.target.result;
  };
  reader.readAsDataURL(file);
}

function editHeroSlide(idx) { openHeroSlideModal(idx); }

function saveHeroSlide(e) {
  e.preventDefault();
  const idxVal = document.getElementById('hero-slide-index').value;
  const name = document.getElementById('hero-slide-name-input').value.trim();
  const rating = document.getElementById('hero-slide-rating-input').value.trim() || '4.9★';
  const orders = document.getElementById('hero-slide-orders-input').value.trim() || '33 Google Reviews';
  const imgUrlInput = document.getElementById('hero-img-url');
  const img = imgUrlInput.value.trim() || document.getElementById('hero-img-prev').src;
  const filePath = imgUrlInput.dataset.filePath || null;

  if (!name) { alert('Please enter slide name'); return; }

  const slideObj = { name, img, rating, orders, filePath };

  if (idxVal !== '') {
    heroSlidesList[Number(idxVal)] = { ...heroSlidesList[Number(idxVal)], ...slideObj };
  } else {
    heroSlidesList.push(slideObj);
  }

  saveHeroSlidesToStorage(true);
  closeHeroSlideModal();
}

async function deleteHeroSlide(idx) {
  const item = heroSlidesList[idx];
  if (confirm(`Delete hero slide #${idx + 1}?`)) {
    if (item && item.filePath && window.SupabaseStorage) {
      await SupabaseStorage.deleteFile(item.filePath);
    }
    heroSlidesList.splice(idx, 1);
    saveHeroSlidesToStorage(true);
  }
}

// ===== SECTION 3: SCROLLING MARQUEE MANAGER =====
function loadMarqueeItems() {
  const stored = localStorage.getItem(STORAGE_MARQUEE_KEY);
  if (stored) {
    try { marqueeList = JSON.parse(stored); } catch(e) { marqueeList = [...DEFAULT_MARQUEE_ITEMS]; }
  } else {
    marqueeList = [...DEFAULT_MARQUEE_ITEMS];
    saveMarqueeItemsToStorage(false);
  }
  renderMarqueeTable();
}

function saveMarqueeItemsToStorage(notify = true) {
  localStorage.setItem(STORAGE_MARQUEE_KEY, JSON.stringify(marqueeList));
  if (bc) bc.postMessage('marquee_updated');
  renderMarqueeTable();
  if (notify) showToast('Scrolling images updated live!');
}

function renderMarqueeTable() {
  const countEl = document.getElementById('count-marquee');
  if (countEl) countEl.textContent = marqueeList.length;

  const tbody = document.getElementById('admin-marquee-rows');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (marqueeList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:30px; color:#888;">No marquee items. Click "Add Scrolling Image".</td></tr>`;
    return;
  }

  marqueeList.forEach((item, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${item.img}" alt="${escapeHtml(item.label)}" class="cake-thumb"></td>
      <td><strong>${escapeHtml(item.label)}</strong></td>
      <td style="text-align:center;">
        <div class="action-btn-group">
          <button class="btn-table-action edit" onclick="editMarqueeItem(${idx})"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-table-action delete" onclick="deleteMarqueeItem(${idx})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openMarqueeModal(idx = null) {
  const modal = document.getElementById('marquee-modal');
  document.getElementById('marquee-form').reset();
  document.getElementById('marquee-item-index').value = '';
  document.getElementById('marquee-img-prev').src = './cakes/cakes/Red velvet Cake .jfif';

  if (idx !== null) {
    const item = marqueeList[idx];
    if (item) {
      document.getElementById('marquee-modal-title').innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit Scrolling Image #${idx + 1}`;
      document.getElementById('marquee-item-index').value = idx;
      document.getElementById('marquee-label-input').value = item.label;
      document.getElementById('marquee-img-url').value = item.img;
      document.getElementById('marquee-img-prev').src = item.img;
    }
  } else {
    document.getElementById('marquee-modal-title').innerHTML = `<i class="fa-solid fa-plus-circle"></i> Add Scrolling Image`;
  }
  modal.classList.add('open');
}

function closeMarqueeModal() { document.getElementById('marquee-modal').classList.remove('open'); }

async function handleMarqueeImgFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const marqueeIdx = document.getElementById('marquee-item-index').value || 'new';

  if (window.SupabaseStorage) {
    showToast('Uploading marquee image to Supabase Storage...');
    const { filePath, signedUrl, error } = await SupabaseStorage.uploadFile(file, 'marquee', marqueeIdx);
    if (!error && signedUrl) {
      document.getElementById('marquee-img-prev').src = signedUrl;
      const urlInput = document.getElementById('marquee-label-input'); // target container
      const imgUrlInput = document.getElementById('marquee-img-url');
      imgUrlInput.value = signedUrl;
      imgUrlInput.dataset.filePath = filePath;
      showToast('Marquee image uploaded to Supabase Storage!');
      return;
    }
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    document.getElementById('marquee-img-prev').src = evt.target.result;
    document.getElementById('marquee-img-url').value = evt.target.result;
  };
  reader.readAsDataURL(file);
}

function editMarqueeItem(idx) { openMarqueeModal(idx); }

function saveMarqueeItem(e) {
  e.preventDefault();
  const idxVal = document.getElementById('marquee-item-index').value;
  const label = document.getElementById('marquee-label-input').value.trim();
  const imgInput = document.getElementById('marquee-img-url');
  const img = imgInput.value.trim() || document.getElementById('marquee-img-prev').src;
  const filePath = imgInput.dataset.filePath || null;

  if (!label) { alert('Please enter label name'); return; }

  const itemObj = { label, img, filePath };
  if (idxVal !== '') marqueeList[Number(idxVal)] = { ...marqueeList[Number(idxVal)], ...itemObj };
  else marqueeList.push(itemObj);

  saveMarqueeItemsToStorage(true);
  closeMarqueeModal();
}

async function deleteMarqueeItem(idx) {
  const item = marqueeList[idx];
  if (confirm(`Delete marquee item #${idx + 1}?`)) {
    if (item && item.filePath && window.SupabaseStorage) {
      await SupabaseStorage.deleteFile(item.filePath);
    }
    marqueeList.splice(idx, 1);
    saveMarqueeItemsToStorage(true);
  }
}

// ===== SECTION 4: BRAND STORY MANAGER =====
function loadBrandStory() {
  const stored = localStorage.getItem(STORAGE_STORY_KEY);
  if (stored) {
    try { brandStoryData = JSON.parse(stored); } catch(e) { brandStoryData = { ...DEFAULT_BRAND_STORY }; }
  } else {
    brandStoryData = { ...DEFAULT_BRAND_STORY };
    localStorage.setItem(STORAGE_STORY_KEY, JSON.stringify(brandStoryData));
  }

  document.getElementById('story-img1-url').value = brandStoryData.img1 || DEFAULT_BRAND_STORY.img1;
  document.getElementById('story-img1-prev').src = brandStoryData.img1 || DEFAULT_BRAND_STORY.img1;

  document.getElementById('story-img2-url').value = brandStoryData.img2 || DEFAULT_BRAND_STORY.img2;
  document.getElementById('story-img2-prev').src = brandStoryData.img2 || DEFAULT_BRAND_STORY.img2;

  document.getElementById('story-img3-url').value = brandStoryData.img3 || DEFAULT_BRAND_STORY.img3;
  document.getElementById('story-img3-prev').src = brandStoryData.img3 || DEFAULT_BRAND_STORY.img3;

  document.getElementById('story-img4-url').value = brandStoryData.img4 || DEFAULT_BRAND_STORY.img4;
  document.getElementById('story-img4-prev').src = brandStoryData.img4 || DEFAULT_BRAND_STORY.img4;

  document.getElementById('story-quote-input').value = brandStoryData.quote || DEFAULT_BRAND_STORY.quote;
  document.getElementById('story-body-input').value = brandStoryData.body || DEFAULT_BRAND_STORY.body;
}

async function handleStoryImgUpload(e, num) {
  const file = e.target.files[0];
  if (!file) return;

  if (window.SupabaseStorage) {
    showToast(`Uploading story photo #${num} to Supabase Storage...`);
    const { filePath, signedUrl, error } = await SupabaseStorage.uploadFile(file, 'brand_story', `slot_${num}`);
    if (!error && signedUrl) {
      document.getElementById(`story-img${num}-prev`).src = signedUrl;
      const urlInput = document.getElementById(`story-img${num}-url`);
      urlInput.value = signedUrl;
      urlInput.dataset.filePath = filePath;
      showToast(`Story photo #${num} uploaded to Supabase Storage!`);
      return;
    }
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    document.getElementById(`story-img${num}-prev`).src = evt.target.result;
    document.getElementById(`story-img${num}-url`).value = evt.target.result;
  };
  reader.readAsDataURL(file);
}

function saveBrandStory(e) {
  if (e) e.preventDefault();
  brandStoryData = {
    img1: document.getElementById('story-img1-url').value.trim() || document.getElementById('story-img1-prev').src,
    img2: document.getElementById('story-img2-url').value.trim() || document.getElementById('story-img2-prev').src,
    img3: document.getElementById('story-img3-url').value.trim() || document.getElementById('story-img3-prev').src,
    img4: document.getElementById('story-img4-url').value.trim() || document.getElementById('story-img4-prev').src,
    quote: document.getElementById('story-quote-input').value.trim(),
    body: document.getElementById('story-body-input').value.trim()
  };

  localStorage.setItem(STORAGE_STORY_KEY, JSON.stringify(brandStoryData));
  if (bc) bc.postMessage('story_updated');
  showToast('Brand Story photos & text saved live!');
}

// ===== SECTION 5: INSTAGRAM REELS MANAGER =====
function loadReels() {
  const stored = localStorage.getItem(STORAGE_REELS_KEY);
  if (stored) {
    try { reelsList = JSON.parse(stored); } catch(e) { reelsList = [...DEFAULT_REELS]; }
  } else {
    reelsList = [...DEFAULT_REELS];
    saveReelsToStorage(false);
  }
  renderReelsTable();
}

function saveReelsToStorage(notify = true) {
  localStorage.setItem(STORAGE_REELS_KEY, JSON.stringify(reelsList));
  if (bc) bc.postMessage('reels_updated');
  renderReelsTable();
  if (notify) showToast('Instagram Reels updated live!');
}

function renderReelsTable() {
  const countEl = document.getElementById('count-reels');
  if (countEl) countEl.textContent = reelsList.length;

  const tbody = document.getElementById('admin-reels-rows');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (reelsList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:#888;">No reels. Click "Add New Reel / Video".</td></tr>`;
    return;
  }

  reelsList.forEach((reel, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${reel.img}" alt="${escapeHtml(reel.title)}" class="cake-thumb"></td>
      <td><strong>${escapeHtml(reel.title)}</strong><small style="display:block; color:#888;">${escapeHtml(reel.desc || '')}</small></td>
      <td><span class="cat-badge" style="background:#EBF3FF; color:var(--logo-blue);"><i class="fa-solid fa-eye"></i> ${escapeHtml(reel.views || '1.0k')}</span></td>
      <td><span class="cat-badge" style="background:#FFF0F2; color:var(--logo-red);"><i class="fa-solid fa-share"></i> ${escapeHtml(reel.shares || '10')}</span></td>
      <td style="text-align:center;">
        <div class="action-btn-group">
          <button class="btn-table-action edit" onclick="editReel(${idx})"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-table-action delete" onclick="deleteReel(${idx})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openReelModal(idx = null) {
  const modal = document.getElementById('reel-modal');
  document.getElementById('reel-form').reset();
  document.getElementById('reel-index').value = '';
  document.getElementById('reel-img-prev').src = './cakes/cakes/birthday cake.jfif';

  if (idx !== null) {
    const item = reelsList[idx];
    if (item) {
      document.getElementById('reel-modal-title').innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit Reel #${idx + 1}`;
      document.getElementById('reel-index').value = idx;
      document.getElementById('reel-title-input').value = item.title;
      document.getElementById('reel-sub-input').value = item.desc || '';
      document.getElementById('reel-views-input').value = item.views || '9.7k';
      document.getElementById('reel-shares-input').value = item.shares || '41';
      document.getElementById('reel-link-input').value = item.link || 'https://www.instagram.com/cakes_lover_namakkal_official/';
      document.getElementById('reel-img-url').value = item.img;
      document.getElementById('reel-img-prev').src = item.img;
    }
  } else {
    document.getElementById('reel-modal-title').innerHTML = `<i class="fa-solid fa-plus-circle"></i> Add New Reel / Video`;
  }
  modal.classList.add('open');
}

function closeReelModal() { document.getElementById('reel-modal').classList.remove('open'); }

async function handleReelImgFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reelIdx = document.getElementById('reel-index').value || 'new';

  if (window.SupabaseStorage) {
    showToast('Uploading reel image to Supabase Storage...');
    const { filePath, signedUrl, error } = await SupabaseStorage.uploadFile(file, 'reels', reelIdx);
    if (!error && signedUrl) {
      document.getElementById('reel-img-prev').src = signedUrl;
      const urlInput = document.getElementById('reel-img-url');
      urlInput.value = signedUrl;
      urlInput.dataset.filePath = filePath;
      showToast('Reel image uploaded to Supabase Storage!');
      return;
    }
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    document.getElementById('reel-img-prev').src = evt.target.result;
    document.getElementById('reel-img-url').value = evt.target.result;
  };
  reader.readAsDataURL(file);
}

function editReel(idx) { openReelModal(idx); }

function saveReel(e) {
  e.preventDefault();
  const idxVal = document.getElementById('reel-index').value;
  const title = document.getElementById('reel-title-input').value.trim();
  const desc = document.getElementById('reel-sub-input').value.trim();
  const views = document.getElementById('reel-views-input').value.trim() || '1.0k';
  const shares = document.getElementById('reel-shares-input').value.trim() || '10';
  const link = document.getElementById('reel-link-input').value.trim() || 'https://www.instagram.com/cakes_lover_namakkal_official/';
  const imgInput = document.getElementById('reel-img-url');
  const img = imgInput.value.trim() || document.getElementById('reel-img-prev').src;
  const filePath = imgInput.dataset.filePath || null;

  if (!title) { alert('Please enter reel title'); return; }

  const reelObj = { title, desc, views, shares, link, img, filePath };
  if (idxVal !== '') reelsList[Number(idxVal)] = { ...reelsList[Number(idxVal)], ...reelObj };
  else reelsList.push(reelObj);

  saveReelsToStorage(true);
  closeReelModal();
}

async function deleteReel(idx) {
  const item = reelsList[idx];
  if (confirm(`Delete reel #${idx + 1}?`)) {
    if (item && item.filePath && window.SupabaseStorage) {
      await SupabaseStorage.deleteFile(item.filePath);
    }
    reelsList.splice(idx, 1);
    saveReelsToStorage(true);
  }
// ===== SECTION 6: COUNTDOWN OFFER BANNER MANAGER =====
function loadOfferBanner() {
  const stored = localStorage.getItem(STORAGE_OFFER_KEY);
  if (stored) {
    try { offerBannerData = JSON.parse(stored); } catch(e) { offerBannerData = { ...DEFAULT_OFFER_BANNER }; }
  } else if (window.CAKELOVER_DATA && window.CAKELOVER_DATA.offerBanner) {
    offerBannerData = window.CAKELOVER_DATA.offerBanner;
  } else {
    offerBannerData = { ...DEFAULT_OFFER_BANNER };
  }

  const titleEl = document.getElementById('offer-title-input');
  const hrsEl = document.getElementById('offer-hrs-input');
  const minsEl = document.getElementById('offer-mins-input');
  const secsEl = document.getElementById('offer-secs-input');
  const ctaEl = document.getElementById('offer-cta-input');
  const linkEl = document.getElementById('offer-link-input');

  if (titleEl) titleEl.value = offerBannerData.title || DEFAULT_OFFER_BANNER.title;
  if (hrsEl) hrsEl.value = offerBannerData.hrs !== undefined ? offerBannerData.hrs : 3;
  if (minsEl) minsEl.value = offerBannerData.mins !== undefined ? offerBannerData.mins : 44;
  if (secsEl) secsEl.value = offerBannerData.secs !== undefined ? offerBannerData.secs : 9;
  if (ctaEl) ctaEl.value = offerBannerData.cta || DEFAULT_OFFER_BANNER.cta;
  if (linkEl) linkEl.value = offerBannerData.link || DEFAULT_OFFER_BANNER.link;
}

function saveOfferBanner(e) {
  if (e) e.preventDefault();
  offerBannerData = {
    title: document.getElementById('offer-title-input').value.trim() || DEFAULT_OFFER_BANNER.title,
    hrs: Number(document.getElementById('offer-hrs-input').value) || 0,
    mins: Number(document.getElementById('offer-mins-input').value) || 0,
    secs: Number(document.getElementById('offer-secs-input').value) || 0,
    cta: document.getElementById('offer-cta-input').value.trim() || DEFAULT_OFFER_BANNER.cta,
    link: document.getElementById('offer-link-input').value.trim() || DEFAULT_OFFER_BANNER.link
  };

  localStorage.setItem(STORAGE_OFFER_KEY, JSON.stringify(offerBannerData));
  if (bc) bc.postMessage('offer_updated');
  syncLiveDataToServer('Offer banner updated live!');
}

// ===== EXPORT / IMPORT =====
function exportDataJSON() {
  const payload = {
    products: productsList,
    categories: categoriesList,
    heroSlides: heroSlidesList,
    marqueeItems: marqueeList,
    brandStory: brandStoryData,
    reels: reelsList,
    offerBanner: offerBannerData
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "cakelover_full_backup.json");
  document.body.appendChild(dlAnchorElem);
  dlAnchorElem.click();
  dlAnchorElem.remove();
  showToast('Exported Full JSON backup file');
}

function importDataJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const imported = JSON.parse(evt.target.result);
      if (imported && (imported.products || Array.isArray(imported))) {
        if (Array.isArray(imported)) {
          productsList = imported;
        } else {
          if (imported.products) productsList = imported.products;
          if (imported.categories) categoriesList = imported.categories;
          if (imported.heroSlides) heroSlidesList = imported.heroSlides;
          if (imported.marqueeItems) marqueeList = imported.marqueeItems;
          if (imported.brandStory) brandStoryData = imported.brandStory;
          if (imported.reels) reelsList = imported.reels;
          if (imported.offerBanner) offerBannerData = imported.offerBanner;
        }

        saveProductsToStorage(false);
        saveCategoriesToStorage(false);
        saveHeroSlidesToStorage(false);
        saveMarqueeItemsToStorage(false);
        if (imported.brandStory) localStorage.setItem(STORAGE_STORY_KEY, JSON.stringify(brandStoryData));
        if (imported.offerBanner) localStorage.setItem(STORAGE_OFFER_KEY, JSON.stringify(offerBannerData));
        saveReelsToStorage(true);

        renderAdminTable(productsList);
        updateStats();
        showToast('Full data backup imported successfully!');
      } else {
        alert('Invalid JSON structure.');
      }
    } catch(err) {
      alert('Error parsing JSON file.');
    }
  };
  reader.readAsText(file);
}

// ===== REAL-TIME CENTRAL SYNC (Supabase + localStorage + Server) =====
function syncLiveDataToServer(msg) {
  const fullPayload = {
    categories: categoriesList,
    products: productsList,
    heroSlides: heroSlidesList,
    marqueeItems: marqueeList,
    brandStory: brandStoryData,
    reels: reelsList,
    offerBanner: offerBannerData
  };

  // 1. Update in-memory global
  window.CAKELOVER_DATA = fullPayload;

  // 2. Save to localStorage (instant local cache)
  localStorage.setItem('cakelover_products', JSON.stringify(productsList));
  localStorage.setItem('cakelover_categories', JSON.stringify(categoriesList));
  localStorage.setItem('cakelover_hero_slides', JSON.stringify(heroSlidesList));
  localStorage.setItem('cakelover_marquee_items', JSON.stringify(marqueeList));
  localStorage.setItem('cakelover_brand_story', JSON.stringify(brandStoryData));
  localStorage.setItem('cakelover_reels', JSON.stringify(reelsList));
  localStorage.setItem('cakelover_offer_banner', JSON.stringify(offerBannerData));

  // 3. Save to Supabase (cloud persistence — primary source of truth)
  if (window.SupabaseDB) {
    SupabaseDB.saveConfig(fullPayload).then(result => {
      if (result.success) {
        if (msg) showToast('☁️ ' + msg);
      } else {
        console.warn('[Admin] Supabase save failed, data saved locally only.', result.error);
        if (msg) showToast(msg + ' (local only)');
      }
    });
  } else {
    if (msg) showToast(msg);
  }

  // 4. Legacy: also try to save to server.js if running locally
  fetch('/api/save-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fullPayload)
  }).catch(() => {
    // Silent fail — server may not be running in production
  });
}

// ===== EXPOSE ALL FUNCTIONS TO WINDOW SCOPE =====
window.editCake = function(id) { openCakeModal(id); };
window.openCakeModal = openCakeModal;
window.closeCakeModal = closeCakeModal;
window.saveCake = saveCake;
window.toggleStatus = toggleStatus;
window.deleteCake = deleteCake;
window.filterAdminProducts = filterAdminProducts;
window.handleImageFileUpload = handleImageFileUpload;

window.openCategoryModal = openCategoryModal;
window.closeCategoryModal = closeCategoryModal;
window.handleAddNewCategory = handleAddNewCategory;
window.deleteCategory = deleteCategory;

window.openHeroSlideModal = openHeroSlideModal;
window.editHeroSlide = function(idx) { openHeroSlideModal(idx); };
window.closeHeroSlideModal = closeHeroSlideModal;
window.saveHeroSlide = saveHeroSlide;
window.deleteHeroSlide = deleteHeroSlide;
window.handleHeroImgFileUpload = handleHeroImgFileUpload;

window.openMarqueeModal = openMarqueeModal;
window.editMarqueeItem = function(idx) { openMarqueeModal(idx); };
window.closeMarqueeModal = closeMarqueeModal;
window.saveMarqueeItem = saveMarqueeItem;
window.deleteMarqueeItem = deleteMarqueeItem;
window.handleMarqueeImgFileUpload = handleMarqueeImgFileUpload;

window.saveBrandStory = saveBrandStory;
window.handleStoryImgUpload = handleStoryImgUpload;
window.handleStoryMainImgUpload = function(e) { handleStoryImgUpload(e, 1); };
window.handleStorySideImg1Upload = function(e) { handleStoryImgUpload(e, 2); };
window.handleStorySideImg2Upload = function(e) { handleStoryImgUpload(e, 3); };
window.handleStorySideImg3Upload = function(e) { handleStoryImgUpload(e, 4); };

window.openReelModal = openReelModal;
window.openReelsModal = openReelModal;
window.editReel = function(idx) { openReelModal(idx); };
window.closeReelModal = closeReelModal;
window.closeReelsModal = closeReelModal;
window.saveReel = saveReel;
window.deleteReel = deleteReel;
window.handleReelImgFileUpload = handleReelImgFileUpload;

window.saveOfferBanner = saveOfferBanner;
window.loadOfferBanner = loadOfferBanner;
window.exportDataJSON = exportDataJSON;
window.importDataJSON = importDataJSON;
window.resetToDefaults = resetToDefaults;
window.handleLogin = handleLogin;
window.handleAuthSubmit = handleAuthSubmit;
window.toggleAuthMode = toggleAuthMode;
window.handleLogout = handleLogout;
window.switchAdminSection = switchAdminSection;
window.switchTab = switchAdminSection; // alias for backward compatibility
window.showToast = showToast;
window.updateImagePreviewFromUrl = updateImagePreviewFromUrl;
window.checkAuth = checkAuth;
