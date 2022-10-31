import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  range :any;
  form :any;
  formDate:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.initForm2();
  }
  initForm():void{ // initialiser  le formulaire
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
    });
    this.range = new FormGroup({
      start: new FormControl(null),
      end: new FormControl(null),
    })
  }
  initForm2():void{ // initialiser  le formulaire
    this.range = new FormGroup({
      start: new FormControl(null),
      end: new FormControl(null),
    })
  }
  ONSUB(): void{
    //récupération de l'élément
    console.log(this.form.value);
    console.log(this.range.value)
   // const objectToSubmit=this.form.value; 
    //invocation de la méthode de service qui envoie http(post)
   // this.memberService.saveMember(objectToSubmit).then(()=>{this.router.navigate(['./members'])});
  }
}
