import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjecService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjecService]
})
export class DetailComponent implements OnInit {
public url:string;
public project:any;

  constructor(
    private _projectService:ProjecService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url=Global.url;
    this.project=""
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params.id;

      this.getProject(id);
    })
  }
  
  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response=>{
        this.project=response.project;
      },
      error=>{
        console.log(<any>error)
      }
    );
  }

}
