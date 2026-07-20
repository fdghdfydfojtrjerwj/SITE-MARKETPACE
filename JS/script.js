document.addEventListener('DOMContentLoaded', () => {

  // ============ РОЗСИЛКА ПО EMAIL ============
  const btn = document.getElementById('newsletter-btn');
  const input = document.getElementById('newsletter-email');
  const status = document.getElementById('email-status');

  function showStatus(msg, type) {
    status.textContent = msg;
    status.className = 'email-status ' + type;
    status.style.display = 'block';
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const email = input.value.trim();

      if (!email || !email.includes('@')) {
        showStatus('Please enter a valid email.', 'error');
        return;
      }

      showStatus('', '');
      input.value = '';
      btn.textContent = '✓ Subscribe to newsletter';
    });
  }

  // ============ ФІЛЬТРИ ============
  const applyBtn = document.getElementById('apply-filters');
  if (applyBtn) {
    applyBtn.addEventListener('click', applyFilters);
  }

  // ============ ВКЛАДКИ ============
  document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const id = this.dataset.tab;
    document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
    document.getElementById('tab-' + id).style.display = 'block';
  });
 });

});



// ============ КОНТРОЛЬ КІЛЬКОСТІ ТОВАРУ ============
let qtyDecrease = document.querySelector('.qty-decrease');
let qtyIncrease = document.querySelector('.qty-increase');
let qtyValue = document.querySelector('.qty-value');

const aspireprice = document.getElementById('product-price-aceraspire');
const dellxps15price = document.getElementById('product-price-dellxps15');
const macpro16price = document.getElementById('product-price-mac-pro16');
const hp15price = document.getElementById('product-price-hp15');
const lenovoslim5price = document.getElementById('product-price-lenovo-slim5');
const macair13price = document.getElementById('product-price-mac-air13');
const macair15price = document.getElementById('product-price-mac-air15');
const macneoprice = document.getElementById('product-price-macneo');
const macpro14price = document.getElementById('product-price-mac-pro14');
const AIRPODS3price = document.getElementById('product-price-airpods-3');
const AIRPODS4price = document.getElementById('product-price-airpods-4');
const AIRPODSMAX2 = document.getElementById('product-price-airpods-max-2');
const APPLEAIRTAG2price = document.getElementById('product-price-apple-airtag-2');
const APPLEKEYBOARDprice = document.getElementById('product-price-apple-keyboard');
const APPLEMOUSEprice = document.getElementById('product-price-apple-mouse');
const APPLEPOWERADAPTERprice = document.getElementById('product-price-apple-power-adapter');
const ATTACKSHARKR5ULTRAPrice = document.getElementById('product-price-attack-shark-r5-ultra');
const ATTACKSHARKX11Price = document.getElementById('product-price-attack-shark-x11');
const ENERGIZERWCP307price = document.getElementById('product-price-energizer-wcp307');
const HATORHYPERPUNK3price = document.getElementById('product-price-Hator-hyperpunk-3');
const HOCOI4OAJTONYprice = document.getElementById('product-price-hoco-i4oaj-tony');
const JBLWAVEBEAM2price = document.getElementById('product-price-jbl-wave-beam-2');
const AULAF75price = document.getElementById('product-price-aula-f75');
const MARSHALLprice = document.getElementById('product-price-marshall');
const QPROOVEHOODMANprice = document.getElementById('product-price-qproove-hoodman');
const SAMSUNGBUDS3PROprice = document.getElementById('product-price-samsung-buds3-pro');
const XIAOMIHYPERCHARGEprice = document.getElementById('product-price-xiaomi-hypercharge');

