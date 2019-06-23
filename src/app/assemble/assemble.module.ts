
import { NgModule }                        from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [

    FormsModule,
    ReactiveFormsModule,

    TabsModule,
  
   
    ModalModule.forRoot(),
    
  ],
  declarations: [ ],
  providers: [ ]
})
export class AssembleModule {
    
   }
   