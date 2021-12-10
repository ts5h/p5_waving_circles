import isMobile from "ismobilejs"

// Return to top (TYpeScript version)
// Add button into body
const button = document.createElement("div")
button.classList.add("return-to-home")

const anchor = document.createElement("a")
anchor.textContent = "HOME"
anchor.setAttribute("href", "/")
button.appendChild(anchor)

const body = document.querySelector("body")
body.prepend(button)

// On mouse
if (isMobile().any) {
  button.addEventListener("touchstart", () => {
    button.classList.add("on")
  })
  button.addEventListener("touchend", () => {
    button.classList.remove("on")
  })
} else {
  button.addEventListener("mouseover", () => {
    button.classList.add("on")
  })
  button.addEventListener("mouseout", () => {
    button.classList.remove("on")
  })
}

// Change theme
type themeType = {
  type: "dark" | "light"
}

const setTheme = (theme: themeType) => {
  // Dark or Light
  if (theme.type === "light") {
    button.classList.add("light")
  }
}

export default setTheme
