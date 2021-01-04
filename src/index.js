import "./styles.css";

let ptag = document.querySelector("p");

let size;

function setSize(newSize) {
  size = newSize;
  ptag.style.fontSize = size + "px";
}

setSize(20);

function handleArrow(event) {
  if (event.key === "ArrowUp") {
    if (size > 200) {
      ptag.textContent = "💥";

      document.body.removeEventListener("keydown", handleArrow);
    } else {
      setSize(size * 1.1);
      event.preventDefault();
    }
  } else if (event.key === "ArrowDown") {
    setSize(size * 0.9);
    event.preventDefault();
  }
}

document.body.addEventListener("keydown", handleArrow);
