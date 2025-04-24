import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
  standalone: false,
})
export class ToDoPage {
  tasks: any[] = [];
  url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient, private toast: ToastController) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get(this.url).subscribe(data => this.tasks = data as any[]);
  }

  showToast(id: number) {
    this.http.patch(`${this.url}/${id}`, { status: 'Completed' }).subscribe(() => {
      this.toast.create({ message: 'This task has been completed!', duration: 1000 }).then(t => t.present());
      this.ngOnInit();
    });
  }
}

