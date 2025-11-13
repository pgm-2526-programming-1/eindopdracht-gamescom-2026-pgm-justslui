//link github repo in comments indienen plaatsen

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
  const $gameBlocks = document.getElementById("gameBlocks");

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

  const $blocks = document.querySelectorAll(".game-block");

  $blocks.forEach(($block) => {
    const $img = $block.querySelector("img");
    const $info = $block.querySelector(".info");

    $img.addEventListener("click", () => {
      const isHidden = $info.classList.contains("hidden");

      if (isHidden) {
        $info.classList.remove("hidden");
      } else {
        $info.classList.add("hidden");
      }
    });
  });
})();
