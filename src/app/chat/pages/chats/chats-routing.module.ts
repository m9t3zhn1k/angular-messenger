import { Routes, RouterModule } from '@angular/router'
import { ChatsPage } from './chats.page'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: '',
    component: ChatsPage
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule {}
