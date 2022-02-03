// TODO: Declare any global variables we need
let totalHeads = 0;
let totalTails = 0;

document.addEventListener('DOMContentLoaded', function () {

    //DECLARE DOM ELEMENTS
    //image and message
    const pennyImage = document.getElementById("penny-image");
    const message = document.getElementById("message");

    //table

    //FLIP BUTTON
    document.getElementById("flip").addEventListener("click", () => {

        //determine roll, less than 0.5 is heads; update message and table
        if (Math.random() < 0.5) {
            pennyImage.src = "assets/images/penny-heads.jpg";
            message.textContent = "You Flipped Heads";
            totalHeads++;
        } else {
            pennyImage.src = "assets/images/penny-tails.jpg";
            message.textContent = "You Flipped Tails";
            totalTails++;
        }

        //update scoreboard
        //save total
        let total = totalHeads + totalTails;

        //store percentages
        let headsPercent = 0;
        let tailsPercent = 0;

        if (total > 0) {
            headsPercent = Math.round((totalHeads / total) * 100);
            tailsPercent = Math.round((totalTails / total) * 100);
        }

        //update scoreboard values
        document.getElementById("heads").textContent = totalHeads;
        document.getElementById("heads-percent").textContent = `${headsPercent}%`
        document.getElementById("tails").textContent = totalTails;
        document.getElementById("tails-percent").textContent = `${tailsPercent}%`

    })

    //CLEAR BUTTON
    document.getElementById("clear").addEventListener("click", () => {

        //reset global variables
        totalHeads = 0;
        totalTails = 0;

        //update message
        message.textContent = "Let\'s Get Rolling!";

        //update scoreboard
        document.getElementById("heads").textContent = "0";
        document.getElementById("heads-percent").textContent = "0%";
        document.getElementById("tails").textContent = "0";
        document.getElementById("tails-percent").textContent = "0%";
    })

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})