const products = [
  { el: aspireprice,            base: 1529 },
  { el: dellxps15price,         base: 2000 },
  { el: macpro16price,          base: 2499 },
  { el: hp15price,              base: 500  },
  { el: lenovoslim5price,       base: 900  },
  { el: macair13price,          base: 1100 },
  { el: macair15price,          base: 1200 },
  { el: macneoprice,            base: 350  },
  { el: macpro14price,          base: 1550 },
  { el: AIRPODS3price,          base: 200  },
  { el: AIRPODS4price,          base: 289  },
  { el: AIRPODSMAX2,            base: 400  },
  { el: APPLEAIRTAG2price,      base: 40   },
  { el: APPLEPOWERADAPTERprice, base: 22   },
  { el: APPLEKEYBOARDprice,     base: 128  },
  { el: APPLEMOUSEprice,        base: 90   },
  { el: ATTACKSHARKR5ULTRAPrice,base: 60   },
  { el: ATTACKSHARKX11Price,    base: 22   },
  { el: ENERGIZERWCP307price,   base: 26   },
  { el: HATORHYPERPUNK3price,   base: 63   },
  { el: HOCOI4OAJTONYprice,     base: 14   },
  { el: JBLWAVEBEAM2price,      base: 50   },
  { el: AULAF75price,           base: 57   },
  { el: MARSHALLprice,          base: 107  },
  { el: QPROOVEHOODMANprice,    base: 35   },
  { el: SAMSUNGBUDS3PROprice,   base: 150  },
  { el: XIAOMIHYPERCHARGEprice, base: 49   },
];

let quantity = 1;

function updateQuantity() {
  if (qtyValue) qtyValue.textContent = quantity;
  if (qtyDecrease) qtyDecrease.disabled = quantity <= 1;

  products.forEach(({ el, base }) => {
    if (el) el.textContent = `$${base * quantity}`;
  });
}

qtyDecrease?.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
});

qtyIncrease?.addEventListener('click', () => {
  quantity++;
  updateQuantity();
});

updateQuantity();

const logoImg = document.getElementById('logo');

logoImg.addEventListener('click', function() {
    // 3. Перенаправляємо користувача на іншу сторінку
    window.location.href = '/site/HTML-HEARTH/index.html'; 
});

function seeAllLaptops(el) {
  window.location.href = '/site/HTML-HEARTH/shop.html';
}

function openAccount(el) {
  window.location.href = '/site/HTML-HEARTH/account.html';
}

function openShop(el) {
  window.location.href = '/site/HTML-HEARTH/cart.html';
}


  function loginWithGoogle() {
  const clientId = '291774604217-c6s34f1oqvb1jp1osmars6h5gtj3mr80.apps.googleusercontent.com';
  const redirectUri = 'http://127.0.0.1:5500/site/HTML-HEARTH/account.html';
  const scope = 'openid email profile';

  const url = 'https://accounts.google.com/o/oauth2/v2/auth?' +
    'client_id=' + clientId +
    '&redirect_uri=' + encodeURIComponent(redirectUri) +
    '&response_type=code' +
    '&scope=' + encodeURIComponent(scope);

  window.open = url;
}

// Оголошуємо ЗОВНІ — глобальні змінні
let selectedColor = null;
let selectedStorage = null;

const colorProduct = document.querySelector('.block-buttons');
const buttonsStorage = document.querySelector('.info-block-Storage');
const model = document.querySelector('.text-label')
const buyButton = document.querySelector('.Storage-5');
const Price = document.querySelector('#product-price-acer-chromebook');

// Color
colorProduct.addEventListener('click', (event) => {
  const btn = event.target.closest('button');
  if (!btn) return;

  colorProduct.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  selectedColor = btn.className; 
});

// Storage
buttonsStorage.addEventListener('click', (event) => {
  const btn = event.target.closest('button');
  if (!btn) return;

  buttonsStorage.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  selectedStorage = btn.textContent.trim(); 
});


buyButton.addEventListener('click', () => {
  console.log(selectedColor, selectedStorage); 

  const confirmed = confirm("please check your info" + "\n" +
    "STORAGE: " + selectedStorage + "\n" +
    "COLOR: " + selectedColor + "\n" +
    "MODEL: " + model.textContent + "\n"
    );

    if (confirmed == true) {
      window.location.href = '/site/HTML-HEARTH/order-processing.html';
      payPrice.innerHTML = base;
    }
});


// ===============SubimPromo=========================== //
function SubtimPromo() {
  const secretpromo = "BINARYSECRET15";
  let inputUser = document.querySelector('.promo-input').value.trim();

  if (inputUser === secretpromo) {
    console.log("promo true!");
    // логіка застосування знижки
  } else {
    console.log("promo invalid, try again");
    // показати помилку користувачу
  }
}



// ====================subtimChangesButton===================== //
function subtimChangesButton() {
  let confirm2 = confirm("You sure?");

  if (confirm2) {
    window.open('/site/HTML-HEARTH/index.html');
  } else {
    console.log("you canceled operation");
  }
}

