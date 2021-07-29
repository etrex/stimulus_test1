// src/controllers/slideshow_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  // https://stimulus.hotwired.dev/handbook/managing-state#what%E2%80%99s-with-that-static-values-line%3F
  static values = { index: Number }

  // https://stimulus.hotwired.dev/handbook/managing-state#lifecycle-callbacks-explained
  initialize() {
    this.showCurrentSlide()
  }

  next() {
    this.indexValue++
  }

  previous() {
    this.indexValue--
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}