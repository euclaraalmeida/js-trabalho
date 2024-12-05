import flags from "./model/flags.js";

document.addEventListener("DOMContentLoaded", () => {
    const flagsContainer = document.getElementById("flags-container");
    flagsContainer.innerHTML = "";

   
    for (const pais of flags) {
        const flagHTML = `
      <div class = "flag-card">
        <img src="${pais["image"]}" alt="Flag of ${pais["name"]}" width="150" class="img">
        <p> ${pais["name"]} </p>
      </div>
    `;
        flagsContainer.innerHTML += flagHTML;
    }
});
