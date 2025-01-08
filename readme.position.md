# CSS Positioning

CSS positioning is used to control the placement of elements in a document. Below is an explanation of each positioning type with examples.

---

## **1. `static` (Default Positioning)**

- The default value for all elements.
- Elements are positioned in the normal flow of the document.
- **No offset properties** (`top`, `left`, etc.) have any effect.

### Example:

```html
<div class="static-box">Static Position</div>
```

```css
.static-box {
  position: static; /* Default */
  background: lightblue;
}
```

---

## **2. `relative`**

- Positioned relative to its **normal position** in the document flow.
- Offset properties (`top`, `left`, `right`, `bottom`) shift the element but do not affect other elements' positions.

### Example:

```html
<div class="relative-box">Relative Position</div>
```

```css
.relative-box {
  position: relative;
  top: 20px; /* Moves down 20px */
  left: 10px; /* Moves right 10px */
  background: lightgreen;
}
```

---

## **3. `absolute`**

- Positioned relative to the **nearest positioned ancestor** (an ancestor with `relative`, `absolute`, or `fixed` positioning).
- If no ancestor is positioned, it defaults to the `<html>` element.
- Removes the element from the normal document flow.

### Example:

```html
<div class="relative-parent">
  <div class="absolute-box">Absolute Position</div>
</div>
```

```css
.relative-parent {
  position: relative;
  height: 100px;
  background: lightgray;
}

.absolute-box {
  position: absolute;
  top: 10px; /* Relative to .relative-parent */
  left: 10px;
  background: orange;
}
```

---

## **4. `fixed`**

- Positioned relative to the **viewport**.
- Stays in the same position even when the page is scrolled.

### Example:

```html
<div class="fixed-box">Fixed Position</div>
```

```css
.fixed-box {
  position: fixed;
  top: 0;
  right: 0;
  background: lightcoral;
  padding: 10px;
}
```

---

## **5. `sticky`**

- Positioned based on the user's scroll position.
- Acts like `relative` until a specified scroll position is reached, then "sticks" like `fixed`.

### Example:

```html
<div class="sticky-box">Sticky Position</div>
```

```css
.sticky-box {
  position: sticky;
  top: 10px; /* Sticks to 10px from the top */
  background: lightyellow;
  padding: 10px;
}
```

---

## **Offset Properties**

All positioning types (except `static`) can use the following properties to adjust their position:

- `top`
- `right`
- `bottom`
- `left`

---

## **Comparison of Positioning Types**

| **Position** | **Affects Document Flow?** | **Offset Parent**                       |
| ------------ | -------------------------- | --------------------------------------- |
| `static`     | Yes                        | None                                    |
| `relative`   | Yes                        | Self                                    |
| `absolute`   | No                         | Nearest positioned ancestor or `<html>` |
| `fixed`      | No                         | Viewport                                |
| `sticky`     | Partially                  | Scroll + Viewport                       |

---
