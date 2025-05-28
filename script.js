<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple JavaScript Example</title>
</head>
<body>
  <h1>Welcome to JavaScript!</h1>
  <button id="myButton">Click Me</button>

  <script>
    // JavaScript to handle button click
    document.getElementById('myButton').addEventListener('click', function() {
      alert('Hello! You clicked the button.');
    });
  </script>
</body>
</html>

