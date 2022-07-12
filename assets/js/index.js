// document.getElementById('nav-toggle-btn').
// header animation
function scrolled(){
    if(document.body.scrollTop>40||document.documentElement.scrollTop>40){
      document.querySelector('header').classList.add('newheader');
    }
    else{
        document.querySelector('header').classList.remove('newheader');
      }
  }
window.onscroll=()=>{
  scrolled();
}

function closednav(){
  document.getElementsByClassName('mobile-nav')[0].classList.toggle('showheader');
}
function navbtnclicked(){
  document.getElementsByClassName('mobile-nav')[0].classList.toggle('showheader');
  document.getElementById('nav-toggle-btn').classList.toggle('opened');
  document.querySelector('#nav-toggle-btn span').classList.toggle('gray');
}

// header animation end

// document.getElementById('coursescontainer').scrollIntoView(true);

function scrollleft(){
  console.log('hi');
  const scrollercontainer=document.getElementById('what-we-offer-bottom-top');
  console.log(scrollercontainer);
  scrollercontainer.scrollBy(500,0);
}

function scrollright(){
  console.log('hi');
  const scrollercontainer=document.getElementById('what-we-offer-bottom-top');
  console.log(scrollercontainer);
  scrollercontainer.scrollBy(0,500);
}