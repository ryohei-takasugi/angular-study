import { Component, Input, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-shared-button',
  standalone: true,
  template: `
    <button (click)="sendRequest()">{{ label }}</button>
  `
})
export class SharedButtonComponent {
  private http = inject(HttpClient);

  @Input() label: string = 'Button';
  @Input() apiUrl: string = '';
  @Input() payload: any = {};

  sendRequest() {
    this.http.post(this.apiUrl, this.payload).subscribe({
      next: (res) => console.log(`${this.label} 成功:`, res),
      error: (err) => console.error(`${this.label} 失敗:`, err)
    });
  }
}
