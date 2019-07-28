import { Component, OnInit } from '@angular/core';
import { NationalService } from 'src/app/services/national.service';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-ok-national',
  templateUrl: './ok-national.component.html',
  styleUrls: ['./ok-national.component.scss']
})
export class OkNationalComponent implements ICellRendererAngularComp {

  public params: any;

  refresh(params: any): boolean {
    return false;
  }

  agInit(params) {
    this.params = params;

  }
  
  afterGuiAttached?() {
  }

  constructor(private national:NationalService) { }

  okNationalToVote()
  {
    // oknational 
    // זוהי פונקציה שנמצאת בקומפוננט
    // ballotBoxManager
    debugger;
    this.params.context.componentParent.okNational(this.params.node.rowIndex)
  }

  ngOnInit() {
  }

}
