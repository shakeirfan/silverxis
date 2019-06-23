import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as _ from 'underscore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'workNowToDo';

public showAttributes:boolean=false;

// public dropdownListAttributes=[];
public dropdownSettingsForAttributes = {};
public actionName:any
public selectedAttributes=[];
private actionAttributesForm: FormGroup;
public listOfSevices=[]

public ActionsOffered=[]
public dropdownListAttributes=[] 
public selectedActionMembers=[]
// selectedItems=[]
  selectedAttribute= [];
  showTableContent: boolean;
  actionsWithAttributesForTable=[];

  constructor(public fb: FormBuilder, 
  ){

    this.actionAttributesForm = this.fb.group({
      'actions': ["", [Validators.required]],
      'actionsAttributes': ["", [Validators.required]],
      

  })
  }
  

  ngOnInit(){
    this.ActionsOffered=['Assemble','Clearing','DER','Dessamble','Evaluate','PatOut','OC',]
//     this.dropdownListAttributes=[
//     { item_id: 1, item_text: 'Mumbai' },
//     { item_id: 2, item_text: 'Bangaluru' },
//     { item_id: 3, item_text: 'Pune' },
//     { item_id: 4, item_text: 'Navsari' },
//     { item_id: 5, item_text: 'New Delhi' }
// ]

this.listOfSevices =[
 
  {action:"Assemble",actionAttributes:[

    {item_id:1,item_name:"Charges",urlPath:"/assemble/"},
    {item_id:2,item_name:"Directions",urlPath:""},
    {item_id:3,item_name:"Eqiuments",urlPath:""},
    {item_id:4,item_name:"Expensis",urlPath:""},

                                 
                              
      ]
  },

  {action:"Cleaning",actionAttributes:[  
      {item_id:1,item_name:"Charges in cleaning",urlPath:""},
      {item_id:2,item_name:"Directions in cleaning" ,urlPath:""},
      {item_id:3,item_name:"Eqiuments in cleaning",urlPath:""},
      {item_id:4,item_name:"Expensis in cleaning",urlPath:""},
           
                            
                                     ]
 },
 
  {action:"Disassemble",actionAttributes:[
      {item_id:1,item_name:"Charges in diss",urlPath:""},
      {item_id:2,item_name:"Charges in diss",urlPath:""},
      {item_id:3,item_name:"Charges in diss",urlPath:""},
      {item_id:4,item_name:"Charges in diss",urlPath:""},
           
                           ]
  }
  
  ];
    this.dropdownSettingsForAttributes ={
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      // maxHeight: 197,
     allowSearchFilter: true
     }
    // this.dropdownSettingsForAttributes = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
  }
  AddAction(){

  }
  AddAttribute(){

  }
  selectedAction(){
      this.showAttributes=true
      this.selectedAttribute=[];
      this.dropdownListAttributes=[];
this.showTableContent=false;

      this.actionName= (<HTMLInputElement>document.getElementById('actions')).value;
      var actionNames= this.selectedActionMembers.push(this.actionName)
console.log("actionName",this.actionName,this.selectedActionMembers,actionNames)

    var serviceObj = _.findWhere(this.listOfSevices, { 'action': this.actionName })
    if (serviceObj) {
      var attributeslist = serviceObj.actionAttributes;

      for(var i=0;i<attributeslist.length;i++){
        // if(attributeslist[i].field_type == "multiple select")
        // {
         

          let keys = Object.keys( attributeslist[i]);
       
            // for(var j=0;j<keys.length;j++){
              var listTermsandService={
                item_id:attributeslist[i].item_id, item_text: attributeslist[i].item_name
              }
              this.dropdownListAttributes.push(listTermsandService);
              // console.log("this.dropdownListTermsAndService",this.dropdownListTermsAndService);
            // }
        // }
      }


      //  this.dropdownListAttributes
      //   console.log("this.serviceFunctions ", this.serviceFunctions);
    }


    // if(this.orgInfo.custom_parameters){          
    //   this.custom_parameters=this.orgInfo.custom_parameters.length>0?this.orgInfo.custom_parameters:[]

      
    // }

  }
  // selectedAttributes(){

  // }
  addActionAttributesToTable(){
console.log("addActionAttributesToTable")
this.showTableContent=true;

var withAttributesTable={
  action:this.actionName,
  attributes:this.selectedAttribute
}

this.actionsWithAttributesForTable.push(withAttributesTable);

  }
  onTermSelect(item: any) {
  
  }
  onTermDeSelect(item:any){
    
 

  }
  onTermsSelectAll(items: any) {
    this.selectedAttribute = items;    
  

  }
  onTermsDeSelectAll(items: any){
    this.selectedAttribute =[]
  
    if(this.selectedAttribute.length==0){
    //  this.downloadmouArray =["nil"]
    }
    

  }
  FromLeftTab(memeber){
  var attr = _.findWhere(this.actionsWithAttributesForTable, { 'action': memeber })
  console.log("attr",attr);
  this.selectedAttribute=attr.attributes

  }
}
