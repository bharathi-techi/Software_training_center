import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  techiForm : FormGroup;
  coursesData : [{}];

  technologyList : any = [
    { id:1, course: "Java" },
    { id:2, course: "Angular" },
    { id:3, course: "AWS" },
    { id:4, course: "Python" },
    { id:5, course: "Oracle" },
    { id:1, course: "Java" },
    { id:2, course: "Angular" },
    { id:3, course: "AWS" },
    { id:4, course: "Python" },
    { id:5, course: "Oracle" },
    { id:1, course: "Java" },
    { id:2, course: "Angular" },
    { id:3, course: "AWS" },
    { id:4, course: "Python" },
    { id:5, course: "Oracle" },
    { id:1, course: "Java" },
    { id:2, course: "Angular" },
    { id:3, course: "AWS" },
    { id:4, course: "Python" },
    { id:5, course: "Oracle" },
    { id:1, course: "Java" },
    { id:2, course: "Angular" },
    { id:3, course: "AWS" },
    { id:4, course: "Python" },
    { id:5, course: "Oracle" },
    { id:1, course: "Java" },
    { id:2, course: "Angular" },
    { id:3, course: "AWS" },
    { id:4, course: "Python" },
    { id:5, course: "Oracle" },
    { id:1, course: "Java" },
    { id:2, course: "Angular" },
    { id:3, course: "AWS" },
    { id:4, course: "Python" },
    { id:5, course: "Oracle" },
    { id:1, course: "Java" },
    { id:2, course: "Angular" },
    { id:3, course: "AWS" },
    { id:4, course: "Python" },
    { id:5, course: "Oracle" },
  ];
  // changeTechnology : any;

  constructor(
    private fb: FormBuilder,  
  ) { }

  ngOnInit(): void {
    console.log("oninit",this.technologyList[1])
    this.techiForm = this.fb.group({
      technologyItems: [1]
    });

    console.log("values--",this.techiForm.value);


    this.coursesData = [
      { id:1,
        coursename:"Python",
        courseoverview:"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.",
        syllabus:[
                  {
                    title:"intro",
                    subtitle:"1.haiiii",
                  },
                  {
                    title:"hai intro",
                    subtitle:"Cars came into global use during the 20th century, and developed economies depend on them. The year 1886 is regarded as the birth year of the car when German inventor Karl Benz patented his Benz Patent-Motorwagen.[1][4][5] Cars became widely available in the early 20th century. One of the first cars accessible to the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced animal-drawn carriages and carts, but took much longer to be accepted in Western Europe and other parts of the world Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex, but also more reliable and easier to operate.[citation needed] These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fueled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than gasoline cars before 2025.[6][7] The transition from fossil fuels to electric cars features prominently in most climate change mitigation scenarios,[8] such as Project Drawdown's 100 actionable solutions for climate change.[9]"
                  }
                ],
        salary:[
                {
                  experiance:"2",
                  salary:"1000k",
                  company:"MNC"
                }
              ]
      }
    ]
  }
  changeTechnology(){

  }
}
