
/***************************************************************************
 
 Copyright (c) 2016, EPAM SYSTEMS INC
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 
 ****************************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule, ConfirmationDialogModule, BubbleModule, UploadKeyDialogModule } from './../shared';
import { MaterialModule } from './../shared/material.module';

import { ManagementComponent } from './management.component';
import { ManagementGridComponent, ConfirmationDialog } from './management-grid/management-grid.component';
import { ComputationalResourcesModule } from '../resources/computational/computational-resources-list';

export * from './management.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    ConfirmationDialogModule,
    ComputationalResourcesModule,
    BubbleModule,
    MaterialModule,
    UploadKeyDialogModule
  ],
  declarations: [ManagementComponent, ManagementGridComponent, ConfirmationDialog],
  entryComponents: [ConfirmationDialog],
  exports: [ManagementComponent]
})
export class ManagenementModule { }
