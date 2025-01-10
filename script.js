function adjustFooter(){
    const content= document.getElementById("topp6");
    const footer= document.getElementById("footer");

    const windowHeight = window.innerHeight;
    const contentHeight = content.offsetHeight + footer.offsetHeight;

    if(contentHeight < windowHeight){
        content.style.minHeight = `${windowHeight - footer.offsetHeight}px`;
    }   else {
        content.style.minHeight = "auto";
    }
}


// window.addEventListener("resize", adjustFooter);
// window.addEventListener("load", adjustFooter);