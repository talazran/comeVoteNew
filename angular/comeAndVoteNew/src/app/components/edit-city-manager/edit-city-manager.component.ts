import { Component, OnInit, Input } from '@angular/core';
import { Managers } from 'src/app/classes/managers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from '../../classes/city';
import { from } from 'rxjs';
import { ManagersService } from '../../services/managers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-city-manager',
  templateUrl: './edit-city-manager.component.html',
  styleUrls: ['./edit-city-manager.component.scss']
})
export class EditCityManagerComponent implements OnInit {

  registerForm: FormGroup;
  newCity: Managers = new Managers()
  submitted: boolean;
  cities: City[] = [];
  @Input() manager: Managers;
  constructor(private route:Router,private formBuilder: FormBuilder, public managerService: ManagersService,
    public activeModal: NgbActiveModal) { }

  ngOnChanges() {
    this.registerForm.patchValue({
      MIdentity:this.manager.MIdentity,
      MFullName:this.manager.MFullName,
      // MUserName:this.manager.MUserName,
      MPassword:this.manager.MPassword,
      MCity:this.manager.MCity,
      MailM:this.manager.MailM
    })
  } 

  ngOnInit() {
    this.managerService.getOptionCity().subscribe(res => {
      this.cities = res;
    })
    this.registerForm = this.formBuilder.group({
      MIdentity: [, Validators.required],
      MFullName: [, Validators.required],
      MUserName: [, [Validators.required]],
      MPassword: [, [Validators.required]],
      MCity: [, Validators.required],
      MailM: [, [Validators.required]]
    }, {});
    this.registerForm.patchValue({
      MIdentity:this.manager.MIdentity,
      MFullName:this.manager.MFullName,
      // MUserName:this.manager.MUserName,
      MPassword:this.manager.MPassword,
      MCity:this.manager.MCity,
      MailM:this.manager.MailM

    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.route.navigate(['cityManagerList']);
    if (this.registerForm.invalid) {
      return;
    }
    this.managerService.editManagersCity(this.registerForm.value).subscribe(res => {
      alert('succsess');
      this.activeModal.close();
    }, err => {
      alert("error")
    })
  }
}
