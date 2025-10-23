

 document.querySelector('.nav-toggle').addEventListener("click", () => {
  document.querySelector(".responsiv").classList.toggle("active");
  document.querySelector(".body").classList.toggle('active');
 
});
document.querySelector(".corss-btn").addEventListener("click", () => {
    document.querySelector(".responsiv").classList.remove("active");
  document.querySelector(".body").classList.remove('active');
})
document.querySelector(".main").addEventListener("click", () => {
    document.querySelector(".responsiv").classList.remove("active");
  document.querySelector(".body").classList.remove('active');
})

// forst dropdon
document.querySelector(".clickToOpen").addEventListener("click", () => {
  document.querySelector(".res-drop ul").classList.toggle('active')
})
// second 
document.querySelector(".clickToOpen1").addEventListener("click", () => {
  document.querySelector(".res-drop1 ul").classList.toggle('active')
})
