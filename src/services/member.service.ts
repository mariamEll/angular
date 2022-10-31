import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { database } from 'src/app/app-config';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab :Member[]= database._db.members;
 constructor(private httpClient: HttpClient)
 {

 }
 saveMember(member:any):Promise<Member>{
  //return this.httpClient.post<Member>("linktorestAPI", member.toPromise());

       

  const memberToSave={...member, 
    id:member.id?? (Math.ceil(Math.random()*10000)).toString(),
    createDate:member.createDate?? new Date().toISOString(), //extraction de id et createdDate
  };
 this.tab= [memberToSave,...this.tab.filter(item=>item.id!=memberToSave.id)];
 return new Promise(resolve=>resolve(memberToSave));
 }
 getMemberByID(id:string):Promise<Member>{

  //return this.httpClient.get<Member>("link").toPromise();
  return new Promise(resolve=>resolve(this.tab.filter(item=>item.id===id)[0]?? null));
 }
 deleteMember(id:string):Promise<void>{
  //si on avait la partie backend nektbou: this.httpClient.delete<void>("link").toPromise();
  this.tab=[...this.tab.filter(item=>item.id!=id)];
  return new Promise(resolve=>resolve()); //bech nhezz les éléments eli bech yo93dou fil liste elii l'id mte3hom différent de l'id mta lmember id eli bech nefs5ou
}
GetAllMembers():Promise<Member[]>{
//return this.httpCLie.get<Member[]>("link").toPromise();
return new Promise(resolve=>resolve(this.tab))

}
}
