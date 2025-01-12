# Digital Clock

This project is a simple **Digital Clock** implemented using HTML, CSS, and JavaScript. It dynamically updates the time and date in real-time using JavaScript's `Date` object and `setInterval`.

## Features

- Displays the current **hour**, **minute**, and **second** in a digital clock format.
- Shows the current **day**, **month**, and **year**.
- Automatically updates every second to reflect the current time.
- Adds leading zeros to single-digit time values for a consistent display.

## File Structure

- `index.html`: The main HTML file containing the structure of the clock.
- `main.css`: The CSS file for styling the clock.
- `main.js`: The JavaScript file for handling the clock's logic.
- `clock-g587b4f152_1920.jpg`: An optional background image (if used).

## How It Works

1. **JavaScript Logic**:  
   - The `getTime()` function uses the `Date` object to fetch the current time and date.
   - Conditional logic ensures single-digit values (e.g., `9`) are padded with a zero (`09`).
   - The time and date are updated in the DOM using `querySelector`.

2. **Real-Time Updates**:  
   - The `setInterval()` function calls `getTime()` every second, ensuring the clock stays in sync.

3. **HTML Structure**:  
   - The clock's time and date elements are selected dynamically in the script and updated.

## Setup and Usage

1. Clone or download the project files to your local environment.
2. Open `index.html` in any modern web browser to view the digital clock.
3. Optionally, modify the CSS (`main.css`) for custom styling.


## Dependencies

- No external libraries or frameworks are required. The project uses plain JavaScript, HTML, and CSS.

## Customization

- **Background**: Replace `clock-g587b4f152_1920.jpg` with your desired background image.
- **Styling**: Edit `main.css` to change fonts, colors, or layout.

