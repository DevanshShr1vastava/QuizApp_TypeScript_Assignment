import { Quiz } from "./Quiz.js";
import { nextQuestionButton, resetQuizButton } from "./domElements.js";

export function setupEventHandlers(quiz: Quiz): void {
    if (nextQuestionButton) {
        nextQuestionButton.addEventListener("click", () => {
            const selectedOption = document.querySelector('input[name="option"]:checked') as HTMLInputElement | null;

            if (selectedOption) {
                quiz.evaluateResponse(selectedOption.value);
            } else {
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
