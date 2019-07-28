import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Managers } from 'src/app/classes/managers';
import { ManagersService } from 'src/app/services/managers.service';
import { City } from 'src/app/classes/city';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-ballot-box-manager',
  templateUrl: './edit-ballot-box-manager.component.html',
  styleUrls: ['./edit-ballot-box-manager.component.scss']
})
export class EditBallotBoxManagerComponent implements OnInit {

  registerForm: FormGroup;
  newCity: Managers = new Managers()
  submitted: boolean;
  cities: City[] = [];
  @Input() manager: Managers;
  constructor(private formBuilder: FormBuilder, public managerService: ManagersService,
    public activeModal: NgbActiveModal) { }

  ngOnChanges() {
    this.registerForm.patchValue({
      MIdentity:this.manager.MIdentity,
      MFullName:this.manager.MFullName,
      // MUserName:this.manager.MUserName,
      MPassword:this.manager.MPassword,
      MCity:this.manager.MCity,
      MNumBallotBox:this.manager.MNumBallotBox,
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
      MNumBallotBox:this.manager.MNumBallotBox,
      MailM:this.manager.MailM

    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.managerService.editManagersBallotBox(this.registerForm.value).subscribe(res => {
      alert('succsess');
      this.activeModal.close();
    }, err => {
      alert("error")
    })
  }
}
