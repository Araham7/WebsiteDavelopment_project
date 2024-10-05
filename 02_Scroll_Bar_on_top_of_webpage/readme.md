# Scroll Progress Bar

This project implements a simple scroll progress bar using HTML, CSS, and JavaScript. The progress bar visually indicates how much of the page has been scrolled, enhancing the user experience on long web pages.

## Features

- **Dynamic Progress Bar**: The progress bar fills up as the user scrolls down the page.
- **Responsive Design**: The progress bar is fixed at the top of the viewport, ensuring visibility at all times.
- **Customizable Styles**: Easily change the colors and dimensions of the progress bar and container.

## Usage

Simply scroll down the page to see the progress bar in action. As you scroll, the green bar at the top will fill up, indicating the percentage of the page you have scrolled through.

## Code Overview

### HTML Structure

- The `#progress-container` holds the progress bar.
- The `#progress-bar` represents the visual indication of scroll progress.

### CSS Styles

- Styles are included for the body, progress container, and progress bar.
- The body has a height set to `2000px` to demonstrate scrolling.

### JavaScript Functionality

- The `scrollProgress` function calculates the amount scrolled and updates the progress bar's width accordingly.
- The progress bar updates as the user scrolls, using the `onscroll` event listener.

## Customization

Feel free to modify the CSS to change the appearance of the progress bar, or adjust the JavaScript to add more features or functionalities according to your needs.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.
