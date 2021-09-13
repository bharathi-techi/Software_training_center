import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeModal: string;
  modalOptions:NgbModalOptions;
  technologyList : any = ["Java","Angular","AWS","Python","Oracle"];
  exampleForm:any;
  testimonials: {};


  
  @ViewChild('openModal' , { static: true }) 
  private openModal: TemplateRef<any>;


  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    // templateRef:exampleForm
    ) {
      // this.submitForm();
      this.modalOptions = {
        backdrop:'static',
        backdropClass:'customBackdrop'
      }
    }




  ngOnInit(){
    this.exampleForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile:['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required]],
      technology:  ['', [Validators.required]],
    });

    setTimeout(() => {
        this.modalService.open(this.openModal, this.modalOptions).result.then((res) => {
          this.closeModal = `Closed with: ${res}`;
        }, (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        });
      }, 5000)


      // testimonial
      this.testimonials = [
        {
          id:1,
          name:"Kabilan",
          companyname:"parrys",
          image:"assets/1.jpg",
          feedback:"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est."
        },
        {
          id:2,
          name:"Vambuli",
          companyname:"Washermenpet",
          image:"assets/3.jpg",
          feedback:"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est."
        },
        {
          id:3,
              name:"Dancing Rose",
              companyname:"Washermenpet",
              image:"assets/1.jpg",
              feedback:"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est."
        },
      ]
  }


  triggerModal(content) {
    this.modalService.open(content, this.modalOptions).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
    
  }


  private getDismissReason(reason: any): string {
    console.log("hai--bottom-", this.exampleForm.value);
    console.log("rr-",reason);
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

 
}
