import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

type statuses = 'loadInitialValue'

export interface ChatsPageState {
  /**
   * Loaded users.
   */
  readonly users: []
}

@Injectable()
export class ChatsPageStore extends ComponentStore<ChatsPageState> {
  constructor() {
    super({
      users: []
    })
  }
}
