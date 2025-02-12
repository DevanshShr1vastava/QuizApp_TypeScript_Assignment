import { Quiz } from "./Quiz.js";
import { setupEventHandlers } from "./eventHandlers.js";

document.addEventListener("DOMContentLoaded", () => {
    const quiz = new Quiz();
    quiz.displayQuestion();
    setupEventHandlers(quiz);
});
