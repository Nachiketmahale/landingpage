function scrolled(){
    console.log('hiiii');
    if(document.body.scrollTop>40||document.documentElement.scrollTop>40){
      document.querySelector('header').classList.add('newheader');
    }
    else{
        document.querySelector('header').classList.remove('newheader');
      }
  }
  window.onscroll=function(){
      scrolled();

  }