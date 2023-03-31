import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements AfterViewInit, AfterViewChecked, AfterContentInit{

  enabled = false;
  constructor(private loadingService: LoadingService, private readonly changeDetectorRef: ChangeDetectorRef) {}
  ngAfterContentInit(): void {
    this.enabled = false;
  }

  ngAfterViewInit(): void {
    this.loadingService.enabled.subscribe((data) => {
      this.enabled = data;
    });
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

}
