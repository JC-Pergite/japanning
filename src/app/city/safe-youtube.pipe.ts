import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizationService, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: 'safety'
})
export class SafeYoutubePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizationService) { }

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}