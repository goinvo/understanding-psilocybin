document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".cell.interactive");
  const infoPanel = document.getElementById("infoPanel");
  const infoText = document.getElementById("infoText");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const rect = cell.getBoundingClientRect();
      const info = cell.dataset.info;
      infoText.textContent = info || "More info...";

      infoPanel.style.top = `${rect.top + window.scrollY}px`;
      infoPanel.style.left = `${rect.left - 210}px`;
      infoPanel.classList.remove("hidden");
      infoPanel.classList.add("visible");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".cell") && !e.target.closest("#infoPanel")) {
      infoPanel.classList.remove("visible");
      infoPanel.classList.add("hidden");
    }
  });
});