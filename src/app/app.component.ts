import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputValue: string = '';
  array: string[] = [];
  count: number = 0;
  undoDisabled: boolean = true;
  // ------------------
  // ONCHANGES
  // ------------------
  onChanges(change: any) {
    this.array.push(change);
    this.count = 0;
    this.undoDisabled = false;
  }
  // ------------------
  // UNDO
  // ------------------
  undo() {
    if (this.array.length - (this.count + 1) <= 0) {
      this.undoDisabled = true;
    } else {
      this.undoDisabled = false;
    }
    this.count++;
    this.inputValue = this.array[this.array.length - (this.count + 1)];
  }
  // ------------------
  // REDO
  // ------------------
  redo() {
    if (this.array.length - (this.count + 1) >= 0) {
      this.undoDisabled = false;
    } else {
      this.undoDisabled = true;
    }
    if (this.count >= 0) {
      this.count--;
      this.inputValue = this.array[this.array.length - (this.count + 1)];
    }
  }
  // ------------------
  // CLEAR
  // ------------------
  clear() {
    this.inputValue = '';
    this.array = [];
    this.undoDisabled = true;
  }
}
