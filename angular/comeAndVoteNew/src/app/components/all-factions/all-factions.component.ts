import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../../../app/services/managers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionComponent } from '../action/action.component';
import Swal from 'sweetalert2'
import { EditFactionComponent } from '../edit-faction/edit-faction.component';
import { AddFactionComponent } from '../add-faction/add-faction.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-all-factions',
  templateUrl: './all-factions.component.html',
  styleUrls: ['./all-factions.component.css']
})
export class AllFactionsComponent implements OnInit {

   gridApi;
   gridColumnApi;
  url: string = null;
  blob: Blob;
  urlShow: any;
   columnDefs;
   rowData;
   context;
   frameworkComponents;

   myCellRenderer = (params)=> {
    var binary = atob(params.value);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    var blob= new Blob([new Uint8Array(array)], {
      type: 'image/png'
    });
    var url = window.URL.createObjectURL(blob);
    var urlShow=this.sanitizer.bypassSecurityTrustResourceUrl(url)
    params.value=urlShow;
    return '<img style="width: 68px;height: 42px;" [src]='+params.value+'>';
}
  // valueFormatter: this.currencyFormatter,
  constructor(public managerService: ManagersService, private modalService: NgbModal
    ,public sanitizer: DomSanitizer) {
    this.columnDefs = [
      { headerName: 'שם מפלגה', field: 'factionName', sortable: true, filter: true },
      { headerName: 'מייל מנהל', field: 'leadersMail', sortable: true, filter: true },
      { headerName: ' פתקית', field: 'factionImageBase', sortable: true, filter: true,cellRenderer: this.myCellRenderer },
      { headerName: 'סטטוס', field: 'IsAgree', sortable: true, filter: true },
      {
        headerName: 'פעולות', field: 'MailM', sortable: true, filter: true,
        cellRenderer: "ActionComponent",
      },
    ];

    this.rowData = [];
    this.context = { componentParent: this };
    this.frameworkComponents = {
      ActionComponent: ActionComponent
    };
  }

  ngOnInit() {
    this.managerService.getAllFaction().subscribe(res => {
      this.rowData = res;
    })
  }

  methodFromParentEdit(cell) {
    let modalRef = this.modalService.open(EditFactionComponent)
    modalRef.componentInstance.faction=this.rowData[cell]
    modalRef.result.then((result) => {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'השנויים נשמרו בהצלחה',
        showConfirmButton: false,
        timer: 1500
      })
      this.managerService.getAllFaction().subscribe(res => {
        this.rowData = res;
      })
    }).catch((error) => {
      console.log(error);
    });
  }
  methodFromParentDelete(cell) {

    Swal.fire({
      title: 'האם את בטוח?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'ביטול',
      confirmButtonText: 'מחק!'
    }).then((result) => {
      if (result.value) {
        this.managerService.deleteFaction(this.rowData[cell].id).subscribe(res=>{
          Swal.fire(
            'נמחק!',
            'המלגה נמחקה בהצלחה',
            'success'
          )
          this.managerService.getAllFaction().subscribe(res => {
            this.rowData = res;
          })
        })      
      }
    })
  }

  newFaction() {
    debugger;
    let modalRef = this.modalService.open(AddFactionComponent)
    modalRef.result.then((result) => {
      this.managerService.getAllFaction().subscribe(res => {
        this.rowData = res;
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  currencyFormatter(params) {
    return params.value.cityName;
  }

  dataURItoBlob(dataURI) {
   
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

}
