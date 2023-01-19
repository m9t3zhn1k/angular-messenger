import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ChatsPageStore } from './chats.store'

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ChatsPageStore]
})
export class ChatsPage {}
