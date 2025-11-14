(() => {
  const $nav = document.getElementById("nav");

  function getHtmlForNav(navItems) {
    let html = "";
    for (const item of navItems) {
      const target = item.name === "Events" ? "" : 'target="_blank"';
      html += `
    <a href = "${item.link}"${target}>${item.name}</a>
    `;
    }
    return html;
  }
  $nav.innerHTML = getHtmlForNav(navItems);
})();

(() => {
  const $clock = document.getElementById("clock");

  function time(number) {
    return String(number).padStart(2, "0");
  }

  function generateCountdownClock(epoch) {
    const now = Date.now();
    const difference = epoch - now;

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = time(Math.floor((totalSeconds % 86400) / 3600));
    const minutes = time(Math.floor((totalSeconds % 3600) / 60));
    const seconds = time(totalSeconds % 60);

    $clock.innerHTML = `${days} days ${hours}h ${minutes}m ${seconds}s`;
  }

  generateCountdownClock(1787731200000);
  setInterval(() => generateCountdownClock(1787731200000), 1000);
})();

(() => {
  const $nextYear = document.getElementById("nextYear");

  function getHtmlForText() {
    let html = "";
    html += `<p>till next edition</p>`;
    return html;
  }
  $nextYear.innerHTML = getHtmlForText();
})();

(() => {
  const $gameBlocks = document.getElementById("gameBlocks");
  const $body = document.body;

  function getHtmlForGames(events) {
    let html = "";
    for (const event of events) {
      const from = new Date(parseInt(event.from));
      const to = new Date(parseInt(event.to));
      html += `
    <article class="game-block">
      <img src="${event.event.image}" alt="${event.event.name}"/>
      <h2>${event.event.name}</h2>
      <h3>${event.stage} | ${from.getDate().toString().padStart(2, "0")}/${(
        from.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")} ${from.getHours().toString().padStart(2, "0")}.${from
        .getMinutes()
        .toString()
        .padStart(2, "0")}-${to.getHours().toString().padStart(2, "0")}.${to
        .getMinutes()
        .toString()
        .padStart(2, "0")}
      </h3>
      <div class="info hidden">
      <p>${event.event.description}</p>
      </div>
    </article>
    `;
    }
    return html;
  }
  $gameBlocks.innerHTML = getHtmlForGames(events);

  const infoPanel = document.createElement("div");
  infoPanel.classList.add("info-panel");
  infoPanel.innerHTML = `
<button class="close-btn">x</button>
<div class="info-content"></div>
`;
  $body.appendChild(infoPanel);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  $body.appendChild(modal);

  const $infoContent = infoPanel.querySelector(".info-content");
  const $closeBtn = infoPanel.querySelector(".close-btn");

  document.querySelectorAll(".game-block img").forEach(($img, i) => {
    $img.addEventListener("click", () => {
      const event = events[i];
      $infoContent.innerHTML = `
      <img src="${event.event.image}" alt="${event.event.name}"/>

      <div class="text">
        <h3>${event.stage} | ${new Date(
        parseInt(event.from)
      ).toLocaleString()}</h3>
        <h2>${event.event.name}</h2>
        <p>${event.event.description}</p>
      </div>
      `;
      infoPanel.classList.add("active");
      modal.classList.add("active");
    });
  });

  $closeBtn.addEventListener("click", closePanel);
  modal.addEventListener("click", closePanel);

  function closePanel() {
    infoPanel.classList.remove("active");
    modal.classList.remove("active");
  }
})();
