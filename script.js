const theme = document.querySelector(":root");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.currentTarget.classList;
    if (color.contains("btn1")) {
      theme.style.setProperty("--theme-color", "rgb(59, 139, 231)");
    } else if (color.contains("btn2")) {
      theme.style.setProperty("--theme-color", "rgb(233, 13, 104)");
    } else if (color.contains("btn3")) {
      theme.style.setProperty("--theme-color", "rgb(6, 155, 86)");
    } else if (color.contains("btn4")) {
      theme.style.setProperty("--theme-color", "rgb(227, 241, 22)");
    } else if (color.contains("btn5")) {
      theme.style.setProperty("--theme-color", "rgb(128, 0, 128)");
    }
  });
});
