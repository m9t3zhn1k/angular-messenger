import { NgModule } from '@angular/core'
import { ChatsRoutingModule } from './chats-routing.module'
import { ChatsPage } from './chats.page'

@NgModule({
  imports: [ChatsRoutingModule],
  declarations: [ChatsPage]
})
export class ChatsPageModule {}
