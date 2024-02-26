let sidebar = document.getElementsByClassName("sidebar")[0];
let sidebar_content = document.getElementsByClassName("contact-form")[0];
let scroll = document.getElementsByClassName("scroll")[0];
var sticky = sidebar.offsetTop

window.onscroll = () => {
    let scrollTop = window.scrollY; // current scroll position
    let viewportHeight = window.innerHeight; //viewport height
    let contentHeight = sidebar_content.getBoundingClientRect().height; // current content height
    let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset; //distance from top to sidebar
   
           

    if(scrollTop >= contentHeight - viewportHeight + sidebarTop) {
        //sidebar_content.style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
        sidebar_content.style.position = "sticky";
        sidebar_content.style.top = 0;
      }
      else {
        sidebar_content.style.transform = "";
        sidebar_content.style.position = "";
      }
    
      console.log("hekko")

}

