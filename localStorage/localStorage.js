// set (add)item
window.localStorage.setItem("name","mustapha ")
window.localStorage.lastname=" ben khelifa"
window.localStorage.hobbies='cycling'
window.localStorage.color='red'
window.localStorage['free day']='saturday'
// remove item
window.localStorage.removeItem("color")
// get item
 console.log(window.localStorage.getItem('hobbies'))
 console.log(window.localStorage['name'])
 console.log(window.localStorage.lastname)
// set name in page
document.body.style.backgroundColor=window.localStorage.getItem("color")

// clear
window.localStorage.clear() // we use it to remove everything in the object within the page 


// get key 
console.log(window.localStorage.key(index))



console.log(window.localStorage)
console.log(typeOf (window.localStorage))