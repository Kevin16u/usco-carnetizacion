import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  enabled: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  start(): void {
    this.enabled.emit(true);
  }

  stop(): void {
    this.enabled.emit(false);
  }
}
