import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'chats',
    loadChildren: () => import('./chat').then(m => m.ChatsPageModule)
  },
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
