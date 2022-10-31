import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-members-from',
  templateUrl: './members-from.component.html',
  styleUrls: ['./members-from.component.css']
})
export class MembersFromComponent implements OnInit {
  form :any;
  item1:any;
  currentID: string="";
  constructor(private memberService:MemberService, private router:Router, private activatedRoute:ActivatedRoute) 
  { console.log("je suis dans constructeur");}
  
  ngOnInit(): void {  
    console.log("je suis dans init");    
    //this.initForm();
    {
      this.initForm()
      this.currentID= this.activatedRoute.snapshot.params.id;//1.recuperation de l'id à partir de l'url 
      console.log(this.currentID)
      //2.tester sur la valeur de l'id 
      if (!!this.currentID)
      //3.si id a une valeur => getMemberById(id)=> member 
      this.memberService.getMemberByID(this.currentID).then((item)=>{this.item1=item;this.initForm1(this.item1)}); ////item1 variable local fiha retour mta lfonction getMemberByID
      else this.initForm();
      //4.extraction 
      //5. sinon this.initForm();
    }
  }

  initForm1(M:any):void{ // initialiser  le formulaire
    this.form = new FormGroup({
      cin: new FormControl(M.cin, Validators.required),
      name: new FormControl(M.name, Validators.required),
    cv: new FormControl(M.cv, Validators.required),
    type: new FormControl(M.type, Validators.required),
      
    });
  }

initForm():void{ // initialiser  le formulaire
  this.form = new FormGroup({
    cin: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    cv: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
  });
}



ONSUB(): void{
  //récupération de l'élément
  console.log(this.form.value)
 // const objectToSubmit=this.form.value; 
  const objectToSubmit={...this.item1,...this.form.value}; 
  //invocation de la méthode de service qui envoie http(post)
  this.memberService.saveMember(objectToSubmit).then(()=>{this.router.navigate(['./members'])});
  
}

}
