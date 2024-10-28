import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-position-increment',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
  templateUrl: './position-increment.component.html',
  styleUrl: './position-increment.component.css',
})
export class PositionIncrementComponent implements OnInit {
  showToast = false;

  positionForm = new FormGroup({
    input: new FormControl(''),
  });

  ngOnInit() {
    this.positionForm.get('input')?.valueChanges.subscribe((value) => {
      this.convertPosition(value);
    });
  }

  constructor(private clipboard: Clipboard) {}

  convertPosition(inputText: string | null) {
    let positionCounter = 0;

    inputText = inputText || '';

    let modifiedText = inputText.replace(/@Position\((.*?)\)/g, () => {
      const newPosition = `@Position(${positionCounter++})`;
      return newPosition;
    });

    this.positionForm
      .get('input')
      ?.setValue(modifiedText, { emitEvent: false });
  }

  copyAchievements() {
    const pending = this.clipboard.beginCopy(this.positionForm.value.input!);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        pending.destroy();
      }
    };
    attempt();
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
