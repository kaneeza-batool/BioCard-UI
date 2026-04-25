# 🪪 BioCard

A clean, animated personal profile card built with pure **HTML**, **CSS**, and **JavaScript**, no frameworks, no dependencies.

---

## ✨ Features

- 🎨 Animated gradient header with curved wave cutoff
- 💜 Pulsing avatar ring with shimmer name effect
- 📊 Stats row: Following, Followers, Projects
- 🏷️ Skill tags with pastel color coding
- 🔘 Interactive Follow / Unfollow button toggle
- 🌙 Charcoal blue background for a professional dark feel
- 📱 Smooth staggered entrance animations

---

## 📁 Project Structure

```
BioCard/
├── index.html       # Card markup & structure
├── style.css        # All animations & styling
├── script.js        # Person data & follow toggle logic
└── kaneeza_pfp.png  # Profile photo (add your own)
```

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/biocard.git
   cd biocard
   ```

2. **Open in browser**
   ```bash
   # Just open index.html directly — no build step needed
   open index.html
   ```

That's it. No installs, no bundler, no setup.

---

## 🛠️ Customization

### Update your info
Edit the `person` object in `script.js`:

```js
const person = {
  name: "Kaneeza Batool",
  age: 21,
  education: "Undergraduate — Computer Science",
  city: "Sukkur, Pakistan",
};
```

### Add your profile photo
In `index.html`, replace the initials inside `.avatar-inner`:

```html

<!-- After -->
<img src="./kaneeza_pfp.png" alt="Kaneeza Batool" />
```

### Change the background color
In `style.css`, update the `body` background:

```css
body {
  background: linear-gradient(135deg, #1a1a2e, #16213e); /* Charcoal Blue */
}
```

### Add or remove skill tags
In `index.html`, edit the `.skills-wrap` section:

```html
<div class="skills-wrap">
  <span class="skill-tag">HTML/CSS</span>
  <span class="skill-tag">JavaScript</span>
  <span class="skill-tag">Python</span>
  <span class="skill-tag">UI Design</span>
</div>
```

---

## 🎬 Animations Used

| Animation | Effect |
|-----------|--------|
| `fadeSlideUp` | Cards and info items slide in from below |
| `shimmer` | Name text has a moving gradient shine |
| `pulseRing` | Avatar ring glows in and out |
| `countUp` | Stat boxes pop in with a scale effect |

---

## 🖼️ Preview

![BioCard Preview](preview.png)

---

## 🙋‍♀️ Author

**Kaneeza Batool**  
CS Undergraduate · Sukkur, Pakistan  
Built with 💜 using HTML, CSS & JS
