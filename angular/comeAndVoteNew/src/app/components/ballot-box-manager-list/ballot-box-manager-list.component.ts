import { Component, OnInit } from '@angular/core';
import { ManagersService } from 'src/app/services/managers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionComponent } from '../action/action.component';
import Swal from 'sweetalert2';
import { EditBallotBoxManagerComponent } from '../edit-ballot-box-manager/edit-ballot-box-manager.component';
import { Router } from '@angular/router';
import { AddBallotboxManagerComponent } from '../add-ballotbox-manager/add-ballotbox-manager.component';
import { disableBindings } from '@angular/core/src/render3';

@Component({
  selector: 'app-ballot-box-manager-list',
  templateUrl: './ballot-box-manager-list.component.html',
  styleUrls: ['./ballot-box-manager-list.component.scss']
})
export class BallotBoxManagerListComponent implements OnInit {
  
   gridApi;
   gridColumnApi;
   columnDefs;
   rowData;
   context;
   frameworkComponents;

  constructor(private route:Router,public managerService: ManagersService, private modalService: NgbModal) {
    this.columnDefs = [
      { headerName: 'תעודת זהות', field: 'MIdentity', sortable: true, filter: true },
      { headerName: 'שם', field: 'MFullName', sortable: true, filter: true },
      { headerName: 'סיסמה', field: 'MPassword', sortable: true, filter: true },
      { headerName: 'מייל', field: 'MailM', sortable: true, filter: true },
      { headerName: 'מספר קלפי', field: 'MNumBallotBox', sortable: true, filter: true },
      {
        headerName: 'עיר', field: 'City.cityName', sortable: true, filter: true,
        // valueFormatter: this.currencyFormatter,
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
    this.managerService.getManagersBallotBox().subscribe(res => {
      this.rowData = res;
    })
  }

  returnCityManage()
  {
    this.route.navigate(['openCityManager']);
  }

  methodFromParentEdit(cell) {
    //העריכה לא עובדת
    debugger;
    let modalRef = this.modalService.open(EditBallotBoxManagerComponent)
    modalRef.componentInstance.manager=this.rowData[cell]
    modalRef.result.then((result) => {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'השנויים נשמרו בהצלחה',
        showConfirmButton: false,
        timer: 1500
      })
      this.managerService.getManagersBallotBox().subscribe(res => {
        this.rowData = res;
      })
    }).catch((error) => {
      //alert("error")
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
        this.managerService.deleteManagersBallotBox(this.rowData[cell].MIdentity).subscribe(res=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.managerService.getManagersBallotBox().subscribe(res => {
            this.rowData = res;
          })
        })      
      }
    })
    debugger;
 
  }

  newBallotBoxManager() {
    debugger;
    let modalRef = this.modalService.open(AddBallotboxManagerComponent)
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
}
