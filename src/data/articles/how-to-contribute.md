---
type: article
title: How to Contribute?
img: "../../../static/images/Articles/contribute.jpg"
date: "Sep 06, 2021"
author: "Hamed M. Farag"
tag: Repositories
featured: true
slug: how-to-contribute
---

We have 5 repositories till now:

1. **WEB**: [elmenus-web Github Repo](https://github.com/elmenus/elmenus-web)
2. **CRM:** [crm-frontend Github Repo](https://github.com/elmenus/crm-frontend)
3. **FDM:** [fdm-frontend Github Repo](https://github.com/elmenus/fdm-frontend)
4. **Livetracker:** [livetracker-frontend Github Repo](https://github.com/elmenus/livetracker-frontend)
5. **AB Testing Platform:** [ab-testing-platform-frontend Github Repo](https://github.com/elmenus/ab-testing-platform-frontend)

<br>

You can contribute to any repository but you should follow the following points 😊:

1. We have till this moment 3 main branches: **master**, **release**, and **dev** branches
    - Each branch represents an environment, **Production**, **testing**, and **development** environments.
2. You should create a new branch for *feature*/*bug*/*hotfix*/*rollback* or whatever you want to do from the **master** branch.
3. It is prohibited to push your commits directly to the main branches.
4. If you are ready to create a **new PR**, please read this document carefully [How to create a pull request](/articles/how-to-create-a-pull-request).
5. You should create **two PRs** from your branch to merge your code into the **dev** branch and another one into the **release** branch.
![PR Chart](/images/Articles/pull-request-chart.png)

> As a Contributor, you can create a PR from your branch to master too if your branch has an important feature, hotfix, or bug fix if it is **stable and bug-free** and **confirmed by the quality team**. 

## For Reviewers
- Once there is not any comment and you need to merge the **PR**, you should **squash** the commits before the merging, We can achieve that by choosing the “squash and merge“ option as following: 
![Squash Commits](/images/Articles/squash-commits.png)
This option will create one commit and its message will contain all commit messages that will be squashed: 
![Commits](/images/Articles/commits.png)

- You need as a reviewer to **delete the merged branch** for cleaning the git from unneeded branches.  

> ⚠️ Don’t use the squash option when you want to merge a PR that merges code from *dev into release* or *release into master* and **vice versa**, for keeping the history.

> ### **Prerequisites** ###
> 
> To create normally a new branch from the master branch as the above points, we need to do the following:
>
> - Introducing the **Feature Toggle** concept in the frontend, for resolving a common issue. (If we have a disabled feature in production but not disabled in dev and testing env and we need to keep this decision) *(Raised By Heba Bahaa)*.
>
> - All hard-coded config ids (web-engage id, mix panel id, etc..) should be stored in environment variables to avoid any conflict in merging process with the main branches.