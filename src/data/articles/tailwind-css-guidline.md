---
title: Tailwind CSS Guidline
img: "../../../static/images/Articles/tailwind-css.jpeg"
date: "March 03, 2022"
author: "Sarah Soliman"
tag: CSS
featured: false
slug: tailwindcss-guidlines
---
This article highlights our guideline for using Tailwind CSS. [Tailwind CSS](https://tailwindcss.com/) is a utility based CSS framweork used to build websites by adding predefined classes directly in the HTML markup.

## Rule of thumb
Our rule of thumb is to think first before writing CSS ourselves. Tailwind provides a lot of utilities that we can use, [directives](https://tailwindcss.com/docs/functions-and-directives) that offer us many functionalities and various ways to extend it with whatever is missing. So make sure to check the Tailwind documentation first before writing plain CSS.

## Abstracting Styles
To avoid duplication of styles, we should use [*@apply*](https://tailwindcss.com/docs/functions-and-directives#apply) directive, which helps us fix styles duplication issue by abstracting utility classes in our custom CSS. It's like having a single source of truth for this element's styles.

For example, if we have a button that will be used in a bunch of places across our app, every single time we make any change in the button's styles, we have to copy paste these changes everywhere we're using this button.

![Button 1 Example](/images/Articles/btn-html.png)

To fix this issue, we can use *@apply* directive:

![Button style Example](/images/Articles/btn-style.png)

This way we can simply apply the *.btn* class in our markup anywhere:

![Button 3 Example](/images/Articles/btn-html-apply.png)

## Extract components not classes
In the above section we talked about abstracting our styles to avoid styles duplication. This is works really well for simple HTML elements such as the button example we saw above.

But what about complex components, for example *Cards*? Abstracting our styles will only fix half of the duplication issue, because when you have a complex component you still have to worry about the structure of this component. You wll still need to copy and paste the structure everywhere you want to use it and you’ll have to go through all places if you want to make a change in the structure.

To fix this issue we can extract this component into a Javascript component to be truly reusable. This is easily done in some frameworks and libraries like *React* whose core idea is **Componentization**. 

> <h3 class="text-primary-50">Note:</h3>
> Don't *@apply* component classes in other components. For example, use seperate classes *.btn* & *.btn-primary* classes rather than using:
>
> ![Button Example](/images/Articles/apply.png)

## Utility Classes

- When writing multiple utility classes on any element, follow the [*Concentric CSS*](https://rhodesmill.org/brandon/2011/concentric-css/) approach (i.e,. 1. positioning/visibility 2. box model 3. borders 4. backgrounds 5. typography 6. other visual adjustments). This will make parsing through long utility classes much more faster once we get used to the pattern order.

- Use as few classes as possible, for example use **_mx-2_** instead of using **_ml-2 mr-2_**.

## Responsive Design
- Prefix all utility classes applying at a specific breakpoint with that breakpoint's prefix, to make it clear that these utilities are applied at this breakpoint. For example, use **_block lg:flex lg:flex-col lg:justify-center_** instead of **_block lg:flex flex-col justify-center_**.

- The **_sm:_** prefix doesn't apply only to small view ports, it applies to small breakpoints and larger. So for example instead of using **_sm:flex md:flex lg:flex_**, use **_sm:flex_**.


