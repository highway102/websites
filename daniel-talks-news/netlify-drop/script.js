function updateDeskTime() {
  const target = document.getElementById("desk-time");
  if (!target) return;

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  target.textContent = `${time} UK`;
}

updateDeskTime();
setInterval(updateDeskTime, 30000);

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 2.2,
      },
    });
  }
});
