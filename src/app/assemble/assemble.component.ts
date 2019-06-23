import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as _ from 'underscore';
@Component({
  templateUrl: 'assemble.component.html',
  
})
export class AssembleComponent implements OnInit {
  ListItem=[]
    ngOnInit(){
      this.ListItem.length=1
    }

    addNewItem(){
      this.ListItem.length++;
    }
}
