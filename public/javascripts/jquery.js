
$(document).ready(function () {
    // Initialize the height slider
    const heightSlider = $("#heightSlider");
    const heightLabel = $("#heightLabel");

    heightSlider.on("input", function () {
        const height = heightSlider.val();
        heightLabel.text(height + " cm");
    });

    // Initialize the height input and buttons
    const heightInput = $("#heightInput");
    const ageInput = $("#ageInput");
    const incrementBtn = $("#incrementHeight");
    const decrementBtn = $("#decrementHeight");

    

    // Event listener for the height input
    heightInput.on("input", function () {
        updateHeight();
    });

    // Event listeners for the increment and decrement buttons
    incrementBtn.click(function () {
        const currentHeight = parseFloat(heightInput.val());
        if (!isNaN(currentHeight)) {
            heightInput.val(currentHeight + 1);
            updateHeight();
        }
    });

    decrementBtn.click(function () {
        const currentHeight = parseFloat(heightInput.val());
        if (!isNaN(currentHeight) && currentHeight > 0) {
            heightInput.val(currentHeight - 1);
            updateHeight();
        }
    });
    

    // Calculate BMI when the Calculate button is clicked
    $("#calculateBtn").click(function () {
        const weight = parseFloat($("#weightInput").val());
        const height = parseFloat(heightInput.val());

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const heightInMeters = height / 100; // Convert height to meters
            const bmi = weight / (heightInMeters * heightInMeters);
            $("#bmiResult").text("Your BMI: " + bmi.toFixed(2));
        } else {
            $("#bmiResult").text("Please enter valid weight and height.");
        }
    });

    // Initialize the height label and slider
    updateHeight();
});


    