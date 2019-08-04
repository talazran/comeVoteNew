import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Factions } from '../../classes/factions';
import { City } from 'src/app/classes/city';
import { ManagersService } from 'src/app/services/managers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-faction',
  templateUrl: './add-faction.component.html',
  styleUrls: ['./add-faction.component.css']
})
export class AddFactionComponent implements OnInit {

  registerForm: FormGroup;
  newCity: Factions = new Factions()
  submitted: boolean;
  constructor(private formBuilder: FormBuilder, public managerService: ManagersService,
    public activeModal:NgbActiveModal) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      factionName: ['', Validators.required],
      leadersMail: ['', [Validators.required,Validators.email]],
     // note: ['', [Validators.required, Validators.minLength(6)]],
     IsAgree: ['', Validators.required],
    }, {
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    debugger;
    this.managerService.addFaction(this.registerForm.value,this.imagePath).subscribe(res=>{
      alert('succsess');
      this.activeModal.close();
    },err=>{
      alert("error")
    })
  }

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}
