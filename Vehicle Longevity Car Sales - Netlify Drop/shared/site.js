(function () {
  function initCountdown() {
    var body = document.body;
    if (!body) return;

    var inlineNodes = document.querySelectorAll("[data-countdown-inline]");
    var blockNodes = document.querySelectorAll("[data-countdown]");
    if (!inlineNodes.length && !blockNodes.length) return;

    var durationHours = Number(body.getAttribute("data-offer-hours")) || 24;
    var duration = durationHours * 60 * 60 * 1000;
    var offerKey = "offerDeadline:" + (body.getAttribute("data-offer-key") || body.className || "site");
    var now = Date.now();
    var storage = null;
    var stored = 0;

    try {
      storage = window.localStorage;
      stored = Number(storage.getItem(offerKey));
    } catch (error) {
      storage = null;
      stored = 0;
    }

    var deadline = stored && stored > now ? stored : now + duration;

    function rememberDeadline(value) {
      if (!storage) return;
      try {
        storage.setItem(offerKey, String(value));
      } catch (error) {
        storage = null;
      }
    }

    function two(value) {
      return value < 10 ? "0" + value : String(value);
    }

    function render() {
      var remaining = Math.max(0, deadline - Date.now());

      if (remaining <= 0) {
        deadline = Date.now() + duration;
        rememberDeadline(deadline);
        remaining = duration;
      }

      var totalSeconds = Math.floor(remaining / 1000);
      var hours = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var seconds = totalSeconds % 60;
      var inlineText = two(hours) + "h " + two(minutes) + "m " + two(seconds) + "s";

      inlineNodes.forEach(function (node) {
        node.textContent = inlineText;
      });

      blockNodes.forEach(function (node) {
        var hourNode = node.querySelector("[data-hours]");
        var minuteNode = node.querySelector("[data-minutes]");
        var secondNode = node.querySelector("[data-seconds]");
        if (hourNode) hourNode.textContent = two(hours);
        if (minuteNode) minuteNode.textContent = two(minutes);
        if (secondNode) secondNode.textContent = two(seconds);
      });
    }

    rememberDeadline(deadline);
    render();
    window.setInterval(render, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCountdown);
  } else {
    initCountdown();
  }
})();
