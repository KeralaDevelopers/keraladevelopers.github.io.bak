---
publishDate: "2023-04-07T18:13:47.110Z"
title: CSS Nesting is Now Built in Natively
excerpt: Chrome 112 introduces native support for CSS nesting, a feature that allows you to define styles for an element within the context of another selector.
image: https://i.imgur.com/nNPpMUN.jpeg
tags:
  - news
  - css
  - resources
---

If you're a fan of CSS preprocessors like SCSS, Less or Stylus, you probably love the ability to nest style rules inside other selectors. This makes your CSS more organized, concise and easier to maintain. But what if you could use nesting without any preprocessor? Well, now you can!

Chrome 112 introduces native support for CSS nesting, a feature that allows you to define styles for an element within the context of another selector. This means you can write CSS like this:

```css
.parent {
  color: blue;
  .child {
    color: red;
  }
}
```

And it will be equivalent to this:

```css
.parent {
  color: blue;
}

.parent .child {
  color: red;
}
```

Checkout chrome's official article [here](https://developer.chrome.com/articles/css-nesting/)
