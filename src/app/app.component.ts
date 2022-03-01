import { Component } from '@angular/core';
// import { data } from './data/data';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'quizz';
  data: any = [];
  show: boolean = true;
  finish: boolean = false;
  questions: boolean = false;

  currentQuestion: number = 0;
  jaba() {
    this.show = !this.show;
    this.questions = !this.questions;
    console.log(this.show);
  }
  back(): void {
    this.show = true;
    this.questions = false;
    this.currentQuestion = 0;
    this.finish = false;

  }
  check() {
    if (this.currentQuestion >= this.data.length - 1) {
      this.finish = true;
      let body = document.querySelector('#finishimg') as HTMLElement;
      let main = document.querySelector('#quizz') as HTMLElement;
      main.style.maxWidth = `400px`;
      main.style.maxHeight = `500px`;
      main.style.textAlign = 'center';
      body.innerHTML = `
        <img style='max-width:250px' src="./assets/pic.jpg" alt='error'/>
        <p class='mt-2 text-success'>ნამდვილი სტუკელი</p>
      `
    } else {
      this.currentQuestion++;
    }
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();

    // console.log(this.data);

  }
}
