//DOM CONSTANTS
const hour = document.querySelector(".hour")
const container = document.querySelector(".container")
const minTab  = document.querySelector(".min")
const secTab  = document.querySelector(".sec")
const dateTab  = document.querySelector("#date")
const greet  = document.querySelector("#greet")
const timeflex  = document.querySelector(".flex_1")
// RANDOM COLORS
const colors = ["#31667a","rgb(47 43 101)","rgb(101 43 43)","black","teal"]
// http://source.unsplash.com/daily?orientation=landscape

const form = document.querySelector("form")
const searchbar = document.querySelector("#searchbar")
const timetoggler = document.querySelector("#timetoggler")
const bartoggler = document.querySelector("#bartoggler")

timetoggler.addEventListener("click",()=>{
     if(timeflex.style.display == "none"){
         timeflex.style.display = "flex"
     }else{
        timeflex.style.display = "none"
     }
})
bartoggler.addEventListener("click",()=>{
    if(searchbar.getAttribute("hidden")){
        searchbar.removeAttribute("hidden")

    }else{
        searchbar.setAttribute("hidden","false")
    }
})


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    value = searchbar.value
    value = value.replace(" ", "+")
    other = "&rlz=1C1RXQR_enIN952IN952&oq=google&aqs=chrome.0.69i59j69i57j69i59j0i271l3j69i60l2.714j0j15&sourceid=chrome&ie=UTF-8"
    link = "https://google.com/search?q="+value+ other
    /// opening a new tab
    const hiddenbtn  = document.createElement("a")
    hiddenbtn.setAttribute("href",link)
    hiddenbtn.setAttribute("target" ,"_blank")
    hiddenbtn.setAttribute("hidden","true")
    container.append(hiddenbtn)
    hiddenbtn.click()
})

if(window.navigator.onLine){
    container.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://source.unsplash.com/daily?orientation=landscape')"
}else{
    var random  = Math.round(Math.random()*4)
    container.style.backgroundColor = colors[random]   
}


setInterval(() => {
    var currenttime = Date();
    //parsing and setting the textcontent of the tabs for time
    hour.textContent  = currenttime[16] + currenttime[17]
    minTab.textContent  = currenttime[19] + currenttime[20]
    secTab.textContent  = currenttime[22] + currenttime[23]
    var date = currenttime.substr(0,16).toString()
    dateTab.textContent = date

    
    //condition for greeting
    if(parseInt(hour.textContent) < 12 ){
      greet.textContent = "Good Morning Dilip!"
    }else if(parseInt(hour.textContent)>= 12 & parseInt(hour.textContent)<=15 ){
        greet.textContent = "Good Afternoon Dilip!"
    }else if(parseInt(hour.textContent)>15 & parseInt(hour.textContent)<21){
        greet.textContent = "Good Evening Dilip!"
    }else{
        greet.textContent = "Good Night Dilip!"
    }

}, 1000);
