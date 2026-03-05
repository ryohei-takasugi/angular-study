import { Component, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedButtonComponent } from 'buttons';

@Component({
  selector: 'app-root',
  imports: [SharedButtonComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('todo');
  private http = inject(HttpClient);

  sendData() {
    const body = { message: 'Hello Angular 21' };

    this.http.post<any>('/posts', body)
      .subscribe({
        next: (response: any) => console.log('完了:', response),   // ← 型注釈を追加
        error: (err: any) => console.error('失敗:', err)         // ← こちらも
      });
  }
}
