# VScode

1. [Download VScode](https://code.visualstudio.com/download)

# homework 29-12-2024

1. Explore about div tag in html
2. Create new HTML, based on the current HTML in the folder, and describe your ID / your business

# mdn documentation

https://developer.mozilla.org/

# Style

## inline

```html
<div style="color:red">some text</div>
```

## internal

```html
<style>
  .my-class {
    color: red;
  }
</style>
```

## external

```html

```

### Ex-1

- Using internal style, design car rental page

1. header h1 - "Rent a Car" with border 1px solid green
2. header h2 - describe the car type with border 1px solid green
3. span - with the price, color text white, background black
4. image - the car you suggest, width & height 500px
5. anchor link - for more info to yad2 site.

### Ex-2

- Create Index page with anchors

1. anchor 1 - redirect to blue.html - a page with blue background
2. anchor 2 - redirect to green.html - a page with green background
3. anchor 3 - redirect to red.html - a page with red background
4. put an option to go back to the index page from each color page

# Homework 1-1-2025

## **Home Assignment 1: Exploring HTML Tags**

### **Objective:**

Learn and practice the usage of the following HTML tags: `<div>`, `<img>`, `<p>`, `<span>`, `<h1>`, `<h2>`, `<h3>`.

### **Instructions:**

1. Create an HTML file named `assignment1.html`.
2. Use the following tags in your file:
   - A `<div>` that acts as a container for the entire content.
   - Add a `<h1>` tag for the main heading of the webpage (e.g., "My First HTML Page").
   - Add a `<h2>` tag for a subheading (e.g., "Introduction").
   - Add a `<h3>` tag for another subheading (e.g., "Details").
   - Use a `<p>` tag to add some descriptive text under each heading.
   - Insert an image (`<img>`) using a publicly accessible URL or a local image file.
   - Use a `<span>` tag to highlight a specific word or phrase in one of your paragraphs with inline styling (e.g., make it bold or change the color).

### **Requirements:**

- Ensure the HTML file is properly structured with a `<head>` and `<body>` section.
- Use descriptive text for your headings and paragraphs.
- Test your HTML file in a browser to confirm it renders correctly.

## **Home Assignment 2: Styling with External CSS**

### **Objective:**

Learn how to use external CSS to style your webpage using classes.

### **Instructions:**

1. Create an HTML file named `assignment2.html`.
2. Create a CSS file named `styles.css` and link it to your HTML file using a `<link>` tag in the `<head>` section.
3. In your HTML file:

   - Create a `<div>` container that holds all the content.
   - Add a `<h1>` tag for the title of your page.
   - Add an image using the `<img>` tag.
   - Write two paragraphs using the `<p>` tag.
   - Use a `<span>` inside one paragraph to emphasize a word.

4. In your CSS file (`styles.css`):

   - Create a class called `.container` and apply the following properties:
     - `border`: 2px solid black;
     - `margin`: 20px;
     - `padding`: 15px;
     - `width`: 80%;
   - Create a class called `.highlight` and apply the following properties:
     - `color`: red;
     - `font-weight`: bold;
   - Create a class called `.image` and apply the following properties:
     - `border`: 5px solid gray;
     - `width`: 300px;
     - `height`: 200px;
   - Apply a background color to the `<div>` and set the text color for `<h1>` using CSS.

5. Use the classes in your HTML file:
   - Apply the `.container` class to the `<div>` element.
   - Apply the `.highlight` class to the `<span>` element.
   - Apply the `.image` class to the `<img>` element.

### **Requirements:**

- Ensure your CSS file is properly linked to the HTML file.
- Test your HTML and CSS in a browser to confirm the styles are applied correctly.
- Use proper indentation and comments in both HTML and CSS files.

### Advanced:

1. Create Anchor in the header of each page.
2. Each Anchor will redirect to the other page, from assignment1.html to assignment2.html and vice versa.
3. Make your image clickable - when clicking the image the site wil redirect to: https://developer.mozilla.org/en-US/

# Exercise: Create a Car Rental Order Page in HTML

## Instructions

1. **Set Up Your HTML File:**

   - Create a new file named `car_rental_order.html`.
   - Use the standard HTML structure (DOCTYPE declaration, `<html>`, `<head>`, and `<body>` tags).
   - create a new file named `order_submitted.html` with h1 contains `Ordered Successfully`

2. **Add a Title and Heading:**

   - Include a `<title>` in the `<head>` section, e.g., "Car Rental Order".
   - Add a `<h1>` heading at the top of the page with the text "Car Rental Order Form".

3. **Create the Form:**

   - Use the `<form>` tag to define the form.
   - Set the `action` attribute to `"order_submitted.html"` (or any placeholder) and the `method` attribute to `GET`.

4. **Add the Following Fields:**

   1. **Name**

      - Input type: text
      - Label: "Full Name" <label>Full Name:</label>
      - Placeholder: "Enter your full name"

   2. **Email**

      - Input type: email
      - Label: "Email Address"
      - Placeholder: "Enter your email"

   3. **Phone Number**

      - Input type: tel
      - Label: "Phone Number"
      - Placeholder: "Enter your phone number"

   4. **Pickup Date**

      - Input type: date
      - Label: "Pickup Date"

   5. **Return Date**

      - Input type: date
      - Label: "Return Date"

   6. **Car Type**

      - Input type: radio buttons
      - Options: "Sedan", "SUV", "Truck", "Convertible"

   7. **Extras**

      - Input type: checkboxes
      - Options: "GPS", "Child Seat", "Additional Driver"

   8. **Rental Duration**

      - Input type: number
      - Label: "Number of Days"

   9. **Pickup Location**

      - Input type: text
      - Label: "Pickup Location"
      - Placeholder: "Enter pickup location"

   10. **Comments**

       - Input type: textarea
       - Label: "Special Requests"
       - Placeholder: "Enter any special requests"

    11. **Pick up from**

       - Input type: select
       - Label: "Pick up location"
       - Options: "Airport", "City", "Mall"

5. **Add a Submit Button:**

   - Use the `<button>` or `<input>` tag with the type set to `submit`.
   - Label the button as "Submit Order".

6. **Style the Form (Optional):**

