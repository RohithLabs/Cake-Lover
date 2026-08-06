/* ==========================================================================
   CAKE LOVER — DIGITAL SHOWCASE CATALOG
   Clean professional showcase with scroll animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== PRODUCT DATA (50 ITEMS USING ORIGINAL CAKES & CAKES2 IMAGES ONLY) =====
  const products = [
    // === Caramel Nut Cakes ===
    { id:1,  name:"Choco Scotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:734,  originalPrice:1099, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/caramel chocolate.jfif", desc:"Delicious blend of rich chocolate and golden butterscotch crunch." },
    { id:2,  name:"Red Scotch Cake",            category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:882,  originalPrice:1299, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Red velvet Cake .jfif", desc:"Soft red velvet sponge with a crispy butterscotch crunch layer." },
    { id:3,  name:"Ferro Scotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1150, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/Southern Caramel Cake_ 5-Star Recipe You Must Try - My Favorite Recipes.jfif", desc:"Premium Ferrero-style hazelnut crunch combined with rich caramel." },
    { id:4,  name:"Rasmalai Scotch Cake",       category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:706,  originalPrice:1050, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/Crissie's Homemade _ Colorado Springs CO.jfif", desc:"Desi rasmalai milk sponge paired with golden butterscotch bits." },
    { id:5,  name:"Triple Scotch Cake",         category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1150, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/butterscotch.jfif", desc:"Triple-layered caramel mousse and crispy praline nuggets." },
    { id:6,  name:"Milky Scotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:853,  originalPrice:1250, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes2/cakes2/cake.jfif", desc:"Silky milk cream sponge infused with butterscotch crunch." },
    { id:7,  name:"Butterscotch Cake",          category:"caramel-nut",     tag:"1 kg + ½ kg FREE", basePrice:662,  originalPrice:990,  offerText:"Buy 1kg get ½kg free", rating:4.7, img:"./cakes2/cakes2/butterscotch.jfif", desc:"Classic golden butterscotch with real caramel drizzle." },

    // === Flavored Cakes ===
    { id:8,  name:"Classic Vanilla Cake",       category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:440,  originalPrice:650,  offerText:"Buy 1kg get ½kg free", rating:4.6, img:"./cakes2/cakes2/cake.jfif", desc:"Pure Madagascar vanilla bean cream over fluffy white sponge." },
    { id:9,  name:"White Forest Cake",          category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:603,  originalPrice:890,  offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/White Forest Cake.jfif", desc:"White chocolate curls over vanilla sponge with cherry fillings." },
    { id:10, name:"Mango Cake",                 category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:574,  originalPrice:850,  offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/Mango Chiffon Cake.jfif", desc:"Fresh Alphonso mango pulp blended into light whipped cream." },
    { id:11, name:"Pineapple Cake",             category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:574,  originalPrice:850,  offerText:"Buy 1kg get ½kg free", rating:4.7, img:"./cakes/cakes/Dole Whip Cake.jfif", desc:"Juicy pineapple compote layered with light vanilla cream." },
    { id:12, name:"Blueberry Cake",             category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/Blueberry Cake.jfif", desc:"Wild blueberry reduction swirled into smooth vanilla frosting." },
    { id:13, name:"Strawberry Cake",            category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:574,  originalPrice:850,  offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes/cakes/cakestrawberry.jfif", desc:"Fresh strawberry compote layered with sweet vanilla cream." },
    { id:14, name:"Red Velvet Cake",            category:"flavored",        tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/Red Velvet White Chocolate.jfif", desc:"Soft crimson cocoa sponge layered with rich cream cheese." },
    { id:15, name:"Black Forest Cake [500 G]",  category:"flavored",        tag:"500g Pack",        basePrice:515,  originalPrice:750,  offerText:"500g Pack",            rating:4.8, img:"./cakes/cakes/Black forest cake recipe.jfif", desc:"Classic dark chocolate shavings with maraschino cherries in a half kg pack." },

    // === Extreme Combo Cakes ===
    { id:16, name:"Choco Vanilla Cake",         category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/choconillla", desc:"Dual-flavored marble swirl of rich cocoa and pure vanilla." },
    { id:17, name:"Choco Strawberry Cake",      category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/cakestrawberry.jfif", desc:"Decadent dark chocolate ganache paired with fresh strawberry cream." },
    { id:18, name:"Butterscotch And Blueberry Cake", category:"extreme-combo", tag:"1 kg + ½ kg FREE", basePrice:706, originalPrice:1050, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/Blueberry Cake.jfif", desc:"Fruity blueberry swirls combined with crunchy butterscotch bits." },
    { id:19, name:"German Black Forest Cake",   category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:721,  originalPrice:1080, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/black-forest-gateau.jfif", desc:"Authentic German-style dark chocolate cake loaded with cherries." },
    { id:20, name:"German Chocolate Cake",      category:"extreme-combo",   tag:"1 kg + ½ kg FREE", basePrice:721,  originalPrice:1080, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Dark Chocolate .jfif", desc:"Rich chocolate cake with coconut-pecan filling and fudge." },

    // === Choco Cakes ===
    { id:21, name:"Chocolate Cake",             category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:625,  originalPrice:920,  offerText:"Buy 1kg get ½kg free", rating:4.7, img:"./cakes2/cakes2/download (5).jfif", desc:"Rich moist cocoa sponge smothered in silky chocolate frosting." },
    { id:22, name:"Choco Truffle Cake",         category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:706,  originalPrice:1050, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/download (3).jfif", desc:"Pure chocolate fudge layered with silky cream and truffle glaze." },
    { id:23, name:"Dead By Chocolate Cake",     category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:735,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Dark Chocolate .jfif", desc:"Triple-layer dark chocolate ganache for true cocoa lovers." },
    { id:24, name:"Choco Forest Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:735,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/black-forest-gateau.jfif", desc:"Extra chocolatey black forest loaded with dark cocoa curls." },
    { id:25, name:"Choco Excess Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:735,  originalPrice:1100, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/download (8).jfif", desc:"Overloaded with melted dark chocolate, fudge & choco chips." },
    { id:26, name:"Choco KitKat Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:809,  originalPrice:1199, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/download (5).jfif", desc:"Bordered with crispy KitKat bars and topped with choco balls." },
    { id:27, name:"Choco Walnut Cake",          category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:750,  originalPrice:1150, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/coffee_mocha_cake.jfif", desc:"Rich chocolate sponge packed with roasted crunchy walnuts." },
    { id:28, name:"Choco Oreo Cake",            category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:809,  originalPrice:1199, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/cake", desc:"Crushed Oreo cookie cream layered inside rich chocolate sponge." },
    { id:29, name:"Milky Truffle Cake",         category:"choco-cakes",     tag:"1 kg + ½ kg FREE", basePrice:809,  originalPrice:1199, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/cake3.jfif", desc:"Creamy milk chocolate truffle with white cocoa drippings." },

    // === Special Edition Cake ===
    { id:30, name:"Ritch Choco KitKat Cake",    category:"special-edition", tag:"1 kg + 1 kg FREE", basePrice:1469, originalPrice:2199, offerText:"Buy 1kg get 1kg free", rating:4.95, img:"./cakes/cakes/download (5).jfif", desc:"Luxury celebration cake wrapped in KitKat bars with rich truffle core." },

    // === Premium Special Cakes ===
    { id:31, name:"Black Forest Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes/cakes/Black forest cake recipe.jfif", desc:"Premium black forest layered with imported cherries & dark cacao." },
    { id:32, name:"Mango Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/Mango Chiffon Cake.jfif", desc:"Alphonso mango cream cake with premium fruit glaze." },
    { id:33, name:"White Forest Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/White Forest Cake.jfif", desc:"Belgian white chocolate curls with luxury cherry reduction." },
    { id:34, name:"Pineapple Premium Cake",     category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Dole Whip Cake.jfif", desc:"Fresh tropical pineapple compote over rich vanilla sponge." },
    { id:35, name:"Blueberry Premium Cake",     category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/Blueberry Cake.jfif", desc:"Handpicked wild blueberry compote layered with whipped cream." },
    { id:36, name:"Blackcurrant Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/download (4).jfif", desc:"Exotic blackcurrant berry glaze over soft vanilla sponge." },
    { id:37, name:"Red Velvet Premium Cake",    category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:955,  originalPrice:1390, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/Red Velvet White Chocolate.jfif", desc:"Signature crimson cocoa cake with imported cream cheese icing." },
    { id:38, name:"Choco Truffle Premium Cake", category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/download (8).jfif", desc:"Dense Belgian chocolate truffle cake finished with cocoa dust." },
    { id:39, name:"Butterscotch Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/butterscotch.jfif", desc:"Golden caramel praline crunch with rich butterscotch mousse." },
    { id:40, name:"Ferro Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/caramel chocolate.jfif", desc:"Ferrero hazelnut rocher mousse layered with dark chocolate fudge." },
    { id:41, name:"Lemon Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes2/cakes2/Dream cake.jfif", desc:"Zesty lemon curd cream layered into fresh vanilla chiffon sponge." },
    { id:42, name:"Choco Almond Premium Cake",  category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/download (5).jfif", desc:"Roasted California almonds embedded in rich chocolate ganache." },
    { id:43, name:"Milky Premium Cake",         category:"premium-special", tag:"1 kg + ½ kg FREE", basePrice:868,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes2/cakes2/download (6).jfif", desc:"Luscious condensed milk sponge with whipped white cream." },

    // === Delight Cakes ===
    { id:44, name:"Pista Delight Cake",         category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:956,  originalPrice:1390, offerText:"Buy 1kg get ½kg free", rating:4.95, img:"./cakes2/cakes2/rasmalai cake.jfif", desc:"Real Iranian pistachio cream swirled into aromatic cardamom sponge." },
    { id:45, name:"Tender Coconut Delight Cake",category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes/cakes/birthday cake.jfif", desc:"Fresh tender coconut malai folded into light vanilla cream." },
    { id:46, name:"Strawberry Delight Cake",    category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.8, img:"./cakes/cakes/Sprinkle Birthday Cake _ Hungry Happenings.jfif", desc:"Luscious fresh strawberry crush layered with velvety cream." },
    { id:47, name:"Butterscotch Delight Cake",  category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes/cakes/white-wedding-cake.jfif", desc:"Rich butterscotch cream with extra crispy golden praline." },
    { id:48, name:"Mango Delight Cake",         category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.75, img:"./cakes/cakes/download (4).jfif", desc:"Sweet mango puree swirled into soft vanilla sponge." },
    { id:49, name:"Royal Choco Delight Cake",   category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.9, img:"./cakes2/cakes2/download (7).jfif", desc:"Royal dark chocolate fudge with silky whipped cream accent." },
    { id:50, name:"Blueberry Delight Cake",     category:"delight-cakes",   tag:"1 kg + ½ kg FREE", basePrice:881,  originalPrice:1290, offerText:"Buy 1kg get ½kg free", rating:4.85, img:"./cakes2/cakes2/(13) Facebook.jfif", desc:"Wild blueberry crush layered with vanilla sponge & cream." }
  ];

  const productsGrid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('search-input');
  const searchSuggestions = document.getElementById('search-suggestions');

  // ===== TIMER =====
  function initTimer() {
    let duration = 3 * 3600 + 44 * 60 + 31;
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

  // ===== RENDER CARDS =====
  function renderProducts(items) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    if (items.length === 0) {
      productsGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--clr-muted);"><h3>No cakes found</h3><p>Try a different search term.</p></div>';
      return;
    }
    items.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = 'cake-card reveal';
      card.style.setProperty('--i', idx);
      card.dataset.id = p.id;
      card.innerHTML = `
        <div class="cake-img-wrap">
          <span class="card-tag">${p.tag}</span>
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="cake-body">
          <div class="cake-head">
            <h4 class="cake-name">${p.name}</h4>
            <div class="cake-rating"><i class="fa-solid fa-star"></i> ${p.rating}</div>
          </div>
          <p class="cake-desc">${p.desc}</p>
          <div class="weight-row">
            <button class="weight-btn" data-weight="0.5" onclick="selectWeight(${p.id},0.5,this)">0.5 kg</button>
            <button class="weight-btn active" data-weight="1" onclick="selectWeight(${p.id},1,this)">1 kg</button>
            <button class="weight-btn" data-weight="2" onclick="selectWeight(${p.id},2,this)">2 kg</button>
          </div>
          <div class="cake-footer">
            <div><span class="price-now" id="price-${p.id}">₹${p.basePrice}</span><span class="price-was" id="orig-${p.id}">₹${p.originalPrice}</span></div>
            <button class="btn-order" onclick="orderWA(${p.id})"><i class="fa-brands fa-whatsapp"></i> Order</button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });
    // Re-observe new cards
    initScrollReveal();
  }

  // ===== FILTERS =====
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      if (f === 'all') renderProducts(products);
      else if (f === 'offer') renderProducts(products.filter(p => p.offerText.includes('FREE')));
      else renderProducts(products.filter(p => p.category === f));
    });
  });

  // ===== WEIGHT SELECTION & BUSINESS LOGIC =====
  window.selectWeight = function(id, weight, el) {
    const card = el.closest('.cake-card');
    card.querySelectorAll('.weight-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    const p = products.find(x => x.id === id);
    if (!p) return;

    let priceMult = weight;
    let origMult = weight;
    let tagText = p.tag;

    // Handle special case for 500g base item
    if (p.name.includes('[500 G]') || p.tag.includes('500g')) {
      priceMult = weight / 0.5;
      origMult = weight / 0.5;
      tagText = weight === 0.5 ? '500g Pack' : weight === 1 ? '1 kg Pack (Buy 1kg Get ½kg FREE)' : '2 kg Pack (Buy 2kg Get 1kg FREE)';
    } else {
      if (weight === 0.5) {
        tagText = '0.5 kg Pack';
      } else if (weight === 2) {
        tagText = p.tag.includes('1 kg FREE') ? '2 kg + 2 kg FREE (4 kg Total)' : '2 kg + 1 kg FREE (3 kg Total)';
      } else {
        tagText = p.tag;
      }
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
    const price = document.getElementById(`price-${id}`).textContent;
    const tag = card?.querySelector('.card-tag')?.textContent || p.tag;
    const msg = `Hello Cake Lover! 🎂\nI would like to order:\n• Cake: ${p.name}\n• Selected Weight: ${w} kg\n• Total Price: ${price}\n• Offer Included: ${tag}\n\nPlease confirm availability & delivery time. Thank you!`;
    window.open(`https://wa.me/919159158325?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // ===== SEARCH =====
  function doSearch() {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) { searchSuggestions.classList.remove('active'); renderProducts(products); return; }
    const matches = products.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q) || p.desc.toLowerCase().includes(q));
    if (matches.length) {
      searchSuggestions.innerHTML = matches.map(m => `
        <div class="suggestion-item" onclick="pickSearch(${m.id})">
          <img src="${m.img}" class="suggestion-thumb" alt="${m.name}">
          <div><div style="font-weight:700;font-size:0.85rem;">${m.name}</div><div style="font-size:0.75rem;color:var(--clr-accent);font-weight:700;">₹${m.basePrice} (${m.offerText})</div></div>
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
        searchSuggestions.classList.remove('active');
        const q = searchInput.value.toLowerCase().trim();
        renderProducts(products.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q)));
        document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const searchBtn = document.getElementById('search-btn-trigger');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      searchSuggestions.classList.remove('active');
      const q = searchInput.value.toLowerCase().trim();
      renderProducts(q ? products.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q)) : products);
      document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' });
    });
  }

  window.pickSearch = function(id) {
    searchSuggestions.classList.remove('active');
    const card = document.querySelector(`.cake-card[data-id="${id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.boxShadow = '0 0 0 3px var(--clr-accent)';
      setTimeout(() => card.style.boxShadow = '', 2000);
    }
  };

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-box') && !e.target.closest('.nav-search')) searchSuggestions.classList.remove('active');
  });

  // ===== PINCODE =====
  window.checkPincode = function() {
    const input = document.getElementById('pincode-input');
    const result = document.getElementById('pincode-result');
    const pin = input.value.trim();
    if (/^[1-9]\d{5}$/.test(pin)) {
      result.innerHTML = `<span style="color:var(--clr-green);font-weight:700;"><i class="fa-solid fa-circle-check"></i> Delivery available at ${pin}!</span>`;
    } else {
      result.innerHTML = `<span style="color:var(--clr-accent);font-weight:700;"><i class="fa-solid fa-circle-xmark"></i> Enter a valid 6-digit pincode.</span>`;
    }
  };

  // ===== NEWSLETTER =====
  window.handleNewsletter = function(e) {
    e.preventDefault();
    const btn = document.getElementById('newsletter-btn');
    if (btn) { btn.textContent = '✓ Subscribed!'; btn.style.background = 'var(--clr-green)'; }
  };

  // ===== SCROLL REVEAL (60/120 FPS OPTIMIZED) =====
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('visible');
          });
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

  // ===== HERO CAROUSEL (SINGLE IMAGE) =====
  const heroSlides = [
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

  function initHeroCarousel() {
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
    const total = heroSlides.length;

    // Create dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }

    function goTo(idx) {
      if (idx === current) return;
      current = ((idx % total) + total) % total;
      
      // Update Dots
      Array.from(dotsContainer.children).forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });

      // Update Text & Rating Badge
      const slide = heroSlides[current];
      if (nameEl) {
        nameEl.classList.remove('pop');
        void nameEl.offsetWidth; // force reflow
        nameEl.textContent = slide.name;
        nameEl.classList.add('pop');
      }
      if (counterEl) counterEl.textContent = `${current + 1} / ${total}`;
      if (ratingValEl) ratingValEl.textContent = slide.rating;
      if (ordersValEl) ordersValEl.textContent = slide.orders;

      // Update Image with fade
      imgEl.classList.add('fading');
      setTimeout(() => {
        imgEl.src = slide.img;
        imgEl.classList.remove('fading');
      }, 200); // Wait for half transition

      resetAuto();
    }

    function nextSlide() { goTo(current + 1); }
    function prevSlide() { goTo(current - 1); }

    prevBtn?.addEventListener('click', prevSlide);
    nextBtn?.addEventListener('click', nextSlide);

    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(nextSlide, 4000);
    }

    resetAuto();

    // Swipe support for mobile
    let touchStartX = 0;
    const frame = document.querySelector('.hero-img-frame');
    if (frame) {
      frame.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
      frame.addEventListener('touchend', e => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 50) diff > 0 ? prevSlide() : nextSlide();
      }, { passive: true });
    }
  }

  // ===== INIT =====
  renderProducts(products);
  initScrollReveal();
  initHeroCarousel();
});

