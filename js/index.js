const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// update navigation

let links = document.querySelectorAll('nav a');
console.log(links)

links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];
links.forEach(link =>{
  link.style.color = '#26bf1b';
})

// create append

let navLink = document.querySelector('nav');

let appenlink = document.createElement('a');
appenlink.textContent = "Log In";
navLink.append(appenlink)
appenlink.style.color = '#26bf1b'

 // create prepend 

 let prepenlink = document.createElement('a')
 prepenlink.textContent = 'Profile';
 navLink.prepend(prepenlink);
 prepenlink.style.color = '#26bf1b'




// update cta Section 

let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1']


let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta['button'];


let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];





//update main-content Section

let mainText = document.querySelectorAll('.text-content h4');
console.log(mainText)
mainText[0].textContent = siteContent['main-content']['features-h4'];
mainText[1].textContent = siteContent['main-content']['about-h4'];
mainText[2].textContent = siteContent['main-content']['services-h4'];
mainText[3].textContent = siteContent['main-content']['product-h4'];
mainText[4].textContent = siteContent['main-content']['vision-h4'];

let mainP = document.querySelectorAll('.text-content p');
mainP[0].textContent = siteContent['main-content']['features-content']
mainP[1].textContent = siteContent['main-content']['about-content']
mainP[2].textContent = siteContent['main-content']['services-content']
mainP[3].textContent = siteContent['main-content']['product-content']
mainP[4].textContent = siteContent['main-content']['vision-content']

let mainImg = document.querySelector('#middle-img');
mainImg.src = siteContent['main-content']['middle-img-src']



// update contact Section

let contText = document.querySelector('.contact h4');
contText.textContent = siteContent['contact']['contact-h4'];

let contP = document.querySelectorAll('.contact p');
contP[0].textContent = siteContent['contact']['address']
contP[1].textContent = siteContent['contact']['phone']
contP[2].textContent = siteContent['contact']['email']



// update footer Section

let footerSection = document.querySelector('footer p');
footerSection.textContent = siteContent['footer']['copyright'];

