let initialSpan = document.querySelector(
  "div#app > div > span:nth-child(3)"
)?.innerHTML;

function waitForElm(selector, opts) {
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

    const options = opts ?? {
      childList: true,
      subtree: true,
    };

    observer.observe(document.body, options);
  });
}

waitForElm("div#app > div > span:nth-child(3)").then((statusTab) => {
  let isStatusTab = false;
  console.log("element found");
  const statusObserver = new MutationObserver(() => {
    isStatusTab = !isStatusTab;
    console.log("status opened/closed", isStatusTab);

    waitForElm("div#app > div > span:nth-child(3) > div > span> div").then(
      (statusTextElm) => {
        console.log("found", statusTextElm);
        const statusDivObserver = new MutationObserver((mutations) => {
          console.log("text/video seen", mutations);

          const statusText = document.querySelector(
            "#app > div > span:nth-child(3) > div > span > div > div > span > div > div > div > div > div:nth-child(5) > div > div > span"
          );

          if (statusText) {
            console.log(statusText.innerText, "textt");
          }
        });

        statusDivObserver.observe(
          document.querySelector(
            "div#app > div > span:nth-child(3) > div > span"
          ),
          {
            childList: true,
          }
        );
      }
    );
  });

  statusObserver.observe(statusTab, {
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
