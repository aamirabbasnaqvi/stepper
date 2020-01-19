# stepper
A CSS and JavaScript based progress-bar for multi step forms

**Note**: Please configure these file as per your own bundler.

## Initializing the Stepper plugin
``` Javascript
var stepperInstance = ACC.Stepper({
    selector: ".homepage-stepper",
    speed: 1000,
    conditionForMobile: conditionForMobile
});
```

* **Speed** : The timeframe in which the animation completes.
* **Selector**: The selector reference for your stepper element.
* **Condition** for mobile: This is a configurable condition for mobile. You can change the threshold width of the device. You can also put a static condition over here such as 'document.documentElement.classList.contains("touch")' for cases where Modernizr puts a touch class on HTML node. Changing this will also need a change in @mobile mixin in SCSS for sync in conditions.

```Javascript
var conditionForMobile = function () {
    return window.outerWidth < 768;
};
```
```SCSS
@mixin mobile() {
    @media screen and (max-width: 767px) {
        @content;
    }
}
```
