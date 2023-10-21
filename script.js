const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");

  function updateRangePercent(slider, result) {
    return function () {
      const rangePercent = slider.value + "%";
      result.textContent = rangePercent;
    };
  }

  sliders.forEach(function (slider) {
    const result = slider.nextElementSibling; // Assumes the result is the next element
    const update = updateRangePercent(slider, result);

    // Initial call to set the value on page load
    update();

    slider.addEventListener("input", update);
    slider.addEventListener("change", update);
  });
});
