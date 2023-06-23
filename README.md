# 🚧 amparo.codes

This repo contains the code for my personal portfolio website, currently **under construction**.

Please note I'm following a mobile-first approach, so at this time the layout and styling for larger screens, such as desktops and tablets, is still being worked on and is not ready for public viewing yet.

I'll be updating the README as soon as I make significant changes.

In the meantime, deel free to [view the live version](https://amparo-portfolio-wip.netlify.app/) of my "coming soon" page for mobile.

## 🧰 Tech stack

- Astro
- React
- Javascript
- Sass
- Storybook
- Fontsource

Deployed on Netlify.

<!--
## 📐 Prototypes (Figma)

- [Desktop view](https://www.figma.com/proto/pKkpIP8lCASbhEr4iC0atA/Frontend-Portfolio-Website?page-id=72%3A1891&type=design&node-id=206-2061&viewport=554%2C341%2C0.19&scaling=scale-down&starting-point-node-id=206%3A2061&show-proto-sidebar=1)
- [Mobile view (Portrait)](https://www.figma.com/proto/pKkpIP8lCASbhEr4iC0atA/Frontend-Portfolio-Website?page-id=298%3A2468&type=design&node-id=298-2491&viewport=790%2C487%2C0.5&scaling=scale-down&starting-point-node-id=298%3A2491)
- [Tablet view (Portrait)](https://www.figma.com/proto/pKkpIP8lCASbhEr4iC0atA/Frontend-Portfolio-Website?page-id=298%3A2787&type=design&node-id=298-2788&viewport=727%2C487%2C0.47&scaling=scale-down&starting-point-node-id=298%3A2788)
-->

## Lighthouse scores

Here are the lighthouse scores for the website, as of 23 June 2023:

![Lighthouse scores showing 100 on each category](screenshots/lighthouse-23-06-2023.png)

Gotta love seeing those fireworks! When it comes to the performance side of things, it's all thanks to [Astro](astro.build) 🚀.

## Project Progress

### What's done

#### ✅ Content

All content for the website is complete, but of course will be updated once I’m ready to introduce projects and other sections.

#### ✅ Assets

All relevant assets, like images and icons, have been collected/exported from Figma and included in the project.

#### ✅ Mobile styling

The initial styling for mobile devices, following a mobile-first approach, has been implemented.

### What I'm working on

#### 👷‍♀️ Tablet and desktop styling

The layout and styling for tablets, desktops, and larger screens are currently in progress to ensure a consistent experience across different viewports.

### Future plans

Needless to say, I will be adding projects and an "About" section in the near future.

In addition, I plan to implement the following enhancements:
- Dark mode: as you can see from the Figma prototypes, all colours and assets have already been designed, they’re just waiting to be implemented.
- Theme toggle: add required functionality to the theme toggle to be able to switch between light and dark mode.

## Observations





### Accessibility

During the design phase, I paid close attention to colour contrast by using tools like [WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/), and, lately my favourite, [WhoCanUse](https://www.whocanuse.com/). This allowed me to ensure that the colour combinations used in the design met accessibility standards and provide optimal readability for all users. Additionally, I made specific content design decisions to enhance readability and ease-of-use, considering factors such as font size, spacing, and layout.

Now, in the development phase, I'm focusing on implementing accessibility features and conducting thorough testing to ensure an inclusive experience. Here are some key practices I'm following:

- Semantic HTML: as I do in all my projects, I prioritised the use of semantic HTML elements. Whenever possible, I chose appropriate tags for the content. For example, using the `<address>` tag for social media links, rather than `<nav>` as it conveys the purpose accurately without implying navigation.

- ARIA labels: adding ARIA labels to elements, ensuring that non-textual content, interactive elements, and more complex components are properly labeled. This enables screen readers to provide meaningful and contextual information to users.

- Keyboard accessibility: making sure all interactive elements, including buttons and navigation, are easily accessible using a keyboard alone. Testing the website's functionality by navigating through the entire site using only keyboard inputs, verifying that all interactive elements receive focus and behave intuitively.

- Avoiding clutter in the accessibility tree: to prevent unnecessary distractions for screen reader users, I took care to exclude decorative elements from the accessibility tree. This ensures that users receive relevant and meaningful information without being overwhelmed by excessive detail.

- Third-party tools: to enhance the accessibility evaluation process, I use browser extensions and accessibility testing tools like Chrome DevTools' [CSS Overview](https://developer.chrome.com/docs/devtools/css-overview/), and axe DevTools, amongst others.

### Component-Driven Development (CDD) and Storybook

For this project, I have embraced Component-Driven Development (CDD) for the first time. I'm also using Storybook for the first time, developing and testing individual components in isolation, to promote reusability in the component library.
