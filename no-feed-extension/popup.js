const container = document.getElementById("sites");

chrome.storage.sync.get({ disabled: {} }, ({ disabled }) => {
  for (const [id, site] of Object.entries(NO_FEED_SITES)) {
    const label = document.createElement("label");
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = !disabled[id];
    box.addEventListener("change", () => {
      disabled[id] = !box.checked;
      chrome.storage.sync.set({ disabled });
    });
    label.append(box, site.label);
    container.appendChild(label);
  }
});
