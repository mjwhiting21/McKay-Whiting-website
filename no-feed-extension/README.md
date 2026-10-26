# No Feed

A Chrome extension that removes the home feed on LinkedIn, Facebook, Instagram, X and YouTube, and leaves everything else working: posting, search, messages, notifications, analytics, Marketplace.

In place of the feed it shows a small bar of shortcuts (for example Marketplace and Business Suite on Facebook).

## Install

1. Open `chrome://extensions` in Chrome.
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked** and choose this `no-feed-extension` folder.
4. Pin the extension and click its icon to turn individual sites on or off.

## What gets hidden

| Site | Hidden on | Still works |
|---|---|---|
| LinkedIn | `/feed` | Start a post, messages, notifications, search, profile, analytics |
| Facebook | Home page | Composer, Marketplace, groups, pages, messages, search |
| Instagram | Home page | Create, search, messages, profile, insights |
| X | `/home` | Composer, search, messages, notifications, analytics |
| YouTube | Home page, Shorts | Search, subscriptions, watching videos, Studio |

## When something stops being hidden

These sites change their page code regularly. If a feed shows up again, the selector for that site in `hide.css` needs updating. After editing, click the reload icon on the extension in `chrome://extensions`.
