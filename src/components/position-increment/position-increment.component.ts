import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-position-increment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './position-increment.component.html',
  styleUrl: './position-increment.component.css',
})
export class PositionIncrementComponent implements OnInit {
  positionForm = new FormGroup({
    input: new FormControl(''),
    output: new FormControl(''),
  });

  ngOnInit() {
    this.positionForm.get('input')?.valueChanges.subscribe((value) => {
      this.convertPosition(value);
    });
  }

  convertPosition(inputText: string | null) {
    let positionCounter = 0;

    inputText = inputText || '';

    let modifiedText = inputText.replace(/@Position\((.*?)\)/g, () => {
      const newPosition = `@Position(${positionCounter++})`;
      return newPosition;
    });

    this.positionForm
      .get('output')
      ?.setValue(modifiedText, { emitEvent: false });
  }
}
