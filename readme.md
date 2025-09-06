# 📆 react-date-digital-clock

A lightweight and fully customizable React component to display the current **date, day name, and digital clock**. Built with Tailwind CSS in mind, but also works with inline styles. You can style it freely using utility classes or custom CSS.




## ✨ Features

- ⏰ Displays **live digital clock** (updates every second)
- 📅 Automatically updates **date at midnight**
- 🗓️ Shows **day name** (e.g., `SAT`, `SUN`) in bold, customizable style
- 🎨 Fully customizable via props for Tailwind or custom class names
- 🧩 Supports dynamic width/height via `style` props
- ⚛️ No external dependencies
---

## 📦 Installation

```bash
npm install react-date-digital-clock
```
Create a taiwind.config.js if not present and add the given code 

 ```    
 safelist: [
            'p-2', 'text-center', 'border', 'rounded-lg', 'm-1',
            'px-2', 'py-2', 'text-xl', 'font-semibold',
            'font-bold', 'text-4xl', 'bg-black', 'text-white'
    ],
```

as shown below:


```js
tailwind.config.js

export default {
    safelist: [
            'p-2', 'text-center', 'border', 'rounded-lg', 'm-1',
            'px-2', 'py-2', 'text-xl', 'font-semibold',
            'font-bold', 'text-4xl', 'bg-black', 'text-white'
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
| `w`            | `string` | `'130px'`                                          | Minimum width of the container. Applied via inline style `minWidth`. |
| `h`            | `string` | `''`                                               | Height of the container. Applied via inline `style={{ height: h }}` |
`isDayNameRequired`|`boolean`|`true`|Toggles the display of the day name (SAT, SUN, etc.).
| `generalProps` | `string` | `'p-2 flex justify-center items-center text-center border rounded-lg m-1 w-auto'`        | Tailwind (or custom) classes for the outer `<div>` container |
| `dateProps`    | `string` | `'px-2'`                                           | Tailwind or custom classes applied to the date element |
| `clockProps`   | `string` | `'px-2'`                                           | Tailwind or custom classes applied to the clock element |
`dayNameProps`	|`string`	|`'flex items-center justify-center bg-black text-white rounded-md p-2 font-bold text-4xl'`|	Tailwind or custom classes applied to the day name element. Only used if `isDayNameRequired = true`.
---

`note: The default classes of the above table are of tailwind css`

## 🧱 Component Structure

```jsx 
<div className={generalProps} style={{ minWidth: w, height: h, width: "fit-content" }}>
  <div>
    <h1 className={dateProps}>{date}</h1>
    <h1 className={clockProps}>{time}</h1>
  </div>
  <div className={dayNameProps}>
    <h1>{dayName}</h1>
  </div>
</div>
 ```

 - ✅ generalProps: Styling for the wrapper
 - 📅 dateProps: Styling for the date (dd/mm/yyyy)
 - ⏰ clockProps: Styling for the live-updating time (HH:MM:SS)
 - dayNameProps: Styling for the day name (e.g., SAT)
 - 📐 w & h: Apply dynamic width/height using inline styles


## 📬 Contributing / Support
 - Have ideas or issues?
 - Please open an issue or submit a pull request.