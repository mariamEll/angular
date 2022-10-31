import { GlobalPositionStrategy } from '@angular/cdk/overlay';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';
import { database } from '../app-config';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
   dataSource: MatTableDataSource<Member>;
  constructor(private MemberService : MemberService,private router:Router, private dialog:MatDialog) {
    //this.dataSource=this.MemberService.tab;
    this.dataSource= new MatTableDataSource(this.MemberService.tab);
    
   }

  ngOnInit(): void {
  }

//dataSource1:any;


fetchDataSource():void{
  this.MemberService.GetAllMembers().then((tableau)=>{this.dataSource.data=tableau})
}
delete(id:string):void{
  //1. ouvrir la boite de dialogue
  const dialogRef =this.dialog.open(ConfirmDialogComponent)
 
  //2.attendre le resultat
  dialogRef.afterClosed().subscribe(resultat=>{if (resultat) this.MemberService.deleteMember(id).then(()=>{this.fetchDataSource()});});
  //3. if resultat = confir alors 
 
 // this.MemberService.deleteMember(id).then(()=>{this.fetchDataSource()}); /// madem bech yraja3li 7aja de type promise lezem na3mel then
}

displayedColumns: string[] = ['id','cin', 'name', 'createDate', 'cv','type','icon'];
//ELEMENT_DATA: Member[] = [...this.MemberService.tab];
//dataSource1 = new MatTableDataSource(this.ELEMENT_DATA);
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  console.log(filterValue);
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
