/* ==========================================================================
   CAKE LOVER — DIGITAL SHOWCASE CATALOG
   Clean professional showcase with dynamic Admin Panel synchronization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== DEFAULT DATASETS =====
  const DEFAULT_PRODUCTS = [
    { id:1,  name:"Choco Scotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:734,  originalPrice:1099, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/caramel chocolate.jfif", desc:"Delicious blend of rich chocolate and golden butterscotch crunch.", active:true },
    { id:2,  name:"Red Scotch Cake",            category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:882,  originalPrice:1299, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Red velvet Cake .jfif", desc:"Soft red velvet sponge with a crispy butterscotch crunch layer.", active:true },
    { id:3,  name:"Ferro Scotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1150, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/Southern Caramel Cake_ 5-Star Recipe You Must Try - My Favorite Recipes.jfif", desc:"Premium Ferrero-style hazelnut crunch combined with rich caramel.", active:true },
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
    { id:14, name:"Red Velvet Cake",            category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/Red Velvet White Chocolate.jfif", desc:"Soft crimson cocoa sponge layered with rich cream cheese.", active:true },
    { id:15, name:"Black Forest Cake [500 G]",  category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:515,  originalPrice:750,  offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Black forest cake recipe.jfif", desc:"Classic dark chocolate shavings with maraschino cherries in a half kg pack.", active:true },
    { id:16, name:"Choco Vanilla Cake",         category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/choconillla", desc:"Dual-flavored marble swirl of rich cocoa and pure vanilla.", active:true },
    { id:17, name:"Choco Strawberry Cake",      category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/cakestrawberry.jfif", desc:"Decadent dark chocolate ganache paired with fresh strawberry cream.", active:true },
    { id:18, name:"Butterscotch And Blueberry Cake", category:"extreme-combo", tag:"1 kg + ½ kg FREE", basePrice:706, originalPrice:1050, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/Blueberry Cake.jfif", desc:"Fruity blueberry swirls combined with crunchy butterscotch bits.", active:true },
    { id:19, name:"German Black Forest Cake",   category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:721,  originalPrice:1080, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/black-forest-gateau.jfif", desc:"Authentic German-style dark chocolate cake loaded with cherries.", active:true },
    { id:20, name:"German Chocolate Cake",      category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:721,  originalPrice:1080, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Dark Chocolate .jfif", desc:"Rich chocolate cake with coconut-pecan filling and fudge.", active:true },
    { id:21, name:"Chocolate Cake",             category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.7, img:"./cakes2/cakes2/download (5).jfif", desc:"Rich moist cocoa sponge smothered in silky chocolate frosting.", active:true },
    { id:22, name:"Choco Truffle Cake",         category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:706,  originalPrice:1050, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/download (3).jfif", desc:"Pure chocolate fudge layered with silky cream and truffle glaze.", active:true },
    { id:23, name:"Dead By Chocolate Cake",     category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:735,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Dark Chocolate .jfif", desc:"Triple-layer dark chocolate ganache for true cocoa lovers.", active:true },
    { id:24, name:"Choco Forest Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:735,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/black-forest-gateau.jfif", desc:"Extra chocolatey black forest loaded with dark cocoa curls.", active:true },
    { id:25, name:"Choco Excess Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:735,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/download (8).jfif", desc:"Overloaded with melted dark chocolate, fudge & choco chips.", active:true },
    { id:26, name:"Choco KitKat Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:809,  originalPrice:1199, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/download (5).jfif", desc:"Bordered with crispy KitKat bars and topped with choco balls.", active:true },
    { id:27, name:"Choco Walnut Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1150, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/coffee_mocha_cake.jfif", desc:"Rich chocolate sponge packed with roasted crunchy walnuts.", active:true },
    { id:28, name:"Choco Oreo Cake",            category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:809,  originalPrice:1199, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/download (3).jfif", desc:"Crushed Oreo cookie cream layered inside rich chocolate sponge.", active:true },
    { id:29, name:"Milky Truffle Cake",         category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:809,  originalPrice:1199, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/cake3.jfif", desc:"Creamy milk chocolate truffle with white cocoa drippings.", active:true },
    { id:30, name:"Ritch Choco KitKat Cake",    category:"special-edition", tag:"1 kg + ½ kg FREE", basePrice:1469, originalPrice:2199, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/download (5).jfif", desc:"Luxury celebration cake wrapped in KitKat bars with rich truffle core.", active:true },
    { id:31, name:"Black Forest Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Black forest cake recipe.jfif", desc:"Premium black forest layered with imported cherries & dark cacao.", active:true },
    { id:32, name:"Mango Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Mango Chiffon Cake.jfif", desc:"Alphonso mango cream cake with premium fruit glaze.", active:true },
    { id:33, name:"White Forest Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/White Forest Cake.jfif", desc:"Belgian white chocolate curls with luxury cherry reduction.", active:true },
    { id:34, name:"Pineapple Premium Cake",     category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Dole Whip Cake.jfif", desc:"Fresh tropical pineapple compote over rich vanilla sponge.", active:true },
    { id:35, name:"Blueberry Premium Cake",     category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/Blueberry Cake.jfif", desc:"Handpicked wild blueberry compote layered with whipped cream.", active:true },
    { id:36, name:"Blackcurrant Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/download (4).jfif", desc:"Exotic blackcurrant berry glaze over soft vanilla sponge.", active:true },
    { id:37, name:"Red Velvet Premium Cake",    category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:955,  originalPrice:1390, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/Red Velvet White Chocolate.jfif", desc:"Signature crimson cocoa cake with imported cream cheese icing.", active:true },
    { id:38, name:"Choco Truffle Premium Cake", category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/download (8).jfif", desc:"Dense Belgian chocolate truffle cake finished with cocoa dust.", active:true },
    { id:39, name:"Butterscotch Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/butterscotch.jfif", desc:"Golden caramel praline crunch with rich butterscotch mousse.", active:true },
    { id:40, name:"Ferro Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/caramel chocolate.jfif", desc:"Ferrero hazelnut rocher mousse layered with dark chocolate fudge.", active:true },
    { id:41, name:"Lemon Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/Dream cake.jfif", desc:"Zesty lemon curd cream layered into fresh vanilla chiffon sponge.", active:true },
    { id:42, name:"Choco Almond Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/download (5).jfif", desc:"Roasted California almonds embedded in rich chocolate ganache.", active:true },
    { id:43, name:"Milky Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes2/cakes2/download (6).jfif", desc:"Luscious condensed milk sponge with whipped white cream.", active:true },
    { id:44, name:"Pista Delight Cake",         category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:956,  originalPrice:1390, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/rasmalai cake.jfif", desc:"Real Iranian pistachio cream swirled into aromatic cardamom sponge.", active:true },
    { id:45, name:"Tender Coconut Delight Cake",category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/birthday cake.jfif", desc:"Fresh tender coconut malai folded into light vanilla cream.", active:true },
    { id:46, name:"Strawberry Delight Cake",    category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Sprinkle Birthday Cake _ Hungry Happenings.jfif", desc:"Luscious fresh strawberry crush layered with velvety cream.", active:true },
    { id:47, name:"Butterscotch Delight Cake",  category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/white-wedding-cake.jfif", desc:"Rich butterscotch cream with extra crispy golden praline.", active:true },
    { id:48, name:"Mango Delight Cake",         category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes/cakes/download (4).jfif", desc:"Sweet mango puree swirled into soft vanilla sponge.", active:true },
    { id:49, name:"Royal Choco Delight Cake",   category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/download (7).jfif", desc:"Royal dark chocolate fudge with silky whipped cream accent.", active:true },
    { id:50, name:"Blueberry Delight Cake",     category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/(13) Facebook.jfif", desc:"Wild blueberry crush layered with vanilla sponge & cream.", active:true }
  ];

  const DEFAULT_CATEGORIES = [
    { id: 'caramel-nut', name: 'Caramel Nut' },
    { id: 'flavored', name: 'Flavored' },
    { id: 'extreme-combo', name: 'Extreme Combo' },
    { id: 'choco-cakes', name: 'Choco Cakes' },
    { id: 'special-edition', name: 'Special Edition' },
    { id: 'premium-special', name: 'Premium Special' },
    { id: 'delight-cakes', name: 'Delight Cakes' }
  ];

  const DEFAULT_HERO_SLIDES = [
    { name: 'Choco Scotch Cake', img: './cakes/cakes/caramel chocolate.jfif', rating: '4.8★', orders: '28 Google Reviews' },
    { name: 'Red Scotch Cake', img: './cakes/cakes/Red velvet Cake .jfif', rating: '4.9★', orders: '45 Google Reviews' },
    { name: 'Ferro Scotch Cake', img: './cakes/cakes/Southern Caramel Cake_ 5-Star Recipe You Must Try - My Favorite Recipes.jfif', rating: '4.85★', orders: '32 Google Reviews' },
    { name: 'Rasmalai Scotch Cake', img: "./cakes/cakes/Crissie's Homemade _ Colorado Springs CO.jfif", rating: '4.85★', orders: '19 Google Reviews' },
    { name: 'Black Forest Cake', img: './cakes/cakes/Black forest cake recipe.jfif', rating: '4.8★', orders: '41 Google Reviews' },
    { name: 'Strawberry Delight', img: './cakes/cakes/cakestrawberry.jfif', rating: '4.8★', orders: '26 Google Reviews' },
    { name: 'Ritch Choco KitKat Cake', img: './cakes/cakes/download (5).jfif', rating: '4.9★', orders: '48 Google Reviews' },
    { name: 'Mango Premium Cake', img: './cakes/cakes/Mango Chiffon Cake.jfif', rating: '4.9★', orders: '37 Google Reviews' },
    { name: 'White Forest Cake', img: './cakes/cakes/White Forest Cake.jfif', rating: '4.8★', orders: '22 Google Reviews' },
    { name: 'Pineapple Cake', img: './cakes/cakes/Dole Whip Cake.jfif', rating: '4.7★', orders: '15 Google Reviews' },
    { name: 'Butterscotch Cake', img: './cakes2/cakes2/butterscotch.jfif', rating: '4.7★', orders: '34 Google Reviews' },
    { name: 'Blueberry Cake', img: './cakes2/cakes2/Blueberry Cake.jfif', rating: '4.9★', orders: '50 Google Reviews' },
    { name: 'Rasmalai Fusion', img: './cakes2/cakes2/rasmalai cake.jfif', rating: '4.85★', orders: '43 Google Reviews' },
    { name: 'Red Velvet Premium Cake', img: './cakes2/cakes2/Red Velvet White Chocolate.jfif', rating: '4.9★', orders: '29 Google Reviews' },
    { name: 'Tender Coconut Delight', img: './cakes2/cakes2/Dream cake.jfif', rating: '4.9★', orders: '38 Google Reviews' }
  ];

  // ===== DYNAMIC GETTERS (Priority: localStorage -> Supabase cloud -> data.js -> defaults) =====
  function getDynamicProducts() {
    let sourceProducts = [];
    if (window.CAKELOVER_DATA && Array.isArray(window.CAKELOVER_DATA.products) && window.CAKELOVER_DATA.products.length > 0) {
      sourceProducts = window.CAKELOVER_DATA.products;
    } else {
      sourceProducts = DEFAULT_PRODUCTS;
    }

    const stored = localStorage.getItem('cakelover_products');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const seenImgs = new Set();
          const deduped = [];
          parsed.forEach(p => {
            if (p && p.img && !seenImgs.has(p.img)) {
              seenImgs.add(p.img);
              deduped.push(p);
            }
          });
          sourceProducts = deduped;
        }
      } catch(e) {}
    }

    return sourceProducts.filter(p => p.active !== false).map(p => {
      let rating = Number(p.rating) || 4.8;
      if (rating > 4.9) rating = 4.9;
      if (rating < 4.6) rating = 4.6;
      return {
        ...p,
        rating,
        tag: p.tag || '1 kg + ½ kg FREE'
      };
    });
  }

  function getDynamicCategories() {
    const stored = localStorage.getItem('cakelover_categories');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch(e) {}
    }
    if (window.CAKELOVER_DATA && Array.isArray(window.CAKELOVER_DATA.categories) && window.CAKELOVER_DATA.categories.length > 0) {
      return window.CAKELOVER_DATA.categories;
    }
    return DEFAULT_CATEGORIES;
  }

  function getDynamicHeroSlides() {
    let slides = [];
    const stored = localStorage.getItem('cakelover_hero_slides');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) slides = parsed;
      } catch(e) {}
    }
    if (slides.length === 0 && window.CAKELOVER_DATA && Array.isArray(window.CAKELOVER_DATA.heroSlides) && window.CAKELOVER_DATA.heroSlides.length > 0) {
      slides = window.CAKELOVER_DATA.heroSlides;
    }
    if (slides.length === 0) {
      slides = DEFAULT_HERO_SLIDES;
    }
    const presetReviews = [28, 45, 32, 19, 41, 26, 48, 37, 22, 15, 34, 50, 43, 29, 38];
    return slides.map((s, idx) => {
      let ratingStr = s.rating || '4.8★';
      const numR = parseFloat(ratingStr);
      if (!isNaN(numR) && numR > 4.9) {
        ratingStr = '4.9★';
      }
      let ordersStr = s.orders;
      if (!ordersStr || ordersStr === '33 Google Reviews') {
        const count = presetReviews[idx % presetReviews.length] || (((idx * 7 + 13) % 41) + 10);
        ordersStr = `${count} Google Reviews`;
      }
      return { ...s, rating: ratingStr, orders: ordersStr };
    });
  }

  function getDynamicOfferBanner() {
    const stored = localStorage.getItem('cakelover_offer_banner');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.title) return parsed;
      } catch(e) {}
    }
    if (window.CAKELOVER_DATA && window.CAKELOVER_DATA.offerBanner) {
      return window.CAKELOVER_DATA.offerBanner;
    }
    return { title: "Today's Offer Ends In:", hrs: 3, mins: 44, secs: 9, cta: "Order Now", link: "https://wa.me/919159158325" };
  }

  function renderOfferBanner() {
    const offer = getDynamicOfferBanner();
    const labelEl = document.getElementById('countdown-label-text');
    const ctaBtn = document.getElementById('countdown-cta-btn');

    if (labelEl) {
      labelEl.innerHTML = `<i class="fa-solid fa-fire-flame-curved"></i> ${escapeHtml(offer.title || "Today's Offer Ends In:")}`;
    }
    if (ctaBtn) {
      ctaBtn.innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${escapeHtml(offer.cta || "Order Now")}`;
      if (offer.link) ctaBtn.href = offer.link;
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // ===== SUPABASE BACKGROUND REFRESH =====
  // Loads latest config from Supabase cloud and re-renders the page if data was updated.
  async function tryLoadFromSupabase() {
    if (!window.SupabaseDB) return false;
    try {
      const cloudData = await SupabaseDB.loadConfig();
      if (cloudData && (cloudData.products || cloudData.categories)) {
        window.CAKELOVER_DATA = cloudData;
        if (cloudData.products) localStorage.setItem('cakelover_products', JSON.stringify(cloudData.products));
        if (cloudData.categories) localStorage.setItem('cakelover_categories', JSON.stringify(cloudData.categories));
        if (cloudData.heroSlides) localStorage.setItem('cakelover_hero_slides', JSON.stringify(cloudData.heroSlides));
        if (cloudData.marqueeItems) localStorage.setItem('cakelover_marquee_items', JSON.stringify(cloudData.marqueeItems));
        if (cloudData.brandStory) localStorage.setItem('cakelover_brand_story', JSON.stringify(cloudData.brandStory));
        if (cloudData.reels) localStorage.setItem('cakelover_reels', JSON.stringify(cloudData.reels));
        console.log('[App] Loaded latest data from Supabase cloud.');
        return true;
      }
    } catch (e) {
      console.warn('[App] Supabase unavailable, using local data.', e);
    }
    return false;
  }

  // State - initial render uses data.js / localStorage
  let products = getDynamicProducts();
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('search-input');
  const searchSuggestions = document.getElementById('search-suggestions');


  // ===== RENDER PRODUCTS GRID =====
  function renderProducts(items) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    if (items.length === 0) {
      productsGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--clr-muted);"><h3>No cakes found</h3><p>Try a different search term.</p></div>';
      return;
    }
    items.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = 'cake-card reveal visible';
      card.style.setProperty('--i', idx);
      card.dataset.id = p.id;
      card.innerHTML = `
        <div class="cake-img-wrap">
          <span class="card-tag">${p.tag}</span>
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.background='linear-gradient(135deg,#f5f0eb,#e8ddd5)';this.style.objectFit='none';this.removeAttribute('src');">
        </div>
        <div class="cake-body">
          <div class="cake-head">
            <h4 class="cake-name">${p.name}</h4>
            <div class="cake-rating"><i class="fa-solid fa-star"></i> ${p.rating}</div>
          </div>
          <p class="cake-desc">${p.desc}</p>
          <div class="weight-selector">
            <span class="weight-label">Select Weight:</span>
            <div class="weight-btns">
              <button class="weight-btn" data-weight="0.5" onclick="selectWeight(${p.id}, 0.5, this)">0.5 kg</button>
              <button class="weight-btn active" data-weight="1" onclick="selectWeight(${p.id}, 1, this)">1 kg</button>
              <button class="weight-btn" data-weight="2" onclick="selectWeight(${p.id}, 2, this)">2 kg</button>
            </div>
          </div>
          <div class="cake-footer">
            <div class="price-wrap">
              <span class="price-now" id="price-${p.id}">₹${p.basePrice}</span>
              <span class="price-was" id="orig-${p.id}">${p.originalPrice ? '₹' + p.originalPrice : ''}</span>
            </div>
            <button class="btn-order" onclick="orderWA(${p.id})"><i class="fa-brands fa-whatsapp"></i> Order</button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });
  }

  function filterProducts(cat) {
    if (cat === 'all') renderProducts(products);
    else renderProducts(products.filter(p => p.category === cat));
  }

  // ===== CATEGORY FILTER BAR =====
  function renderDynamicCategoryBar() {
    const filterBar = document.querySelector('.filter-bar');
    if (!filterBar) return;
    const categories = getDynamicCategories();
    let html = `<button class="filter-btn active" data-filter="all">All Cakes</button>`;
    categories.forEach(cat => {
      html += `<button class="filter-btn" data-filter="${cat.id}">${escapeHtml(cat.name)}</button>`;
    });
    filterBar.innerHTML = html;
    bindCategoryButtons();
  }

  function bindCategoryButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        filterProducts(cat);
      });
    });
  }

  // ===== MARQUEE STRIP =====
  function renderDynamicMarqueeTrack() {
    const track = document.getElementById('marquee-track');
    if (!track) return;
    let items = [];
    if (window.CAKELOVER_DATA && Array.isArray(window.CAKELOVER_DATA.marqueeItems) && window.CAKELOVER_DATA.marqueeItems.length > 0) {
      items = window.CAKELOVER_DATA.marqueeItems;
    } else {
      const stored = localStorage.getItem('cakelover_marquee_items');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) items = parsed;
        } catch(e) {}
      }
    }
    if (items.length === 0) return;
    let html = '';
    [...items, ...items].forEach(item => {
      html += `<div class="marquee-item"><img src="${item.img}" alt="${escapeHtml(item.label)}" loading="lazy"><div class="marquee-item-label">${escapeHtml(item.label)}</div></div>`;
    });
    track.innerHTML = html;
  }

  // ===== BRAND STORY =====
  function renderDynamicBrandStory() {
    let story = null;
    if (window.CAKELOVER_DATA && window.CAKELOVER_DATA.brandStory) {
      story = window.CAKELOVER_DATA.brandStory;
    } else {
      const stored = localStorage.getItem('cakelover_brand_story');
      if (stored) {
        try { story = JSON.parse(stored); } catch(e) {}
      }
    }
    if (!story) return;

    const mainImg = document.querySelector('.collage-main img');
    const sideImgs = document.querySelectorAll('.collage-side-item img');
    const quoteEl = document.querySelector('.story-quote');
    const bodyEl = document.querySelector('.story-body');

    if (mainImg && story.img1) mainImg.src = story.img1;
    if (sideImgs[0] && story.img2) sideImgs[0].src = story.img2;
    if (sideImgs[1] && story.img3) sideImgs[1].src = story.img3;
    if (sideImgs[2] && story.img4) sideImgs[2].src = story.img4;

    if (quoteEl && story.quote) quoteEl.textContent = story.quote;
    if (bodyEl && story.body) bodyEl.textContent = story.body;
  }

  // ===== REELS / INSTAGRAM =====
  function renderDynamicReelsRow() {
    const row = document.querySelector('.reels-row');
    if (!row) return;
    let reels = [];
    if (window.CAKELOVER_DATA && Array.isArray(window.CAKELOVER_DATA.reels) && window.CAKELOVER_DATA.reels.length > 0) {
      reels = window.CAKELOVER_DATA.reels;
    } else {
      const stored = localStorage.getItem('cakelover_reels');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) reels = parsed;
        } catch(e) {}
      }
    }
    if (reels.length === 0) return;

    let html = '';
    reels.forEach(r => {
      html += `
        <div class="reel-card" onclick="window.open('${r.link || 'https://www.instagram.com/cakes_lover_namakkal_official/'}','_blank','noopener,noreferrer')" role="button" tabindex="0">
          <img src="${r.img}" alt="${escapeHtml(r.title)}" loading="lazy">
          <div class="reel-overlay">
            <div class="reel-badges"><span class="reel-pill"><i class="fa-solid fa-eye"></i> ${escapeHtml(r.views || '1.0k')}</span><span class="reel-pill"><i class="fa-solid fa-share"></i> ${escapeHtml(r.shares || '10')}</span></div>
            <div class="reel-play"><i class="fa-solid fa-play"></i></div>
            <div class="reel-info"><h5>${escapeHtml(r.title)}</h5><p>${escapeHtml(r.desc || '')}</p></div>
          </div>
        </div>
      `;
    });
    row.innerHTML = html;
  }

  function refreshAllLiveContent() {
    products = getDynamicProducts();
    renderDynamicCategoryBar();
    filterProducts('all');
    renderDynamicMarqueeTrack();
    renderDynamicBrandStory();
    renderDynamicReelsRow();
    initHeroCarousel();
  }

  // BroadcastChannel, storage, and Server-Sent Events (SSE) live sync across all browsers
  if (window.BroadcastChannel) {
    const bc = new BroadcastChannel('cakelover_updates');
    bc.onmessage = () => { refreshAllLiveContent(); };
  }
  window.addEventListener('storage', () => { refreshAllLiveContent(); });

  try {
    const evtSource = new EventSource('/api/live-sync');
    evtSource.onmessage = () => {
      const oldScript = document.querySelector('script[src^="data.js"]');
      if (oldScript) {
        const newScript = document.createElement('script');
        newScript.src = 'data.js?v=' + Date.now();
        newScript.onload = () => { refreshAllLiveContent(); };
        oldScript.parentNode.replaceChild(newScript, oldScript);
      } else {
        refreshAllLiveContent();
      }
    };
  } catch(e) {}

  // ===== WEIGHT CALCULATOR =====
  window.selectWeight = function(id, weight, el) {
    const card = el.closest('.cake-card');
    card.querySelectorAll('.weight-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    const p = products.find(x => x.id === id);
    if (!p) return;

    let priceMult = weight;
    let origMult = weight;
    let tagText = p.tag;

    if (p.name.includes('[500 G]') || p.tag.includes('500g')) {
      priceMult = weight / 0.5;
      origMult = weight / 0.5;
      tagText = weight === 0.5 ? '500g Pack' : weight === 1 ? '1 kg Pack (Buy 1kg Get ½kg FREE)' : '2 kg Pack (Buy 2kg Get 1kg FREE)';
    } else {
      if (weight === 0.5) tagText = '0.5 kg Pack';
      else if (weight === 2) tagText = p.tag.includes('1 kg FREE') ? '2 kg + 2 kg FREE (4 kg Total)' : '2 kg + 1 kg FREE (3 kg Total)';
      else tagText = p.tag;
    }

    const priceNowEl = document.getElementById(`price-${id}`);
    const priceWasEl = document.getElementById(`orig-${id}`);
    const tagEl = card.querySelector('.card-tag');

    if (priceNowEl) priceNowEl.textContent = `₹${Math.round(p.basePrice * priceMult)}`;
    if (priceWasEl) priceWasEl.textContent = `₹${Math.round(p.originalPrice * origMult)}`;
    if (tagEl) tagEl.textContent = tagText;
  };

  // ===== WHATSAPP ORDER =====
  window.orderWA = function(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const card = document.querySelector(`.cake-card[data-id="${id}"]`);
    const w = card?.querySelector('.weight-btn.active')?.dataset.weight || '1';
    const price = document.getElementById(`price-${id}`)?.textContent || `₹${p.basePrice}`;
    const tag = card?.querySelector('.card-tag')?.textContent || p.tag;
    const msg = `Hello Cake Lover! 🎂\nI would like to order:\n• Cake: ${p.name}\n• Selected Weight: ${w} kg\n• Total Price: ${price}\n• Offer Included: ${tag}\n\nPlease confirm availability & delivery time. Thank you!`;
    window.open(`https://wa.me/919159158325?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // ===== SEARCH =====
  function doSearch() {
    if (!searchInput || !searchSuggestions) return;
    const q = searchInput.value.toLowerCase().trim();
    if (!q) { searchSuggestions.classList.remove('active'); renderProducts(products); return; }

    const matches = products.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q) || (p.desc && p.desc.toLowerCase().includes(q)));
    if (matches.length) {
      searchSuggestions.innerHTML = matches.map(m => `
        <div class="suggestion-item" onclick="pickSearch(${m.id})">
          <img src="${m.img}" class="suggestion-thumb" alt="${m.name}">
          <div><div style="font-weight:700;font-size:0.85rem;">${m.name}</div><div style="font-size:0.75rem;color:var(--clr-accent);font-weight:700;">₹${m.basePrice} (${m.offerText || m.tag})</div></div>
        </div>`).join('');
    } else {
      searchSuggestions.innerHTML = '<div style="padding:16px;text-align:center;font-size:0.85rem;color:var(--clr-muted);">No cakes found</div>';
    }
    searchSuggestions.classList.add('active');
  }

  if (searchInput) {
    searchInput.addEventListener('input', doSearch);
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (searchSuggestions) searchSuggestions.classList.remove('active');
        const q = searchInput.value.toLowerCase().trim();
        renderProducts(q ? products.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q)) : products);
        document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  window.pickSearch = function(id) {
    if (searchSuggestions) searchSuggestions.classList.remove('active');
    const card = document.querySelector(`.cake-card[data-id="${id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.boxShadow = '0 0 0 3px var(--clr-accent)';
      setTimeout(() => card.style.boxShadow = '', 2000);
    }
  };

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-box') && !e.target.closest('.nav-search')) {
      if (searchSuggestions) searchSuggestions.classList.remove('active');
    }
  });

  // ===== PINCODE =====
  window.checkPincode = function() {
    const input = document.getElementById('pincode-input');
    const result = document.getElementById('pincode-result');
    if (!input || !result) return;
    const pin = input.value.trim();
    if (/^[1-9]\d{5}$/.test(pin)) {
      result.innerHTML = `<span style="color:var(--clr-green);font-weight:700;"><i class="fa-solid fa-circle-check"></i> Delivery available at ${pin}!</span>`;
    } else {
      result.innerHTML = `<span style="color:var(--clr-accent);font-weight:700;"><i class="fa-solid fa-circle-xmark"></i> Enter a valid 6-digit pincode.</span>`;
    }
  };

  // ===== TIMER =====
  function initTimer() {
    renderOfferBanner();
    const offer = getDynamicOfferBanner();
    let duration = (Number(offer.hrs || 3) * 3600) + (Number(offer.mins || 44) * 60) + Number(offer.secs || 9);
    const h = document.getElementById('timer-hours');
    const m = document.getElementById('timer-mins');
    const s = document.getElementById('timer-secs');
    setInterval(() => {
      if (duration <= 0) duration = 4 * 3600;
      duration--;
      if (h) h.textContent = String(Math.floor(duration / 3600)).padStart(2, '0');
      if (m) m.textContent = String(Math.floor((duration % 3600) / 60)).padStart(2, '0');
      if (s) s.textContent = String(duration % 60).padStart(2, '0');
    }, 1000);
  }

  // ===== SCROLL REVEAL =====
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => { entry.target.classList.add('visible'); });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      if (!el.classList.contains('visible')) observer.observe(el);
    });
  }

  // ===== NAVBAR SCROLL SHADOW =====
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav?.classList.add('scrolled');
    else nav?.classList.remove('scrolled');
  });

  // ===== HERO CAROUSEL =====
  function initHeroCarousel() {
    const activeHeroSlides = getDynamicHeroSlides();
    const imgEl = document.getElementById('hero-img');
    const dotsContainer = document.getElementById('hero-dots');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const nameEl = document.getElementById('hero-slide-name');
    const counterEl = document.getElementById('hero-slide-counter');
    const ratingValEl = document.getElementById('hero-rating-val');
    const ordersValEl = document.getElementById('hero-orders-val');

    if (!imgEl || !dotsContainer) return;

    let current = 0;
    let autoTimer;
    const total = activeHeroSlides.length;

    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }

    function goTo(idx) {
      current = ((idx % total) + total) % total;

      Array.from(dotsContainer.children).forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });

      const slide = activeHeroSlides[current];
      if (nameEl) {
        nameEl.classList.remove('pop');
        void nameEl.offsetWidth;
        nameEl.textContent = slide.name;
        nameEl.classList.add('pop');
      }
      if (counterEl) counterEl.textContent = `${current + 1} / ${total}`;
      if (ratingValEl) ratingValEl.textContent = slide.rating || '4.9★';
      if (ordersValEl) ordersValEl.textContent = slide.orders || '33 Google Reviews';

      imgEl.classList.add('fading');
      setTimeout(() => {
        imgEl.src = slide.img;
        imgEl.classList.remove('fading');
      }, 150);
    }

    function nextSlide() { goTo(current + 1); }
    function prevSlide() { goTo(current - 1); }

    function startAuto() { stopAuto(); autoTimer = setInterval(nextSlide, 3500); }
    function stopAuto() { if (autoTimer) clearInterval(autoTimer); }

    prevBtn?.replaceWith(prevBtn.cloneNode(true));
    nextBtn?.replaceWith(nextBtn.cloneNode(true));

    document.getElementById('hero-prev')?.addEventListener('click', () => { prevSlide(); startAuto(); });
    document.getElementById('hero-next')?.addEventListener('click', () => { nextSlide(); startAuto(); });

    const frame = document.querySelector('.hero-img-frame');
    if (frame) {
      frame.addEventListener('mouseenter', stopAuto);
      frame.addEventListener('mouseleave', startAuto);
    }

    goTo(0);
    startAuto();
  }

  // ===== INITIALIZATION =====
  renderDynamicCategoryBar();
  renderProducts(products);
  renderDynamicMarqueeTrack();
  renderDynamicBrandStory();
  renderDynamicReelsRow();
  initScrollReveal();
  initHeroCarousel();
  initTimer();

  // ===== SUPABASE BACKGROUND REFRESH =====
  // After initial paint (from data.js/localStorage), fetch the latest cloud data
  // and silently re-render if Supabase has newer content.
  tryLoadFromSupabase().then(loaded => {
    if (loaded) {
      products = getDynamicProducts();
      renderProducts(products);
      renderDynamicCategoryBar();
      initHeroCarousel();
      renderDynamicMarqueeTrack();
      renderDynamicBrandStory();
      renderDynamicReelsRow();
      renderOfferBanner();
    }
  });
});

// ===== HAMBURGER MENU =====
(function() {
  const hamburger = document.getElementById('hamburger-btn');
  const overlay   = document.getElementById('mobile-nav-overlay');
  const closeBtn  = document.getElementById('mobile-nav-close');

  function openMenu() {
    hamburger?.classList.add('open');
    overlay?.classList.add('open');
    overlay?.setAttribute('aria-hidden', 'false');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  window.closeMenu = function() {
    hamburger?.classList.remove('open');
    overlay?.classList.remove('open');
    overlay?.setAttribute('aria-hidden', 'true');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', () => {
    if (overlay?.classList.contains('open')) closeMenu();
    else openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', (e) => { if (e.target === overlay) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
})();
