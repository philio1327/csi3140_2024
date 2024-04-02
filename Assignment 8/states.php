<?php
// Step 1: Create a variable $states with the given value
$states = "Mississippi Alabama Texas Massachusetts Kansas";

// Step 2: Display the original list of states
echo "<h2>Original List of States:</h2>";
echo "<p>$states</p>";

// Step 3: Split the string into an array of states
$statesArray = explode(" ", $states);

// Step 4: Search for a word in $states that ends in "xas" and store it in element 0 of $statesArray
foreach ($statesArray as $state) {
    if (substr($state, -3) === "xas") {
        $statesArray[0] = $state;
        break;
    }
}

// Step 5: Search for a word in $states that begins with "k" and ends in "s" and store it in element 1 of $statesArray
foreach ($statesArray as $state) {
    if (strtolower(substr($state, 0, 1)) === "k" && strtolower(substr($state, -1)) === "s") {
        $statesArray[1] = $state;
        break;
    }
}

// Step 6: Search for a word in $states that begins with "M" and ends in "s" and store it in element 2 of $statesArray
foreach ($statesArray as $state) {
    if (strtoupper(substr($state, 0, 1)) === "M" && strtolower(substr($state, -1)) === "s") {
        $statesArray[2] = $state;
        break;
    }
}

// Step 7: Search for a word in $states that ends in "a" and store it in element 3 of $statesArray
foreach ($statesArray as $state) {
    if (strtolower(substr($state, -1)) === "a") {
        $statesArray[3] = $state;
        break;
    }
}

// Step 8: Search for a word in $states at the beginning of the string that starts with "M" and store it in element 4 of $statesArray
foreach ($statesArray as $state) {
    if (strtoupper(substr($state, 0, 1)) === "M") {
        $statesArray[4] = $state;
        break;
    }
}

// Step 9: Output the array $statesArray to the screen
echo "<h2>Array of States:</h2>";
echo "<pre>";
print_r($statesArray);
echo "</pre>";
?>
