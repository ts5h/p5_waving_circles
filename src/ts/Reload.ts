import isMobile from "ismobilejs"

// Reload
const Reload = document.querySelector(".reload")

Reload.addEventListener("click", () => {
  window.location.reload()
})

if (isMobile().any) {
  Reload.addEventListener("touchstart", () => {
    Reload.classList.add("on")
  })
  Reload.addEventListener("touchend", () => {
    Reload.classList.remove("on")
  })
} else {
  Reload.addEventListener("mouseover", () => {
    Reload.classList.add("on")
  })
  Reload.addEventListener("mouseout", () => {
    Reload.classList.remove("on")
  })
}
