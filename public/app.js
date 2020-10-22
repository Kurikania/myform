// The first tab is zero
let currentTab = 0; 
let t = document.getElementsByClassName("tab"); 
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
showtab(currentTab); 


// n is a number of a tab . Initaly all tabs are hidden
function showtab(n) {
t[n].style.display = "block"
// showing the right buttons 
if(n == 0) {
    prevBtn.style.display = "none";  // if it is the first tab, there is no prev button 
} else {
    prevBtn.style.display = "inline"
}
if (n == (t.length - 1)){ // if it is thr last tab
    nextBtn.innerHTML = "Submit"
} 
else {
  nextBtn.innerHTML = "Next"  
}

}

// in the html we have nextPrev function on click 

function nextPrev (n) { // on prev button n = -1 , on  next btn n = 1 
    t[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= t.length){
        document.getElementById("form").submit()
        return false 
    }
    showtab(currentTab)
}