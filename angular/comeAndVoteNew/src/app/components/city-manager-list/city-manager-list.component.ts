import { Component, OnInit } from '@angular/core';
import { ManagersService } from 'src/app/services/managers.service';
import { ActionComponent } from '../action/action.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCityManagerComponent } from '../edit-city-manager/edit-city-manager.component';
import { AddCityManagerComponent } from '../add-city-manager/add-city-manager.component';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-city-manager-list',
  templateUrl: './city-manager-list.component.html',
  styleUrls: ['./city-manager-list.component.scss']
})
export class CityManagerListComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowData;
  private context;
  private frameworkComponents;
  constructor(public managerService: ManagersService, public modalService: NgbModal,private route:Router) {
    this.columnDefs = [
      { headerName: 'תעודת זהות', field: 'MIdentity', sortable: true, filter: true },
      { headerName: 'שם', field: 'MFullName', sortable: true, filter: true },
      // { headerName: 'שם משתמש', field: 'MUserName', sortable: true, filter: true },
      { headerName: 'סיסמה', field: 'MPassword', sortable: true, filter: true },
      { headerName: 'מייל', field: 'MailM', sortable: true, filter: true },
      {
        headerName: 'עיר', field: 'City.cityName', sortable: true, filter: true,
      },
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
    this.managerService.getManagersCity().subscribe(res => {
      this.rowData = res;
    })
  }

  methodFromParentEdit(cell) {
    let modalRef = this.modalService.open(EditCityManagerComponent)
    modalRef.componentInstance.manager=this.rowData[cell]
    modalRef.result.then((result) => {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'השנויים נשמרו בהצלחה',
        showConfirmButton: false,
        timer: 1500
      })
      this.managerService.getManagersCity().subscribe(res => {
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
        this.managerService.deleteManagersCity(this.rowData[cell].MIdentity).subscribe(res=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.managerService.getManagersCity().subscribe(res => {
            this.rowData = res;
          })
        })      
      }
    })
    debugger;
 
  }

  newCityManager() {
    let modalRef = this.modalService.open(AddCityManagerComponent)
    modalRef.result.then((result) => {
      this.managerService.getManagersCity().subscribe(res => {
        this.rowData = res;
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  currencyFormatter(params) {
    return params.value.cityName;
  }
  // חזרה למנהל ראשי
  returnHeadManage()
  {
    this.route.navigate(['openHeadManager']);
  }
}
