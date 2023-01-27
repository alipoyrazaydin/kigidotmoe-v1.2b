sierra._(function(){
    var Navbar = document.querySelector(".navigationbar");
       
    window.sierra.setPercentage = function(percent){Navbar.setAttribute("style","--pr: "+percent+"vw");}
    window.sierra.resetPercentage = function(){Navbar.setAttribute("style","--pr: 0vw");}

    window.sierra.preloadAudio("assets/media/Button Click.wav");
    window.sierra.preloadAudio("assets/media/Button Hover.wav");
    window.sierra.preloadAudio("assets/media/CottoCode Click.wav");

    window.sierra.openModal = function(modalData){var moda = document.querySelector('[data-modal="'+modalData+'"]');moda.classList.add("openModal");moda.innerHTML = atob(moda.getAttribute("data-modal-data"));}
    window.sierra.closeModal = function(modalData){var moda = document.querySelector('[data-modal="'+modalData+'"]');moda.classList.remove("openModal");moda.innerHTML = "";}

    window.sierra.preloader(document.querySelector("[preloader]"),"_");
    window.sierra.warnDev("%cひや! ヽ(o＾▽＾o)ノ\n%cBu alanda gezmenin sebebi umarım dosyaları çalmak veya kodları almak için değildir. Buraya daha başka şeyler veya internetten bulduğun rastgele kodları yazman, verilerinin çalınmasına sebep olabilir.\n\nEğer cidden ne yaptığını biliyorsan, devam edebilirsin, İstersen seninle beraber çalışabiliriz ve güzel projeler ortaya koyabiliriz! \n\n%cpoyraz@cottocode.com.tr%c\n%chttps://cottocode.com.tr",[window.sierra.console.styles.header, window.sierra.console.styles.default, window.sierra.console.styles.codeblock, window.sierra.console.styles.default, window.sierra.console.styles.codeblockred]);

    window.sierra.cottocode = function(){window.open('https://cottocode.com.tr/','_blank');new Audio('assets/media/CottoCode Click.wav').play();}

    sierra.__("a","click",function(event){
        var a = (this.getAttribute("special") == "cottocode" ? new Audio("assets/media/CottoCode Click.wav") : new Audio("assets/media/Button Click.wav"));
        a.play();
        var that = this;
        if(this.getAttribute("href").startsWith("#")){
          event.preventDefault();
          const topPos = (this.getAttribute("href") === "#" ? 0 : document.querySelector(this.getAttribute("href")).getBoundingClientRect().top + window.pageYOffset - 100);

          window.scrollTo({
            top: topPos, // scroll so that the element is at the top of the view
            behavior: 'smooth' // smooth scroll
          });
        } else {
          if (this.getAttribute("special") == "cottocode"){
            event.preventDefault();
            setTimeout(function(){window.location.href = that.getAttribute("href")},500);}
            window.sierra.setPercentage(100);setTimeout(function(){window.sierra.resetPercentage();},5000);
        }
    });
    sierra.__("a","mouseenter",function(event){
      new Audio("assets/media/Button Hover.wav").play();
  });
    const menu = document.querySelector("[contextbox]");
    const vars = document.querySelectorAll("[contextbox] act");
    let menuVisible = false;
    function getSelectedText() {
        if (window.getSelection) {return window.getSelection();}
        else if (document.getSelection) {return document.getSelection();}
        else if (document.selection) {return document.selection.createRange().text;} 
        else return null;
    }
    const toggleMenu = function(command){
      menu.style.display = command === "show" ? "block" : "none";
      menuVisible = command === "show" ? true : false;
    };

const setPosition = function({top,left}){
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  toggleMenu("show");
};
var modal = document.querySelectorAll('.modal');
window.addEventListener("click", function(e){
  if (menuVisible) toggleMenu("hide");
  modal.forEach(function(ds){
    if (e.target == ds){
      window.sierra.closeModal(ds.getAttribute("data-modal"));
    }
  });
  
});
vars.forEach(function(ed){
    ed.addEventListener("click",function(){window.handleContextMenuEvent(ed);})
});
window.handleContextMenuEvent = function(e){
    switch (e.getAttribute("type")){
        case "eval":
            eval(e.getAttribute("act"));break;
        case "link":
            window.sierra.setPercentage(100);window.location.href=e.getAttribute("href");setTimeout(function(){window.sierra.resetPercentage();},5000);break;
        case "copy_clipboard":
           if (getSelectedText() !== null) navigator.clipboard.writeText(getSelectedText());break;
    }

}
window.addEventListener("contextmenu", function(e){
  e.preventDefault();
  const origin = {
    left: (e.clientX + menu.clientWidth > window.innerWidth ? window.innerWidth - menu.clientWidth : e.clientX),
    top: (e.clientY + menu.clientHeight > window.innerHeight ? window.innerHeight - menu.clientHeight : e.clientY)
  };
  setPosition(origin);
  return false;
});

});
    