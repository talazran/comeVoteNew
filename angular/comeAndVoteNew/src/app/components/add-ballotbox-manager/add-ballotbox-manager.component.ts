import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Managers } from 'src/app/classes/managers';
import { City } from 'src/app/classes/city';
import { Factions } from 'src/app/classes/factions';
import { ManagersService } from 'src/app/services/managers.service';
import { BallotBox } from 'src/app/classes/ballot-box';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-ballotbox-manager',
  templateUrl: './add-ballotbox-manager.component.html',
  styleUrls: ['./add-ballotbox-manager.component.scss']
})
export class AddBallotboxManagerComponent implements OnInit {
  
    registerForm: FormGroup;
    newCity: Managers = new Managers()
    submitted: boolean;
    cities: City[] = [];
    factions: Factions[] = [];
    ballosForCity:BallotBox[]=[];//בעת הכנסת העיר יאותחל מערך זה 
  
    constructor(private formBuilder: FormBuilder, public managerService: ManagersService,
       public activeModal:NgbActiveModal
      ) { }
  
    ngOnInit() {
      this.managerService.getOptionCity().subscribe(res => {//get the cities arry
        this.cities = res;
      });
      this.managerService.getAllFaction().subscribe(res => {//get the factions arry
        this.factions = res;
      });
      this.registerForm = this.formBuilder.group({
        MIdentity: ['', Validators.required, Validators.minLength(9), Validators.maxLength(9)],
        MFullName: ['', Validators.required],
        MCity: ['', Validators.required],
        Mfaction: [''],
        MNumBallotBox: [''],
        MailM: ['', [Validators.required, Validators.email]]
      }, {
          // validator: MustMatch('password', 'confirmPassword')
        });
    }
  
    get f() { return this.registerForm.controls; }
  
    onSubmit() {
      this.submitted = true;
  
      if (this.registerForm.invalid) {
        return;
      }
      debugger;
      this.managerService.AddNewballotBoxManager(this.registerForm.value).subscribe(res=>{
        Swal.fire(
          'הצליח!',
          'מנהל קלפי נוסף בהצלחה',
          'success'
        )       
         this.activeModal.close();
        this.activeModal.dismiss();
      },err=>{
        Swal.fire({
          type: 'error',
          title: 'נכשל',
          text: 'הוספת מנהל קלפי נכשלה'
        })
      })
    }

    chooseCity()
    {
      debugger;
      this.managerService.getBallotBoxByCity(this.registerForm.controls['MCity'].value).subscribe(res=>{
        this.ballosForCity=res;
      })
    }
  
  }