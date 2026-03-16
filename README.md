# Weather App (React Router 7 + Vite)

A small frontend weather application built with **React, React Router 7, Vite, and SCSS**.

The application fetches weather data and displays:

* Current weather conditions
* Detailed metrics
* 5-day forecast

This project demonstrates a **bundler-based workflow**, where SCSS is compiled and transformed into optimized CSS with **source maps enabled**.

---

# Tech Stack

* **React**
* **React Router 7**
* **Vite**
* **TypeScript**
* **SCSS (Sass)**

---

# Setup & Run

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

# CSS Authoring & Transformation

Styles in this project are written using **SCSS (Sass)**.

Structure:

```
app/styles/
  config/
    _variables.scss
  pages/
    weather/
      current.scss
      details.scss
      forecast.scss
```

SCSS features used:

* variables
* mixins
* nesting
* modular structure via `@use`

---

## Build Process

During development and build:

1. Vite processes all imported SCSS files.
2. Sass compiles SCSS → CSS.
3. CSS is bundled into a single optimized file.
4. The browser receives only compiled CSS.

Because SCSS uses advanced features like mixins and nesting,
the **generated CSS does not directly match the structure of the source files**.

Example:

SCSS:

```scss
.item {
  @include flex(column);
}
```

Compiled CSS:

```css
.item {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
```

---

# CSS Source Maps

Source maps are enabled in both development and production.

This allows browser DevTools to map compiled CSS back to original SCSS files.

In DevTools, styles will reference:

```
current.scss
forecast.scss
details.scss
```

instead of the compiled CSS file.

---

## Example of CSS Transformation

The project uses SCSS features such as mixins and nesting.
During the build process these are compiled into standard CSS.

Example:

**Authored SCSS**

```scss
.search-form {
  @include flex(row, nowrap, center, center, 20px);

  input {
    background: $color-bg-element;
    border-radius: 20px;
  }

  button {
    @include glass-effect;
  }
}
```

**Generated CSS**

```css
.search-form{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;gap:20px}
.search-form input{background:#1e1e1e;border-radius:20px}
.search-form button{background:#fff3;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1)}
```

This demonstrates how the authored SCSS is transformed and optimized into the final CSS used by the browser.

# Generated CSS Output

After running:

```bash
npm run build
```

the output files are generated in:

```
build/client/assets/
```

Example:

```
index-CuTaEQbR.css
index-CuTaEQbR.css.map
```

* `.css` → final bundled stylesheet used by browser
* `.css.map` → source map mapping CSS → SCSS

---

# Notes

* CSS is not written manually as a single file
* It is **generated automatically by Vite + Sass**
* The final output is optimized and bundled

---

# Author

Frontend project created using modern tooling (React Router 7 + Vite).
