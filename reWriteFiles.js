const fs = require("fs");

// Read the JSON file
fs.readFile("./src/utils/examQuestion.json", "utf8", (err, data) => {
	if (err) {
		console.error("Error reading JSON file:", err);
		return;
	}

	try {
		// Parse the JSON data
		const jsonQuestions = JSON.parse(data);

		// Get the array for the subject
		const subjectArray = jsonQuestions["برمجة مواقع الويب"];

		// Shuffle the questions array
		const shuffledArray = shuffle(subjectArray);

		// Update the IDs and order of the array elements
		shuffledArray.forEach((question, index) => {
			question.id = index; // Set the ID to the new index value
		});

		// Convert the modified JSON object back to a string
		const updatedJson = JSON.stringify(jsonQuestions, null, 2);

		// Write the updated JSON back to the file
		fs.writeFile(
			"./src/utils/examQuestion.json",
			updatedJson,
			"utf8",
			(err) => {
				if (err) {
					console.error("Error writing JSON file:", err);
					return;
				}

				console.log("JSON file updated successfully.");
			}
		);
	} catch (error) {
		console.error("Error parsing JSON:", error);
	}
});

// Function to shuffle an array using Fisher-Yates algorithm
function shuffle(array) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
