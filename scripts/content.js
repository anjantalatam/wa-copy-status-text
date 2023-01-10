let initialSpan = document.querySelector(
  "div#app > div > span:nth-child(3)"
)?.innerHTML;

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm("div#app > div > span:nth-child(3)").then((elm) => {
  console.log("element found");
  const observer = new MutationObserver(() => {
    console.log("navigated from home to status or status to home");
    // init();
  });

  observer.observe(elm, {
    subtree: false,
    childList: true,
  });
});

function init() {
  const statusSpan = document.querySelector(
    "div#app > div > span:nth-child(3)"
  );

  const statusControls = document.querySelector(
    "div#app > div > span:nth-child(3) > div > span > div > div > span > div > div > div > div > div._1DNOU.ib1vZ > div.SU2X1 > div"
  );

  const copyButton = document.createElement("button");
  copyButton.innerText = "Copy";

  if (statusControls) {
    statusControls.appendChild(copyButton);
    statusControls.style.backgroundColor = "green";
  }

  if (statusSpan?.innerHTML) {
    const textSpan = statusSpan.querySelector(
      "div > span > div > div > span > div > div > div > div > div._1xAJD > div > div > span"
    );
    // text content found

    const statusText = textSpan?.textContent;
    console.log(textSpan?.textContent);
  }
}
