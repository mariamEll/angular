import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Article } from 'src/models/Article';
import { ArticleService } from 'src/services/article.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  dataSource: MatTableDataSource<Article>;
  constructor(private ArticleService : ArticleService,private router:Router, private dialog:MatDialog) {
    //this.dataSource=this.ArticleService.tab;
    this.dataSource= new MatTableDataSource(this.ArticleService.tab);
    
   }

  ngOnInit(): void {
  }

//dataSource1:any;


fetchDataSource():void{
  this.ArticleService.GetAllArticles().then((tableau)=>{this.dataSource.data=tableau})
}
delete(id:string):void{
  //1. ouvrir la boite de dialogue
  const dialogRef =this.dialog.open(ConfirmDialogComponent)
 
  //2.attendre le resultat
  dialogRef.afterClosed().subscribe(resultat=>{if (resultat) this.ArticleService.deleteArticle(id).then(()=>{this.fetchDataSource()});});
  //3. if resultat = confir alors 
 
 // this.ArticleService.deleteArticle(id).then(()=>{this.fetchDataSource()}); /// madem bech yraja3li 7aja de type promise lezem na3mel then
}

displayedColumns: string[] = ['type','titre', 'date', 'lien', 'sourcePDF','auteur','icon'];
//ELEMENT_DATA: Article[] = [...this.ArticleService.tab];
//dataSource1 = new MatTableDataSource(this.ELEMENT_DATA);
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  console.log(filterValue);
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
