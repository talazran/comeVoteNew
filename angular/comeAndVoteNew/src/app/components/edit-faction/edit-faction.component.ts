import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Factions } from 'src/app/classes/factions';
import { ManagersService } from 'src/app/services/managers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-faction',
  templateUrl: './edit-faction.component.html',
  styleUrls: ['./edit-faction.component.css']
})
export class EditFactionComponent implements OnInit {

  registerForm: FormGroup;
  faction:Factions=new Factions();
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
      this.registerForm.patchValue({
        factionName:this.faction.factionName,
        leadersMail:this.faction.leadersMail,
        IsAgree:this.faction.IsAgree,  
      })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    debugger;
    var value=this.registerForm.value;
    value.id=this.faction.Id;
    this.managerService.editFaction(value,this.imagePath).subscribe(res=>{
      Swal.fire(
        'הצליח!',
        'success'
      )
      this.activeModal.close();
    },err=>{
      Swal.fire({
        type: 'error',
        title: 'נכשל',
        text: 'עריכת מפלגה נכשלה'
      })
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
