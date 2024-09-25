document.getElementById("search").onsubmit = () => {
  // TODO://
  alert("TODO:@ script.js //");
  return false;
};

renderSearchOptions();

renderLargeImages();

renderInteractiveAnimations();

// function definations

function renderSearchOptions() {
  const destinations = ["Darjeeling", "Sikkim"];
  const searchOptions = document.getElementById("search-options");
  const fragment = document.createDocumentFragment();

  destinations.forEach((item) => {
    var option = document.createElement("option");
    option.value = item;
    fragment.appendChild(option);
  });
  searchOptions.appendChild(fragment);
}

function renderLargeImages() {
  document.querySelectorAll("img[data-src]").forEach((img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
  });
}

function renderInteractiveAnimations() {
  new FinisherHeader({
    count: 10,
    size: { min: 1300, max: 1500, pulse: 0, },
    speed: {
      x: { min: 0.1, max: 0.6, },
      y: { min: 0.1, max: 0.6, },
    },
    colors: {
      background: "#9138e5",
      particles: ["#ff4848", "#000000", "#2235e5", "#000000", "#ff0000"],
    },
    blending: "overlay",
    opacity: { center: 0.5, edge: 0.05, },
    skew: -2,
    shapes: ["c"],
  });

  document.body.onpointermove = (ev) => {
    const { currentTarget: el, clientX: x, clientY: y } = ev;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty("--posX", x - l - w / 2);
    el.style.setProperty("--posY", y - t - h / 2);
  };
}
