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
  const $gameBlocks = document.getElementById("gameBlocks");

  console.log(events);

  function getHtmlForGames(events) {
    let html = "";
    for (const event of events) {
      html += `
    <article>
    <li>
    <img src="${event.event.image}"/>
    <h2>${event.event.name}</h2>
    <h3>${event.stage} | </h3>
    </li>
    </article>
    `;
    }
    return html;
  }
  $gameBlocks.innerHTML = getHtmlForGames(events);
})();

// (() => {
//   const $items = document.getElementsByClassName("item")
//   for (const $item of $items){
//     $item.addEventListener("click"(e)) => {
//       const id = e.currentTarget.dataset.id;
//       let clickedMovie;
//       for (const movie of movies){
//         if (movie.id === id){
//           clickedMovie = movie
//         }
//       }
//     }
//   }
// }
// })()

// (() => {
//   const $btn = document.getElementById(`gameBlocks`);
//   const $box = document.getElementById(`box`);

//   $btn addEventListener(`click`,()) => {
//     if ($box.classList.contains("hidden"));
//        ($box.classList.remove("hidden"));
//   } else {
//     $box.classList.add("hidden");
//   }
// })();
