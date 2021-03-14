import { Directive, ElementRef, OnInit, Input } from '@angular/core'

@Directive({
  selector: '[app-lazy-image]'
})
export class IntersectionObserverDirective implements OnInit {
  @Input() image: string | undefined

  private options: IntersectionObserverInit = {
    rootMargin: '10px 0px',
    threshold: 1
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.intersectionObserver()
  }

  private intersectionObserver(): void {
    const intersection: IntersectionObserver = new IntersectionObserver(this.callback, this.options)
    intersection.observe(this.el.nativeElement)
  }

  private callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      console.log(this.image)
      if (entry.isIntersecting && this.image) {
        const target = entry.target as HTMLImageElement
        target.src = this.image
        observer.unobserve(entry.target)
      }
    })
  }
}
