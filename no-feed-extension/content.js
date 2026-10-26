(() => {
  const host = location.hostname;
  const siteId = Object.keys(NO_FEED_SITES).find((id) =>
    NO_FEED_SITES[id].hosts.includes(host)
  );
  if (!siteId) return;
  const site = NO_FEED_SITES[siteId];
  const root = document.documentElement;

  // Assume enabled until storage says otherwise, so the feed never flashes.
  let enabled = true;
  let lastHref = "";

  function buildPanel() {
    const panel = document.createElement("div");
    panel.id = "no-feed-panel";
    const title = document.createElement("div");
    title.className = "no-feed-title";
    title.textContent = `${site.label} feed hidden`;
    panel.appendChild(title);
    const list = document.createElement("div");
    list.className = "no-feed-links";
    for (const [text, href] of site.links) {
      const a = document.createElement("a");
      a.textContent = text;
      a.href = href;
      list.appendChild(a);
    }
    panel.appendChild(list);
    return panel;
  }

  function update() {
    lastHref = location.href;
    const onFeed = enabled && site.isFeed(location.pathname);
    if (onFeed) {
      root.setAttribute("data-no-feed", siteId);
    } else {
      root.removeAttribute("data-no-feed");
    }
    const panel = document.getElementById("no-feed-panel");
    if (onFeed && !panel && document.body) {
      document.body.appendChild(buildPanel());
    } else if (!onFeed && panel) {
      panel.remove();
    }
  }

  chrome.storage.sync.get({ disabled: {} }, ({ disabled }) => {
    enabled = !disabled[siteId];
    update();
  });

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.disabled) {
      enabled = !(changes.disabled.newValue || {})[siteId];
      update();
    }
  });

  // These sites change pages without reloading, so watch the URL.
  setInterval(() => {
    if (location.href !== lastHref || (enabled && !document.getElementById("no-feed-panel"))) {
      update();
    }
  }, 300);
  addEventListener("popstate", update);
  update();
})();
