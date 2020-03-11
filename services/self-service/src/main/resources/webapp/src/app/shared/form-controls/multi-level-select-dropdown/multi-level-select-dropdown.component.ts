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

import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'multi-level-select-dropdown',
  templateUrl: 'multi-level-select-dropdown.component.html',
  styleUrls: ['multi-level-select-dropdown.component.scss']
})

export class MultiLevelSelectDropdownComponent {

  @Input() items: Array<any>;
  @Input() model: Array<any>;
  @Input() type: string;
  @Output() selectionChange: EventEmitter<{}> = new EventEmitter();

  public isOpenCategory = {
  };

  public labels = {
    COMPUTATIONAL_SHAPE: 'Compute shapes',
    NOTEBOOK_SHAPE: 'Notebook shape'
  };

  toggleSelectedOptions($event, model, value) {
    $event.preventDefault();
    const currRole = model.filter(v => v.role === value.role).length;
    currRole ? this.model = model.filter(v => v.role !== value.role) : model.push(value);
    this.onUpdate($event);
  }

  toggleselectedCategory($event, model, value) {
    $event.preventDefault();
    const categoryItems = this.items.filter(role => role.type === value);
    this.selectedAllInCattegory(value) ? this.model = this.model.filter(role => role.type !== value) : categoryItems.forEach(role => {
      if (!model.filter(mod => mod.role === role.role).length) {this.model.push(role); }
    });
    this.onUpdate($event);
  }

  selectAllOptions($event) {

    $event.preventDefault();
    this.model = [...this.items];
    this.onUpdate($event);
    $event.preventDefault();
  }

  deselectAllOptions($event) {
    this.model = [];
    this.onUpdate($event);
    $event.preventDefault();
  }

  onUpdate($event): void {
    this.selectionChange.emit({ model: this.model, type: this.type, $event });
  }

  public toggleItemsForLable(label, $event) {
    this.isOpenCategory[label] = !this.isOpenCategory[label];
    $event.preventDefault();
  }

  public selectedAllInCattegory(category) {
    const selected = this.model.filter(role => role.type === category);
    const categoryItems = this.items.filter(role => role.type === category);
    return selected.length === categoryItems.length;
  }

  public selectedSomeInCattegory(category) {
    const selected = this.model.filter(role => role.type === category);
    const categoryItems = this.items.filter(role => role.type === category);
    return selected.length && selected.length !== categoryItems.length;
  }

  public checkInModel(item) {
    return this.model.filter(v => v.role === item).length;
  }

  public selectedRolesList() {
    return this.model.map(role => role.role).join(',');
  }
}
