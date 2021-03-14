import { Injectable } from '@angular/core'

import { UiStore } from './ui.store'

@Injectable({ providedIn: 'root' })
export class UiStoreService {
  constructor(private uiStore: UiStore) {}

  // Login Modal
  closeLoginModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, loginModal: false } }))
  }
  openLoginModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, loginModal: true } }))
  }

  // League Modal
  closeLeagueModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, leagueModal: false } }))
  }
  openLeagueModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, leagueModal: true } }))
  }

  // Player Delete Modal
  closePlayerDeleteModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, playerDeleteModal: false } }))
  }
  openPlayerDeleteModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, playerDeleteModal: true } }))
  }
  // Player Create Modal
  closePlayerCreateModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, playerCreateModal: false } }))
  }
  openPlayerCreateModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, playerCreateModal: true } }))
  }
  // Player Update Modal
  closePlayerUpdateModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, playerUpdateModal: false } }))
  }
  openPlayerUpdateModal() {
    this.uiStore.update((state) => ({ modals: { ...state.modals, playerCreateModal: true } }))
  }
}
