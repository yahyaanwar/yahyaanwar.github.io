hljs.highlightAll();

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


document.addEventListener("scroll", debounce(function (e) {
  if (document.body.getBoundingClientRect().top <= -66) {
    document.body.classList.add("fix-header");
  } else {
    document.body.classList.remove("fix-header");
  }
}, 5));