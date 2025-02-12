import { nextQuestionButton, resetQuizButton } from "./domElements.js";
export function setupEventHandlers(quiz) {
    if (nextQuestionButton) {
        nextQuestionButton.addEventListener("click", () => {
            const selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption) {
                quiz.evaluateResponse(selectedOption.value);
            }
            else {
                alert("Select an option!");
            }
        });
    }
    if (resetQuizButton) {
        resetQuizButton.addEventListener("click", () => {
            alert("Resetting the quiz!");
            quiz.resetQuiz();
        });
    }
}
