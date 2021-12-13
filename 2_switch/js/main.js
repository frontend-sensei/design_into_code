function initSwitch() {
  const button = document.querySelector(".switch")
  if(!button) {
    return console.error(`Switch button ".switch" not exists!`)
  }

  function toggleSwitch() {
    button.classList.toggle("switch--active")
    button.classList.toggle("switch--not-active")
  }
  function toggleSwitchInitial() {
    button.classList.add("switch--active")
    button.removeEventListener("click", toggleSwitchInitial)
    button.addEventListener("click", toggleSwitch)
  }

  button.addEventListener("click", toggleSwitchInitial)
}

initSwitch()
