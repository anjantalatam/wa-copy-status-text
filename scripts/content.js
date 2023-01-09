let initialSpan = document.querySelector(
  "div#app > div > span:nth-child(3)"
)?.innerHTML;

const observer = new MutationObserver(() => {
  const currentSpan = document.querySelector(
    "div#app > div > span:nth-child(3)"
  )?.innerHTML;

  if (currentSpan !== initialSpan) {
    initialSpan = currentSpan;
    init();
  }
});

observer.observe(document, {
  subtree: true,
  childList: true,
});

// init on load
init();

function init() {
  const statusSpan = document.querySelector(
    "div#app > div > span:nth-child(3)"
  );

  if (statusSpan?.innerHTML) {
    const textSpan = statusSpan.querySelector(
      "div > span > div > div > span > div > div > div > div > div._1xAJD > div > div > span"
    );
    // text content found
    console.log(textSpan?.textContent);
  }
}
