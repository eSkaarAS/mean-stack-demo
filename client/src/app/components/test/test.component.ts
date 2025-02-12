import { Component } from '@angular/core';
import { TestPipe } from '../../pipes/test.pipe';

@Component({
  selector: 'app-test',
  imports: [TestPipe],
  templateUrl: './test.component.html',
})
export class TestComponent {}
