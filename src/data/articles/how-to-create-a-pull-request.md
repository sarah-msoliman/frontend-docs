---
title: How to Create A Pull Request
description: How to Create A Pull Request Description
img: "../../images/pull-requests.png"
featured: true
tag: Pull Requests
slug: how-to-create-a-pull-request
---

### What is the Pull Request?

**Pull requests** let you tell others about changes you've pushed to a branch. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.
You can open a **Pull Request** at any point during the development process: when you have little
or no code but want to share some screenshots or general ideas, when you're stuck and need
help or advice, or when you're ready for someone to review your work.

### How to create a Pull request?

- Choose your branch and the targeted branch (be careful)
- You need to support your pull request with a suitable title.
- Description to be as following (below is a template you can copy):

> [^1] [Pull Request Description]
>
> \### Please check options that are relevant
>
> [ ] Bug fix (non-breaking change which fixes an issue)
>
> [ ] New feature (non-breaking change which adds functionality)
>
> [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
>
> [ ] This change requires a documentation update
>
> [ ] Code Enhancements
>
> \### Covered Business [JIRA-TICKET]
>
> [ ] ----
>
> \### Known Bugs
>
> - Cover Photo not supporting repositioning at this pull request
>
> \### Impacts
>
> - Cover Photo at Pages, Group, and Profile Pages need to be retested.
>
> \### Code Checklist
>
> [ ] Your code builds clean without any errors or warnings.
>
> [ ] Your code supporting **Arabic** (Styles && Translation).
>
> [ ] Your style following **BEM** Methodology.
>
> [ ] Your Style Supporting **Mobile First**.
>
> \### Screenshot if it available

- In the first line [^1], you're supposed to write a description to add more clarification to the Reviewer.
- Choose at least one of the choices under **(Please check options that are relevant)**, to mention if we need from quality team to re-test any impact that may be caused by these changes.
- Mention the business that you applied in this pull request if not mentioned in **JIRA**.
- Mention if there is any known **bug** or any **impact** to notify the quality team.
- Follow **Checklist** point by point and apply it as much as you can.
- For **Mobile-First Approach**, you can achieve this by writing down your styles for mobile, then use (min-width) to target desktop resolution.
    - Our Reference for breakpoints is [Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/).

  
**Example:** https://github.com/elmenus/fdm-frontend/pull/1045 