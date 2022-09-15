// import { zoomImage } from './zoom.directive';
import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: '[appzoom]',
})
export class zoomImage implements OnInit{

  constructor(private elementRef: ElementRef) {

  }
  ngOnInit(){
  //  let val = this.elementRef
  //  console.log(val);
  }
  @HostListener('wheel', ['$event'])
  imageZoomed(event: WheelEvent){
    var y = event.deltaY;
    var currentValue = this.elementRef.nativeElement.clientWidth;
    console.log(currentValue);
    let updatedImg: any;
    if(y > 0){
      updatedImg = parseInt(currentValue) + 10;
    }
    else{
      updatedImg = parseInt(currentValue) - 10;
    }
    this.elementRef.nativeElement.style.width = updatedImg + "px";
    this.elementRef.nativeElement.style.height = updatedImg + "px";
  }

}