// =================payOperation================= //
function payOperation() {

const cardNumber = document.querySelector('input[placeholder= "Card number"]').value.trim();
const MmYy = document.querySelector('input[placeholder= "MM / YY"]').value.trim();
const cvv = document.querySelector('input[placeholder= "CVV"]').value.trim();
const firstName = document.querySelector('input[placeholder= "First name"]').value.trim();
const lastName = document.querySelector('input[placeholder = "Last name"]').value.trim();
const address = document.querySelector('input[placeholder = "Address"]').value.trim();
const postalCode = document.querySelector('input[placeholder = "Postal code').value.trim();

 if (!cardNumber || !MmYy || !cvv || !firstName || !lastName || !address || !postalCode) {
    alert("Please enter all fields");
    return;

  } else if(cardNumber.length < 19) {
   alert("your enter card number is small try again");
   return;

  } else if(cardNumber.length > 20) {
    alert("your enter card number is small try again");
    return;

  } else if(MmYy.length > 5) {
    alert("your MMYY is big try again");
    return;

  } else if(MmYy.length < 5) {
    alert("your MMYY is big try again");
    return;

  } else if(cvv.length > 4) {
    alert("your CVV is big try again");
    return;

  } else if(cvv.length < 3) {
    alert("your CVV is small try again");
    return;

  } else if(firstName.length > 50) {
    alert("your first name is big try again");
    return;

  } else if(firstName.length < 3) {
    alert("your first name is small try again");
    return;

  } else if(lastName.length > 50) {
    alert("your last name is small try again");
    return;

  } else if(firstName.length < 3) {
    alert("your first name is small try again");
    return;

  } else if(address.length > 100) {
    alert("your first addres is big try again");
    return;

  } else if(address.length < 5) {
    alert("your first addres is small try again");
    return;
  
  } else if(postalCode.length < 4) {
    alert("your first  is small try again");
    return;

  } else if(postalCode.length > 10) {
    alert("your postal code is big try again");
    return;
    
  }

let verification = confirm("Please check input info" + "\n"
  + "CARD NUMBER: " + cardNumber + "\n"
  + "MMYY: " + MmYy + "\n"
  + "CVV: " + cvv + "\n"
  + "FIRST NAME: " + firstName + "\n"
  + "LAST NAME: " + lastName + "\n"
  + "ADDRESS: " + address + "\n"
  + "POSTAL CODE: " + postalCode + "\n"
);

if (verification == true) {
  window.open('/site/HTML-HEARTH/succesfull-pay.html');
} else {
  alert("you canceled pay.");
  return;
  
}}

const colorButtons = document.getElementsByClassName('block-buttons');

function changeColor(btn) {
  document.querySelectorAll('.block-buttons button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('mainImg').src = btn.dataset.image;
}

// ====================search=================== //

 class Category {
  constructor(name, slug) {
    this.name = name;
    this.slug = slug;
  }
}

const categories = [
  new Category("Ноутбуки Apple", "apple"),
  new Category("Ноутбуки для бізнесу", "business"),
  new Category("Ігрові ноутбуки", "gaming"),
  new Category("Ноутбуки Acer", "acer"),
  new Category("Ноутбуки HP", "hp"),
  new Category("Хромбуки", "chromebooks"),
  new Category("Айфони", "iphone"),
];

const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('searchSuggestions');

function renderSuggestions(query) {
  const shown = categories.slice(0, 4);

  if (!query) {
   
    suggestionsBox.innerHTML = shown.map(cat => `
      <a href="/search?category=${encodeURIComponent(cat.slug)}" class="suggestion-item">
        🔍 ${cat.name}
      </a>
    `).join('');
  } else {
    suggestionsBox.innerHTML = shown.map(cat => `
      <a href="/search?q=${encodeURIComponent(query)}&category=${encodeURIComponent(cat.slug)}" class="suggestion-item">
        ${query} в категорії ${cat.name}
      </a>
    `).join('');
  }

  suggestionsBox.classList.add('active');
}

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim();
  renderSuggestions(query);
});

searchInput.addEventListener('focus', (e) => {
  const query = e.target.value.trim();
  renderSuggestions(query);
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-bar')) {
    suggestionsBox.classList.remove('active');
  }
});

const payPrice = document.querySelector('#total-price-label');




