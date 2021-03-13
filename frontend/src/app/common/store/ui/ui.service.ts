import { Injectable } from '@angular/core'

import { UiStore } from './ui.store'

@Injectable({ providedIn: 'root' })
export class UiStoreService {
  constructor(private uiStore: UiStore) {}

  // Login Modal
  closeLoginModal() {
    this.uiStore.update({ modals: { loginModal: false } })
  }
  openLoginModal() {
    this.uiStore.update({ modals: { loginModal: true } })
  }
}
