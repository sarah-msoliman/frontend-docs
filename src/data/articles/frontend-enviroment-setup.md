---
title: Frontend Environment Setup
img: "../../../static/images/Articles/env-setup.png"
date: "Sep 1, 2021"
featured: false
tag: Setup
slug: frontend-enviroment-setup
---

1. You should install **NodeJs** version [(8.5.0)](https://nodejs.org/download/release/v8.5.0/).
> 🛈 You can install another version normally besides the main version **(8.5.0)** using **nvm** (Node Version Manager), Install it from the following Links:
> - [For **Windows** Users](https://github.com/coreybutler/nvm-windows)
> - [For **Linux & Mac** Users](https://github.com/nvm-sh/nvm)

2. Install [git](https://git-scm.com/downloads) on your machine.
> 🛈 Hating to write **git** commands in command-line? ou can use a git GUI like [Free Git GUI for Windows, Mac, Linux | GitKraken](https://www.gitkraken.com/) or you can check for alternatives from [Git - GUI Clients](https://git-scm.com/downloads/guis).

3. Install [Python 2.7](https://www.python.org/download/releases/2.7/).
4. Add the following Global **Environment Variables** on your machine:
| Key             | Value                          |
| ----------------| -------------------------------|
| ALLOW_GUEST     | true                           |
| API_BASE_URL    | http://dev02.elmenus.com/2.0   |
| CRM_WS_BASE_URL | ws://ws.dev02.elmenus.com:4000 |
| LT_WS_BASE_URL  | ws://ws.dev02.elmenus.com:9000 |

> 🛈 For Windows users:
>
> Open CMD as admin and run **rundll32 sysdm.cpl,EditEnvironmentVariables**.
>
> Under the System Variables section, click on new and add the above keys.
>
> **NOTE: If you change any value of these keys, you need to restart your machine.**

5. Create a **shortcut** on your desktop and paste the following line into the location box then click on next, name your shortcut as you want then click on the finish button:
> 🛈 "{{replace-here-chrome.exe-path}}" --disable-web-security --disable-gpu --user-data-dir=c:\work\chromeTemp
>
> **This shortcut makes a new instance from Google Chrome but without a security check, Why do we need this? Because we need to avoid CORS issues for livetracker, elmenus-web and CRM.**

6. Clone all Frontend Repos [elmenus](https://github.com/orgs/elmenus/repositories) (**elmenus-web**, **livetracker-frontend**, **fdm-frontend**, **crm-frontend**, **ab-testing-platform-frontend**).

7. Enjoy! 🤩

> ⚠️ You may face an issue when you trying to install the node modules via **npm i** at any project, try to clone the project from Github an try again to install the node modules.

---------------------------------------------------------------------------
## UPDATE 1 (2/9/2021)
- **Livetracker** now working fine using **NodeJS v14.17**.