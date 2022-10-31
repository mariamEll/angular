import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { database } from 'src/app/app-config';
import { Article } from 'src/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  tab :Article[]= database._db.articles;
  constructor(private httpClient: HttpClient) { }


  affect(val:string,currentID:string):Promise<void>{
    this.getArticleByID(currentID).then((art)=>{art.auteur=val})
    return new Promise (resolve=>resolve());
  }
  

 saveArticle(article:any):Promise<Article>{
  //return this.httpClient.post<Article>("linktorestAPI", Article.toPromise());

       

  const articleToSave={...article, 
    id:article.idArticle?? (Math.ceil(Math.random()*10000)).toString(),
    createDate:article.date?? new Date().toISOString(), //extraction de id et createdDate
  };
 this.tab= [articleToSave,...this.tab.filter(item=>item.idArticle!=articleToSave.id)];
 return new Promise(resolve=>resolve(articleToSave));
 }
 getArticleByID(id:string):Promise<Article>{

  //return this.httpClient.get<Article>("link").toPromise();
  return new Promise(resolve=>resolve(this.tab.filter(item=>item.idArticle===id)[0]?? null));
 }
 deleteArticle(id:string):Promise<void>{
  //si on avait la partie backend nektbou: this.httpClient.delete<void>("link").toPromise();
  this.tab=[...this.tab.filter(item=>item.idArticle!=id)];
  return new Promise(resolve=>resolve()); //bech nhezz les éléments eli bech yo93dou fil liste elii l'id mte3hom différent de l'id mta lArticle id eli bech nefs5ou
}
GetAllArticles():Promise<Article[]>{
//return this.httpCLie.get<Article[]>("link").toPromise();
return new Promise(resolve=>resolve(this.tab))

}
}
