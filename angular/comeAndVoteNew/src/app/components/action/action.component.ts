import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements ICellRendererAngularComp {
  public params: any;

  refresh(params: any): boolean {
    return false;
  }

  agInit(params) {
    this.params = params;

  }
  
  afterGuiAttached?() {
  }

  public invokeParentMethodEdit() {
    this.params.context.componentParent.methodFromParentEdit(this.params.node.rowIndex)
  }
  public invokeParentMethodDelete() {
    this.params.context.componentParent.methodFromParentDelete(this.params.node.rowIndex)
  }
  constructor() { }
}
