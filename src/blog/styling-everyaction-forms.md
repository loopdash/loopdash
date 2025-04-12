---
layout: single-blog.njk
title: How to Style EveryAction Forms Without Breaking Their Code  
meta:
  title: How to Style EveryAction Forms Without Breaking Their Code  
  description: Elevate your EveryAction forms with a touch of elegance and brand consistency, ensuring they resonate with your nonprofit's identity.
  image: ./src/img/blogs/moody-san-francisco.png  
  alt: A blue and white porcelain jar with wave and horse motifs, evoking traditional Chinese patterns on a modern gray background  
sitemap:
  changefreq: weekly  
  priority: 0.5  
tags:
  - nonprofit  
  - everyaction  
  - forms  
  - styling  
  - css  
  - wordpress  
date: 2025-04-12  
url: /blog/styling-everyaction-forms
---

EveryAction forms are powerful—but visually, they often feel like an afterthought.

For nonprofits who care deeply about brand consistency and user experience, default embed styles can feel limiting. The challenge? These forms are hosted in an iframe. And that means your usual CSS rules won’t work.

But with care and clarity, you can bring visual polish to EveryAction forms—without breaking their structure or losing functionality.

Here’s how.

---

## 1. Understand the iFrame Limitation

When you embed an EveryAction form, you’re placing an **iframe** inside your website. That iframe pulls content from a different domain—and that means you can’t directly style it from your site’s CSS.

But: EveryAction does allow you to apply limited CSS overrides using their **hosted form settings**.

---

## 2. Use the Form Style Override Panel

Log in to your EveryAction admin panel. Navigate to your form’s **"Style Settings"** or **"Advanced Options"**. Here, you can add custom CSS that will be injected into the form when it loads.

You can style:
- Fonts and colors
- Input field borders and padding
- Button hover states
- Spacing between sections

> Keep it light. Use a stylesheet that mirrors your website’s look—without overcomplicating it.

---

## 3. Create a Brand-Aligned Style Kit

Before applying changes, build a simple design kit for your form elements.

We suggest defining:
- A primary and secondary font
- Brand hex codes for buttons and links
- Input field styling (height, border, background)
- Label font sizes and spacing

This becomes your source of truth. Consistency = trust.

---

## 4. Use Scoped CSS Rules Only

To avoid conflict with the base form logic, use **class-based selectors** and avoid global tags like `input` or `label`. You’re working inside their environment—be a polite guest.

Example:
```css
.en__field__input--text {
  border: 1px solid #e0e0e0;
  font-family: 'Inter', sans-serif;
  padding: 12px;
}
```

Avoid:
```css
input {
  border: none;
  font-size: 20px;
}
```

## 5. Optimize for Mobile First
Many EveryAction forms look fine on desktop, but collapse ungracefully on small screens. Test early and often.

Tips:

- Use max-width: 100% on form containers
- Make buttons large enough to tap comfortably
- Add spacing between stacked fields

A form should never feel cramped. Breathing room builds trust.

## 6. Test Everything After Changes
Sometimes, a minor style tweak can break form logic or disrupt accessibility. Always test:

- Submission success messages
- Required field alerts
- Mobile responsiveness
- Keyboard-only navigation

Use real data. Act like a donor.

## 7. Consider Rebuilding Key Forms Natively
For campaigns where brand consistency is essential—petitions, landing pages, lightboxes—consider using EveryAction’s API or form forwarding methods to rebuild those forms natively inside your CMS (like WordPress or NationBuilder).

It takes more setup, but gives full design control.

## Final Thoughts
You don’t have to settle for “good enough” forms. With a light hand and a clear design system, your EveryAction forms can reflect the same intentionality you bring to the rest of your brand.

At Loopdash, we help nonprofits bring harmony between platform limitations and visual identity—without compromising performance or accessibility.

If you’re feeling stuck, we’re happy to help you finesse the details.