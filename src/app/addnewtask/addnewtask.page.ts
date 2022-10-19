import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addnewtask',
  templateUrl: './addnewtask.page.html',
  styleUrls: ['./addnewtask.page.scss'],
})
export class AddnewtaskPage implements OnInit {

  categories=['Trabalho', 'Pessoal', 'Estudos']

  taskName
  taskDate
  taskPriority
  taskCategory

  taskObject
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  
 async dismis(){
  await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index){
     this.taskCategory = this.categories[index]
  }

  AddTask(){
    this.taskObject = ({itemtaskName:this.taskName, itemtaskDueDate:this.taskDate, itemtaskPriority:this.taskPriority, itemtaskCategory:this.taskCategory})

    this.dismis()
  }
}
