import { Question } from "./Question.js";
import { quizArray } from "./quizData.js";
import { questionBoxHeader, questionTitle, optionsBox, pointsDisplay } from "./domElements.js";

export class Quiz {
    private quizArray: Question[];
    public cur: number;
    public points: number;

    constructor() {
        this.quizArray = quizArray;
        this.cur = 0;
        this.points = 0;
    }

    public displayQuestion(): void {
        if (!this.quizArray[this.cur]) {
            alert("Quiz Completed!");
            this.resetQuiz();
        }

        if (questionBoxHeader) questionBoxHeader.textContent = `Question: ${this.cur + 1}`;
        if (questionTitle) questionTitle.textContent = this.quizArray[this.cur].question;

        if (optionsBox) {
            optionsBox.innerHTML = this.quizArray[this.cur].choices
                .map(
                    (choice, index) =>
                        `<input class="form-check-input" type="radio" id="option${index}" name="option" value="${choice}">
                         <label for="option${index}">${choice}</label>
                         <br />`
                )
                .join("");
        }
    }

    public evaluateResponse(selectedAnswer: string): void {
        if (selectedAnswer === this.quizArray[this.cur].correctAnswer) {
            alert("Correct Answer!");
            if (pointsDisplay) pointsDisplay.textContent = String(++this.points);
        } else {
            alert("Wrong Answer!");
        }
        this.cur++;
        this.displayQuestion();
    }

    public resetQuiz(): void {
        this.cur = 0;
        this.points = 0;
        if (pointsDisplay) pointsDisplay.textContent = "0";
        this.displayQuestion();
    }
}
