/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

import { EndpointService } from '../../../core/services';

export interface Endpoint {
  name: string;
  url: string;
  account: string;
}

@Component({
  selector: 'endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss']
})
export class EndpointsComponent implements OnInit {
  public createEndpointForm: FormGroup;
  namePattern = '[-_a-zA-Z0-9]+';
  endpoints: Endpoint[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public toastr: ToastrService,
    public dialogRef: MatDialogRef<EndpointsComponent>,
    private endpointService: EndpointService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initFormModel();
    this.getEndpointList();
  }

  public assignChanges(data) {
    this.endpointService.createEndpoint(data).subscribe(() => {
      this.toastr.success('Endpoint created successfully!', 'Success!');
      this.dialogRef.close(true);
    }, error => this.toastr.error(error.message || 'Endpoint creation failed!', 'Oops!'));
  }

  private initFormModel(): void {
    this.createEndpointForm = this._fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      account: ['', Validators.required]
    });
  }

  private getEndpointList() {
    this.endpointService.getEndpointsData().subscribe((endpoints: any) => this.endpoints = endpoints);
  }
}