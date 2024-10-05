<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scroll Progress Bar</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            height: 2000px; /* Example long page */
        }

        /* Progress Bar Container */
        #progress-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background-color: #f3f3f3;
        }

        /* Progress Bar */
        #progress-bar {
            height: 100%;
            width: 0%;
            background-color: #4caf50;
        }
    </style>
</head>
<body>
    <!-- Progress Bar HTML -->
    <div id="progress-container">
        <div id="progress-bar"></div>
    </div>

    <!-- Example content to scroll -->
    <div style="padding: 20px;">
        <h1>Scroll down to see the progress bar in action!</h1>
        <p>This is just an example of content that you can scroll through to test the progress bar. As you scroll, the green bar at the top of the page will fill up, indicating how much of the page you've scrolled through.</p>
    </div>

    <script>
        // Function to update the progress bar on scroll
        window.onscroll = function() {
            scrollProgress();
        };

        function scrollProgress() {
            const scrollTop = document.documentElement.scrollTop;  // How far the user has scrolled
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;  // Total scrollable area
            const scrollPercent = (scrollTop / scrollHeight) * 100;  // Percentage scrolled
            document.getElementById("progress-bar").style.width = `${scrollPercent}%`;  // Update the progress bar width
        }
    </script>
</body>
</html>
