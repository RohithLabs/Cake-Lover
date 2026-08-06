/* ==========================================================================
   CAKE LOVER — DIGITAL SHOWCASE CATALOG
   Clean professional showcase with scroll animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== PRODUCT DATA =====
  const products = [
    // === cakes/cakes === (all 20 images)
    { id:1,  name:"Red Velvet Blast",          category:"red-velvet", tag:"1 kg + 1 kg FREE",  basePrice:1290, originalPrice:1790, offerText:"1 kg + 1 kg FREE",  rating:4.95, img:"./cakes/cakes/Red velvet Cake .jfif", desc:"Extravagant red velvet layers with cream cheese bomb centers." },
    { id:2,  name:"Choco Truffle Blast",        category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1290, originalPrice:1790, offerText:"1 kg + 1 kg FREE",  rating:4.90, img:"./cakes2/cakes2/cake3.jfif", desc:"Decadent chocolate volcano core with fresh berries and ganache." },
    { id:3,  name:"Nutella Delight",            category:"exotic",     tag:"1 kg + 1 kg FREE",  basePrice:1390, originalPrice:1890, offerText:"1 kg + 1 kg FREE",  rating:4.96, img:"./cakes/cakes/caramel chocolate.jfif", desc:"Creamy Nutella mousse layers with roasted Italian hazelnuts." },
    { id:4,  name:"Dead By Chocolate",          category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1390, originalPrice:1890, offerText:"1 kg + 1 kg FREE",  rating:4.98, img:"./cakes/cakes/Dark Chocolate .jfif", desc:"Triple layer dark chocolate ganache with Belgian cacao nibs." },
    { id:5,  name:"Choco Truffle",              category:"chocolate",  tag:"1.5 Kg",            basePrice:1030, originalPrice:1390, offerText:"1.5 Kg Pack",       rating:4.88, img:"./cakes/cakes/download (3).jfif", desc:"Pure chocolate fudge layered with silky cream and truffle drizzle." },
    { id:6,  name:"Kitkat Nuts Cake",           category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1350, originalPrice:1750, offerText:"1 kg + 1 kg FREE",  rating:4.93, img:"./cakes/cakes/download (5).jfif", desc:"Crunchy KitKat border loaded with roasted cashews and almonds." },
    { id:7,  name:"Pineapple Delight",          category:"fruit",      tag:"1 kg + ½ kg FREE",  basePrice:1090, originalPrice:1390, offerText:"1 kg + ½ kg FREE",  rating:4.85, img:"./cakes/cakes/Dole Whip Cake.jfif", desc:"Tropical pineapple compote with fresh whipped vanilla cream." },
    { id:8,  name:"Black Forest Classic",       category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1250, originalPrice:1650, offerText:"1 kg + 1 kg FREE",  rating:4.89, img:"./cakes/cakes/Black forest cake recipe.jfif", desc:"Dark chocolate shavings with maraschino cherry compote." },
    { id:9,  name:"Blueberry Cheesecake",       category:"exotic",     tag:"1 kg + ½ kg FREE",  basePrice:1320, originalPrice:1690, offerText:"1 kg + ½ kg FREE",  rating:4.94, img:"./cakes/cakes/download (4).jfif", desc:"New York baked cheesecake topped with wild blueberry glaze." },
    { id:10, name:"Rasmalai Fusion",            category:"exotic",     tag:"1 kg + ½ kg FREE",  basePrice:1190, originalPrice:1590, offerText:"1 kg + ½ kg FREE",  rating:4.96, img:"./cakes/cakes/Crissie's Homemade _ Colorado Springs CO.jfif", desc:"Cardamom sponge soaked in saffron milk and rasgulla slices." },
    { id:11, name:"Mango Delight",              category:"fruit",      tag:"1 kg + ½ kg FREE",  basePrice:1090, originalPrice:1450, offerText:"1 kg + ½ kg FREE",  rating:4.87, img:"./cakes/cakes/Mango Chiffon Cake.jfif", desc:"Alphonso mango pulp layered with velvety whipped cream." },
    { id:12, name:"Butterscotch Crunch",        category:"exotic",     tag:"1 kg + 1 kg FREE",  basePrice:1250, originalPrice:1650, offerText:"1 kg + 1 kg FREE",  rating:4.88, img:"./cakes/cakes/Southern Caramel Cake_ 5-Star Recipe You Must Try - My Favorite Recipes.jfif", desc:"Golden caramel drizzle with praline crunch nuggets." },
    { id:13, name:"White Forest",               category:"fruit",      tag:"1 kg + ½ kg FREE",  basePrice:1150, originalPrice:1490, offerText:"1 kg + ½ kg FREE",  rating:4.86, img:"./cakes/cakes/White Forest Cake.jfif", desc:"White chocolate curls over soft vanilla sponge and cherry coulis." },
    { id:14, name:"Strawberry Vanilla",         category:"fruit",      tag:"1 kg + ½ kg FREE",  basePrice:1090, originalPrice:1390, offerText:"1 kg + ½ kg FREE",  rating:4.84, img:"./cakes/cakes/cakestrawberry.jfif", desc:"Fresh strawberry reduction with Madagascar vanilla beans." },
    { id:15, name:"Coffee Mocha Fusion",        category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1350, originalPrice:1750, offerText:"1 kg + 1 kg FREE",  rating:4.91, img:"./cakes/cakes/coffee_mocha_cake.jfif", desc:"Espresso-soaked dark chocolate sponge with mocha buttercream." },
    { id:16, name:"Sprinkle Birthday Cake",     category:"fruit",      tag:"1 kg + ½ kg FREE",  basePrice:1190, originalPrice:1590, offerText:"1 kg + ½ kg FREE",  rating:4.90, img:"./cakes/cakes/Sprinkle Birthday Cake _ Hungry Happenings.jfif", desc:"Vibrant rainbow sprinkle layers with vanilla cream frosting." },
    { id:17, name:"Birthday Special",           category:"fruit",      tag:"1 kg + ½ kg FREE",  basePrice:1150, originalPrice:1490, offerText:"1 kg + ½ kg FREE",  rating:4.87, img:"./cakes/cakes/birthday cake.jfif", desc:"Cheerful birthday layers with colorful cream and festive toppings." },
    { id:18, name:"Oreo Crunch Cake",           category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1320, originalPrice:1720, offerText:"1 kg + 1 kg FREE",  rating:4.92, img:"./cakes/cakes/cake", desc:"Crushed Oreo cookie cream layered with dark cocoa sponge." },
    { id:19, name:"White Wedding Cake",         category:"fruit",      tag:"1 kg + ½ kg FREE",  basePrice:1390, originalPrice:1850, offerText:"1 kg + ½ kg FREE",  rating:4.93, img:"./cakes/cakes/white-wedding-cake.jfif", desc:"Classic tiered white wedding cake with delicate floral accents." },
    { id:20, name:"Black Forest Gâteau",        category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1290, originalPrice:1750, offerText:"1 kg + 1 kg FREE",  rating:4.91, img:"./cakes/cakes/black-forest-gateau.jfif", desc:"Traditional French-style black forest with kirsch cream layers." },
    // === cakes2/cakes2 === (all 14 images)
    { id:21, name:"Butterscotch Dream",         category:"exotic",     tag:"1 kg + 1 kg FREE",  basePrice:1250, originalPrice:1690, offerText:"1 kg + 1 kg FREE",  rating:4.92, img:"./cakes2/cakes2/butterscotch.jfif", desc:"Buttery caramel praline crunch with silky butterscotch mousse." },
    { id:22, name:"Blueberry Blossom",          category:"fruit",      tag:"1 kg + ½ kg FREE",  basePrice:1190, originalPrice:1590, offerText:"1 kg + ½ kg FREE",  rating:4.88, img:"./cakes2/cakes2/Blueberry Cake.jfif", desc:"Wild blueberry compote over a light vanilla chiffon sponge." },
    { id:23, name:"Rasmalai Special",           category:"exotic",     tag:"1 kg + 1 kg FREE",  basePrice:1350, originalPrice:1790, offerText:"1 kg + 1 kg FREE",  rating:4.96, img:"./cakes2/cakes2/rasmalai cake.jfif", desc:"Traditional rasmalai essence baked into every creamy layer." },
    { id:24, name:"Red Velvet White Choco",     category:"red-velvet", tag:"1 kg + 1 kg FREE",  basePrice:1390, originalPrice:1850, offerText:"1 kg + 1 kg FREE",  rating:4.95, img:"./cakes2/cakes2/Red Velvet White Chocolate.jfif", desc:"Classic red velvet elevated with white chocolate ganache drip." },
    { id:25, name:"Dream Cake Special",         category:"exotic",     tag:"1 kg + ½ kg FREE",  basePrice:1290, originalPrice:1690, offerText:"1 kg + ½ kg FREE",  rating:4.93, img:"./cakes2/cakes2/Dream cake.jfif", desc:"Multi-layered pastel dream cake with cloud-like whipped cream." },
    { id:26, name:"Choco Vanilla Swirl",        category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1320, originalPrice:1750, offerText:"1 kg + 1 kg FREE",  rating:4.90, img:"./cakes2/cakes2/choconillla", desc:"Classic chocolate and vanilla marble swirl in a rich ganache shell." },
    { id:27, name:"Triple Chocolate Drip",      category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1450, originalPrice:1950, offerText:"1 kg + 1 kg FREE",  rating:4.97, img:"./cakes2/cakes2/download (8).jfif", desc:"Dark, milk & white chocolate triple drip on a fudge brownie base." },
    { id:28, name:"Caramel Celebration",        category:"exotic",     tag:"1 kg + 1 kg FREE",  basePrice:1290, originalPrice:1750, offerText:"1 kg + 1 kg FREE",  rating:4.91, img:"./cakes2/cakes2/download (7).jfif", desc:"Salted caramel layers with toffee crunch and whipped buttercream." },
    { id:29, name:"Signature Special Cake",     category:"exotic",     tag:"1 kg + ½ kg FREE",  basePrice:1390, originalPrice:1890, offerText:"1 kg + ½ kg FREE",  rating:4.94, img:"./cakes2/cakes2/download (6).jfif", desc:"Our signature blend of premium flavors baked fresh daily." },
    { id:30, name:"Luxury Celebration",         category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1490, originalPrice:1990, offerText:"1 kg + 1 kg FREE",  rating:4.98, img:"./cakes2/cakes2/cake3.jfif", desc:"Premium celebration cake with edible gold accents and rich ganache." },
    { id:31, name:"Festive Special",            category:"fruit",      tag:"1 kg + ½ kg FREE",  basePrice:1190, originalPrice:1590, offerText:"1 kg + ½ kg FREE",  rating:4.89, img:"./cakes2/cakes2/(13) Facebook.jfif", desc:"Festive seasonal cake with vibrant decorations and fresh cream." },
    { id:32, name:"Vanilla Elegance",           category:"exotic",     tag:"1 kg + ½ kg FREE",  basePrice:1150, originalPrice:1490, offerText:"1 kg + ½ kg FREE",  rating:4.86, img:"./cakes2/cakes2/cake.jfif", desc:"Soft vanilla génoise with silky cream and elegant finishing touches." },
    { id:33, name:"Berry Cream Delight",        category:"fruit",      tag:"1 kg + 1 kg FREE",  basePrice:1250, originalPrice:1650, offerText:"1 kg + 1 kg FREE",  rating:4.90, img:"./cakes2/cakes2/download (4).jfif", desc:"Mixed berry compote swirled through luscious whipped cream layers." },
    { id:34, name:"Premium Chocolate Cake",     category:"chocolate",  tag:"1 kg + 1 kg FREE",  basePrice:1350, originalPrice:1790, offerText:"1 kg + 1 kg FREE",  rating:4.93, img:"./cakes2/cakes2/download (5).jfif", desc:"Rich premium chocolate sponge with velvety ganache and cocoa dust." }
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

  // ===== WEIGHT =====
  window.selectWeight = function(id, weight, el) {
    const card = el.closest('.cake-card');
    card.querySelectorAll('.weight-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    const p = products.find(x => x.id === id);
    if (!p) return;
    let mult = weight === 0.5 ? 0.65 : weight === 2 ? 1.8 : 1;
    document.getElementById(`price-${id}`).textContent = `₹${Math.round(p.basePrice * mult)}`;
    document.getElementById(`orig-${id}`).textContent = `₹${Math.round(p.originalPrice * mult)}`;
  };

  // ===== WHATSAPP ORDER =====
  window.orderWA = function(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const card = document.querySelector(`.cake-card[data-id="${id}"]`);
    const w = card?.querySelector('.weight-btn.active')?.dataset.weight || '1';
    const price = document.getElementById(`price-${id}`).textContent;
    const msg = `Hello Cake Lover! 🎂\nI'd like to order:\n• ${p.name}\n• Weight: ${w} kg\n• Price: ${price} (${p.offerText})\nPlease confirm availability.`;
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

  // ===== SCROLL REVEAL =====
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

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
    { name: 'Chocolate Berry Truffle', img: './cakes2/cakes2/download (8).jfif' },
    { name: 'Red Velvet Royale', img: './cakes/cakes/Red velvet Cake .jfif' },
    { name: 'Belgian Dark Chocolate', img: './cakes/cakes/Dark Chocolate .jfif' },
    { name: 'Nutella Hazelnut', img: './cakes/cakes/caramel chocolate.jfif' },
    { name: 'Black Forest Classic', img: './cakes/cakes/Black forest cake recipe.jfif' },
    { name: 'Strawberry Vanilla Bliss', img: './cakes/cakes/cakestrawberry.jfif' },
    { name: 'Kitkat Almond Crunch', img: './cakes/cakes/download (5).jfif' },
    { name: 'Alphonso Mango', img: './cakes/cakes/Mango Chiffon Cake.jfif' },
    { name: 'White Forest Cream', img: './cakes/cakes/White Forest Cake.jfif' },
    { name: 'Tropical Pineapple', img: './cakes/cakes/Dole Whip Cake.jfif' },
    { name: 'Butterscotch Dream', img: './cakes2/cakes2/butterscotch.jfif' },
    { name: 'Blueberry Blossom', img: './cakes2/cakes2/Blueberry Cake.jfif' },
    { name: 'Rasmalai Special', img: './cakes2/cakes2/rasmalai cake.jfif' },
    { name: 'Red Velvet White Chocolate', img: './cakes2/cakes2/Red Velvet White Chocolate.jfif' },
    { name: 'Dream Cake Special', img: './cakes2/cakes2/Dream cake.jfif' }
  ];

  function initHeroCarousel() {
    const imgEl = document.getElementById('hero-img');
    const dotsContainer = document.getElementById('hero-dots');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const nameEl = document.getElementById('hero-slide-name');
    const counterEl = document.getElementById('hero-slide-counter');
    
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

      // Update Text
      if (nameEl) {
        nameEl.classList.remove('pop');
        void nameEl.offsetWidth; // force reflow
        nameEl.textContent = heroSlides[current].name;
        nameEl.classList.add('pop');
      }
      if (counterEl) counterEl.textContent = `${current + 1} / ${total}`;

      // Update Image with fade
      imgEl.classList.add('fading');
      setTimeout(() => {
        imgEl.src = heroSlides[current].img;
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
  initTimer();
  renderProducts(products);
  initScrollReveal();
  initHeroCarousel();
});
