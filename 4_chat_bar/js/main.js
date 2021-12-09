function initMessageBar() {
  const button = document.querySelector(".message-bar__button")
  const messageBar = document.querySelector(".message-bar")
  if(!button) {
    return console.error(`MessageBar buttton ".message-bar__button" not exists!`)
  }

  function toggleMessageBar(event) {
    const input = document.querySelector(".message-bar__input")
    messageBar.classList.toggle("message-bar--active")
    input.toggleAttribute("disabled")
    const attachmentInputs = [...document.querySelectorAll(".message-bar__attachment-input")]
    attachmentInputs.forEach(input => input.toggleAttribute("disabled"))
  }

  function detectMessageBarWidth() {
    const width = messageBar.getBoundingClientRect().width
    messageBar.style.setProperty("--message-bar-width", `${width}px`)
  }

  window.addEventListener("resize", detectMessageBarWidth)
  button.addEventListener("click", toggleMessageBar)
  detectMessageBarWidth()
}

initMessageBar()
