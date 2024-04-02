<?php
// Step 1: Create a variable $states with the given value
$states = "Mississippi Alabama Texas Massachusetts Kansas";

// Step 2: Display the original list of states
echo "<h2>Original List of States:</h2>";
echo "<p>$states</p>";

// Part a) Search for a word in the string $states that ends in "xas"
$matches = [];
preg_match('/\b\w+xas\b/', $states, $matches);

// Initialize the $statesArray
$statesArray = [];

// Store the matched word as element 0 of $statesArray
$statesArray[0] = !empty($matches) ? $matches[0] : "";

// Show contents of Array 
echo "<h2>Array after Part a): </h2>";
echo "<pre>";
print_r($statesArray);
echo "</pre>";

// Part b) 
// Search for a word in the string $states that begins with "k" and ends with "s"
$matches = [];
preg_match('/\bk\w+s\b/i', $states, $matches);

// Store the matched word as element 1 of $statesArray
$statesArray[1] = !empty($matches) ? $matches[0] : "";

// Show contents of Array 
echo "<h2>Array after Part b): </h2>";
echo "<pre>";
print_r($statesArray);
echo "</pre>";

// Part c) Search for a word in the string $states that begins with "M" and ends with "s"
$matches = [];
preg_match('/\bM\w+s\b/i', $states, $matches);

// Store the matched word as element 2 of $statesArray
$statesArray[2] = !empty($matches) ? $matches[0] : "";

// Show contents of Array
echo "<h2>Array after Part c): </h2>";
echo "<pre>";
print_r($statesArray);
echo "</pre>";

// Part d) Search for a word in $states that ends in a. Store this word in element 3 of the array
$matches = [];
preg_match('/\b\w+a\b/i', $states, $matches); // /i means case insensitive \b means blank and \w means word (0 or mult chars)
$statesArray[3] = !empty($matches) ? $matches[0] : "";

echo "<h2>Array after Part d): </h2>";
echo "<pre>";
print_r($statesArray);
echo "</pre>";

// Part e)  Search for a word in $states at the beginning of the string that starts with M. Store this
// word in element 4 of the array.
$matches = [];
preg_match('/^M\w*/i', $states, $matches);
$statesArray[4] = !empty($matches) ? $matches[0] : "";

echo "<h2>Array after Part e): </h2>";
echo "<pre>";
print_r($statesArray);
echo "</pre>";

// Last Step: Output the array $statesArray to the screen
echo "<h2>Array of States:</h2>";
echo "<pre>";
print_r($statesArray);
echo "</pre>";
?>
