// Each site: which hosts it runs on, which paths are "the feed",
// and shortcuts to show in place of the feed.
const NO_FEED_SITES = {
  linkedin: {
    label: "LinkedIn",
    hosts: ["www.linkedin.com"],
    isFeed: (path) => path === "/" || path.startsWith("/feed"),
    links: [
      ["Write a post", "/feed/?shareActive=true"],
      ["Messages", "/messaging/"],
      ["Notifications", "/notifications/"],
      ["My network", "/mynetwork/"],
      ["Jobs", "/jobs/"]
    ]
  },
  facebook: {
    label: "Facebook",
    hosts: ["www.facebook.com", "web.facebook.com", "m.facebook.com"],
    isFeed: (path) => path === "/" || path === "/home.php",
    links: [
      ["Marketplace", "/marketplace/"],
      ["Business Suite", "https://business.facebook.com/latest/home"],
      ["Notifications", "/notifications/"],
      ["Messages", "/messages/"],
      ["Groups", "/groups/"]
    ]
  },
  instagram: {
    label: "Instagram",
    hosts: ["www.instagram.com"],
    isFeed: (path) => path === "/",
    links: [
      ["Messages", "/direct/inbox/"],
      ["Notifications", "/notifications/"],
      ["My profile", "/accounts/edit/"],
      ["Professional dashboard", "/accounts/insights/"]
    ]
  },
  x: {
    label: "X (Twitter)",
    hosts: ["x.com", "twitter.com"],
    isFeed: (path) => path === "/home",
    links: [
      ["Messages", "/messages"],
      ["Notifications", "/notifications"],
      ["Search", "/explore"],
      ["Analytics", "/i/account_analytics"]
    ]
  },
  youtube: {
    label: "YouTube",
    hosts: ["www.youtube.com"],
    isFeed: (path) => path === "/" || path.startsWith("/shorts"),
    links: [
      ["Subscriptions", "/feed/subscriptions"],
      ["YouTube Studio", "https://studio.youtube.com/"],
      ["Watch later", "/playlist?list=WL"]
    ]
  }
};
