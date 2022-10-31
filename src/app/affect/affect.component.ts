import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { ArticleService } from 'src/services/article.service';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-affect',
  templateUrl: './affect.component.html',
  styleUrls: ['./affect.component.css']
})
export class AffectComponent implements OnInit {
  tab: Member[];
  currentID: string="";
  constructor(private articleService:ArticleService,private memberService:MemberService,  private router:Router, private activatedRoute: ActivatedRoute) { 
    this.tab=this.memberService.tab;

  }

  ngOnInit(): void {
   
  }
  selected = 'option2';
  add(name: string):void{
    //1. recuperer id à partir de l'url 
    this.currentID=this.activatedRoute.snapshot.params['id'];
    //2. si id existe 
    if (!!this.currentID)
    
    //3. appeler la fonction affecte du service 
    this.articleService.affect(name,this.currentID).then(()=>  {this.router.navigate(["/articles"])}); 

  }
}
