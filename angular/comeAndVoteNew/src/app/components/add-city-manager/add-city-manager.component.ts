import { Component, OnInit } from '@angular/core';
import { Managers } from 'src/app/classes/managers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/classes/city';
import { ManagersService } from 'src/app/services/managers.service';
import { ActivationEnd, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-city-manager',
  templateUrl: './add-city-manager.component.html',
  styleUrls: ['./add-city-manager.component.scss']
})
export class AddCityManagerComponent implements OnInit {

  registerForm: FormGroup;
  newCity: Managers = new Managers();
  submitted: boolean;
  cities: City[] = [];
  constructor(private router:Router,private formBuilder: FormBuilder, public managerService: ManagersService,
    public activeModal:NgbActiveModal) { }

  ngOnInit() {
    this.managerService.getOptionCity().subscribe(res => {
      this.cities = res;
    })
    this.registerForm = this.formBuilder.group({
      MIdentity: ['', Validators.required, Validators.minLength(9), Validators.maxLength(9)],
      MFullName: ['', Validators.required],
      MUserName: ['', [Validators.required]],
      MPassword: ['', [Validators.required, Validators.minLength(6)]],
      MCity: ['העיר בה הנך מנהל', Validators.required],
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
    this.managerService.addManagersCity(this.registerForm.value).subscribe(res=>{
  
     Swal.fire(
      'הצליח!',
      'מנהל העיר נוסף בהצלחה',
      'success'
    )
      this.activeModal.close();
    },err=>{
      Swal.fire({
        type: 'error',
        title: 'נכשל',
        text: 'הוספת משתמש העיר נכשלה'
      })
    })
    // this.router.navigate(['headManager']);
  }
}