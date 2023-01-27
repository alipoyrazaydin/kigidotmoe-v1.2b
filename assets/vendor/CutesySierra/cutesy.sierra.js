var sierra;
class Application{
    constructor(appelem){
        this.applicationElement = appelem;
        this.parent = this.applicationElement;
        this.preloadAudio = function(link){return new Audio(link);}

        this.preloader = function(elem,attr){window.onload = function(){elem.setAttribute(attr,"")}}
        this.warnDev = function(WarningMessage,Styling){this.console.log(WarningMessage, ...Styling);this.console.warn(WarningMessage, ...Styling);}

        this.console = {};
        this.console.styles = {};
        this.console.log = function(...args) {queueMicrotask(console.log.bind(console, ...args));}
        this.console.warn = function(...args) {queueMicrotask(console.warn.bind(console, ...args));}
        this.console.error = function(...args) {queueMicrotask(console.error.bind(console, ...args));}
        this.console.styles.header = "color:#FF2B63; font-size: x-large";
        this.console.styles.default = "font-size: large";
        this.console.styles.codeblock = "background-color:rgba(0,0,0,0.3);border-radius:6px;padding:5px;font-size:large;font-family:monospace;margin-bottom:5px;";
        this.console.styles.codeblockred = "background-color:rgba(255,64,64,0.3);border-radius:6px;padding:5px;font-size:large;font-family:monospace";
    }
    _(func){func.call(this);}
    __(elems,event,func){document.querySelectorAll(elems).forEach(ev => ev.addEventListener(event,function(el){func.call(this,el);}));}


}



(function(){   
    sierra = new Application(document.querySelector("div[app]"));
    sierra.console.log("Initialized Cutesy Sierra!");
    window.sierra = sierra;
})();

