# 📆 react-date-digital-clock

A lightweight and fully customizable React component to display the current **date and digital clock**. Built with Tailwind CSS in mind, but also works with inline styles. You can style it freely using utility classes or custom CSS.

---
<div class=''>
<img src='https://res.cloudinary.com/da5crwlqh/image/upload/v1751817533/mdcacy33pqhewbldwhrs.png' alt='clock-image'>
</div>


## ✨ Features

- ⏰ Displays **live digital clock** (updates every second)
- 📅 Automatically updates **date at midnight**
- 🎨 Fully customizable via props for Tailwind or custom class names
- 🧩 Supports dynamic width/height via `style` props
- ⚛️ React-only with no external dependencies

---

## 📦 Installation

```bash
npm install react-date-digital-clock
```
Create a taiwind.config.js if not present and add the given code 

 ```    
 safelist: [
        'p-2', 'text-center', 'border', 'rounded-lg', 'm-1',
        'px-2', 'py-2', 'text-xl', 'font-semibold'

    ],
```

as shown below:


```js
tailwind.config.js

export default {
    safelist: [
        'p-2', 'text-center', 'border', 'rounded-lg', 'm-1',
        'px-2', 'py-2', 'text-xl', 'font-semibold'

    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```


to use the component you can import it as follow

##  Usage

```
import DateAndClock from "../react-date-digital-clock";

<DateAndClock ></DateAndClock>
```

## Live-Preview

<a href="https://reactdatedigitalclock.netlify.app/" >Live Preview </a>

## 📚 Props Table

| Prop           | Type     | Default Value                                      | Description |
|----------------|----------|----------------------------------------------------|-------------|
| `w`            | `string` | `'130px'`                                          | Width of the container. Applied via inline `style={{ width: w }}` |
| `h`            | `string` | `''`                                               | Height of the container. Applied via inline `style={{ height: h }}` |
| `generalProps` | `string` | `'p-2 text-center border rounded-lg m-1'`        | Tailwind (or custom) classes for the outer `<div>` container |
| `dateProps`    | `string` | `'px-2'`                                           | Tailwind or custom classes applied to the date element |
| `clockProps`   | `string` | `'px-2'`                                           | Tailwind or custom classes applied to the clock element |

---

`note: The default classes of the above table are of tailwind css`

## 🧱 Component Structure

```jsx 
<div className={generalProps} style={{ width: w, height: h }}> 
<h1 className={dateProps}>{date}</h1> 
<h1 className={clockProps}>{time}</h1> 
</div>
 ```

 - ✅ generalProps: Styling for the wrapper
 - 📅 dateProps: Styling for the date (dd/mm/yyyy)
 - ⏰ clockProps: Styling for the live-updating time (HH:MM:SS)
 - 📐 w & h: Apply dynamic width/height using inline styles


## 📬 Contributing / Support
 - Have ideas or issues?
 - Please open an issue or submit a pull request.