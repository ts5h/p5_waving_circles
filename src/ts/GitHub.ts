import isMobile from "ismobilejs"

// Link to GitHub
const link = document.querySelector(".github")

if (isMobile().any) {
  link.addEventListener("touchstart", () => {
    link.classList.add("on")
  })
  link.addEventListener("touchend", () => {
    link.classList.remove("on")
  })
} else {
  link.addEventListener("mouseover", () => {
    link.classList.add("on")
  })
  link.addEventListener("mouseout", () => {
    link.classList.remove("on")
  })
}
