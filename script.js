// Blog section Getting Elements 
let blogSectionButton = document.querySelector('#blogBtn');
let homeSection = document.querySelector('#home');

// Blog section Hide elements 
let homeContet = document.querySelector('.home_content');
let scrollButton = document.querySelector('.scroll_button');
let firstPage = document.querySelector('.page_1');

// Blog section show elements 
let blogSectionContent = document.querySelector('.page_2');

// categories section button 
let categoriesBtn = document.querySelector('#categoriesBtn');

// products section button 
let productsBtn = document.querySelector('#productsBtn');

// navigation, getting elements 
let menu = document.querySelector('#menuBtn .menu');
let closeMenu = document.querySelector('#menuBtn .close_menu');
let sideNav = document.querySelector('.sideNav');

// Customer review - getting elements 
let customerReviewSlide1 = document.querySelector('.slide1');
let customerReviewSlide2 = document.querySelector('.slide2');
let customerReviewSlide3 = document.querySelector('.slide3');
let customerReviewSlide4 = document.querySelector('.slide4');
let leftArowButton = document.querySelector('.fa-arrow-left');
let rightArowButton = document.querySelector('.fa-arrow-right');
let reviewContainer = document.querySelector('.review_container');

let slideStatus = 1;
let timerLoop = 5000;

// navigatipn function
let openMenu = () => {
  sideNav.style.height = '400px';
  menu.style.display = 'none';
  closeMenu.style.display = 'flex';
};

let foldMenu = () => {
  sideNav.style.height = '0';
  menu.style.display = 'flex';
  closeMenu.style.display = 'none';
};

menu.addEventListener('click', () => {
  openMenu();
});

closeMenu.addEventListener('click', () => {
  foldMenu();
});

// Scroll down arrow function 
let arrowButtonLoop = () => {
  let circle = document.querySelector('.scroll_button');
  circle.style.height = '70px';
  circle.style.width = '70px';

  if( (circle.style.height == '55px') && (circle.style.width == '55px') ){
    setTimeout(() => {
      circle.style.height = '70px';
      circle.style.width = '70px';
    }, 1000);
  }else if((circle.style.height == '70px') && (circle.style.width == '70px')){
    setTimeout(() => {
      circle.style.height = '55px';
      circle.style.width = '55px';
    }, 1000);
  }
};

setInterval(arrowButtonLoop, 5000);

// customer review Animation
let c_reviewSlideLoop = () => {
  if (slideStatus === 1) {
    setTimeout(() => {
      customerReviewSlide1.style.opacity = '1';
      customerReviewSlide2.style.opacity = '0';
      customerReviewSlide3.style.opacity = '0';
      customerReviewSlide4.style.opacity = '0';
    }, 500);
    
    slideStatus = 2;
  }

  else if (slideStatus === 2) {
    setTimeout(() => {
      customerReviewSlide1.style.opacity = '0';
      customerReviewSlide2.style.opacity = '1';
      customerReviewSlide3.style.opacity = '0';
      customerReviewSlide4.style.opacity = '0';
    }, 500);
    
    slideStatus = 3;
  }

  else if (slideStatus === 3) {
    setTimeout(() => {
      customerReviewSlide1.style.opacity = '0';
      customerReviewSlide2.style.opacity = '0';
      customerReviewSlide3.style.opacity = '1';
      customerReviewSlide4.style.opacity = '0';
    }, 500);
    
    slideStatus = 4;
  }

  else if (slideStatus === 4) {
    setTimeout(() => {
      customerReviewSlide1.style.opacity = '0';
      customerReviewSlide2.style.opacity = '0';
      customerReviewSlide3.style.opacity = '0';
      customerReviewSlide4.style.opacity = '1';
    }, 500);
    
    slideStatus = 1;
  }
};

let c_reviewLoopStart = setInterval(c_reviewSlideLoop, timerLoop);

leftArowButton.addEventListener('click', () => {
  if (slideStatus === 1) {
    slideStatus = 3;
  }

  else if (slideStatus === 2) {
    slideStatus = 4;
  }

  else if (slideStatus === 3) {
    slideStatus = 1;
  }

  else if (slideStatus === 4) {
    slideStatus = 2;
  }
  c_reviewSlideLoop();
});

rightArowButton.addEventListener('click', () => {
  c_reviewSlideLoop();
});

rightArowButton.onmouseover = () => {
  clearInterval(c_reviewLoopStart);
};

leftArowButton.onmouseover = () => {
  clearInterval(c_reviewLoopStart);
};

rightArowButton.onmouseleave = () => {
  c_reviewLoopStart = setInterval(c_reviewSlideLoop, timerLoop);
};

leftArowButton.onmouseleave = () => {
  c_reviewLoopStart = setInterval(c_reviewSlideLoop, timerLoop);
};

reviewContainer.onmouseover = () => {
  clearInterval(c_reviewLoopStart);
};

// Blog Section function 
blogSectionButton.addEventListener('click', () => {
  homeSection.classList.add('homeTransform');
  firstPage.classList.add('hide');
  homeContet.classList.add('hide');
  scrollButton.classList.add('hide');

  blogSectionContent.classList.add('active');
  foldMenu();
});

// categories section button onclick function 
categoriesBtn.addEventListener('click', () => {
  homeSection.classList.remove('homeTransform');
  firstPage.classList.remove('hide');
  homeContet.classList.remove('hide');
  scrollButton.classList.remove('hide');

  foldMenu();
});

// products section button onlick function 
productsBtn.addEventListener('click', () => {
  homeSection.classList.remove('homeTransform');
  firstPage.classList.remove('hide');
  homeContet.classList.remove('hide');
  scrollButton.classList.remove('hide');

  foldMenu();
});