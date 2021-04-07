import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { QuestionClass } from './question-class';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer!: number;
	questionObj = new QuestionClass();
	@ViewChild('submitModal')
	submitModal!: ModalDirective;
	@ViewChild('addQuestionModal')
	addQuestionModal!: ModalDirective;
	@ViewChild('answerModal')
	answerModal!: ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

	constructor( private toastr: ToastrService) {
  }

	answerArray = [];

	/**Method call on submit the test */
	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}
		}
		this.submitModal.show();
	}
	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}
		}
		this.questionTest.reset();
		this.isQuestionCardShow = true;
	}
	HomePage() {
		this.isQuestionCardShow = false;
	}
	addQuestion(){
		this.addQuestionModal.show();
	}
	submitAddQuestion(){
		let quesTemp = JSON.parse(JSON.stringify(this.questionObj));
		quesTemp["id"] = this.allQuestions.length+1;
		this.allQuestions.push(quesTemp);
		this.questionForm.reset();
		this.toastr.success("Du har lagt till frågan!");
		this.addQuestionModal.hide();
	}
	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
	}
	ngOnInit() {
	}
  // Alla frågorna till quizet
  allQuestions: any = [{
		"id": 1,
		"question": "Hur många procent av Sveriges befolkning har sett en film på bio de senaste 12 månaderna?",
		"a": "21%",
		"b": "53%",
		"c": "77%",
		"d": "85%",
		"answer": "c"
	},
	{
		"id": 2,
		"question": "Hur många procent av Sveriges befolkning har besökt ett museum de senaste 12 månaderna?",
    "a": "21%",
		"b": "53%",
		"c": "77%",
		"d": "85%",
		"answer": "b"
	},
	{
		"id": 3,
		"question": "Hur många procent av Sveriges befolkning har sett en stand up-föreställning de senaste 12 månaderna?",
		"a": "21%",
		"b": "53%",
		"c": "77%",
		"d": "85%",
		"answer": "a"
	},
	{
		"id": 4,
		"question": "Hur många procent av Sveriges befolkning har tidigare sett en teaterföreställning, men inte de senaste 3 åren?",
		"a": "2%",
		"b": "9%",
		"c": "15%",
		"d": "28%",
		"answer": "d"
	},
	{
		"id": 5,
		"question": "Hur många procent av Sveriges befolkning har aldrig varit på en live-konsert, och är inte heller intresserad?",
		"a": "3%",
		"b": "12%",
		"c": "24%",
		"d": "37%",
		"answer": "a"
	},
	{
		"id": 6,
		"question": "Hur många procent av Sveriges befolkning har aldrig sett modern dans eller balett, men skulle vara intresserad av att gå på en föreställning någon gång? ",
		"a": "3%",
		"b": "12%",
		"c": "24%",
		"d": "37%",
		"answer": "c"
	}
	];

}
