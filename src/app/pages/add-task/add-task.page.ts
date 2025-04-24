import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: false,
})
export class AddTaskPage {
  task = {
    name: '',
    description: '',
    start: '',
    end: ''
  };

  constructor(private http: HttpClient, private toast: ToastController) {}

  submitTask() {
    this.http.post('http://localhost:3000/tasks', this.task).subscribe(() => {
      this.toast.create({ message: 'Task Created!', duration: 1000 }).then(t => t.present());
      window.location.href = '/to-do'; // Force reload to show new task
    });
  }
}
