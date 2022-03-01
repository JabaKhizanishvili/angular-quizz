interface costumData {
  question: string;
  answer: any[];
}

export const data: costumData[] = [
  {
    question: "What is HTML ?",
    answer: [
      { option: "HyperText Markup language", correct: true },
      { option: "Hyper Duper buumber", correct: false },
      { option: "Putin vladimir vladimirovich", correct: false },
      { option: "Cascade Style Sheet", correct: false },
    ],
  },
  {
    question: "What is Css ?",
    answer: [
      { option: "Cascade Style Sheet", correct: true },
      { option: "HyperText Markup language", correct: false },
      { option: "Programming Language", correct: false },
      { option: "Car", correct: false },
    ],
  },
  {
    question: "How much is 2+2 ?",
    answer: [
      { option: "4", correct: true },
      { option: "2", correct: false },
      { option: "-4", correct: false },
      { option: "0", correct: false },
    ],
  }
]
