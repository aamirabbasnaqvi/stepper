# stepper
A CSS and JavaScript based progress-bar for multi step forms

**Note**: Please configure these files as per your own bundler.

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
## How to use
You need to add **active-eligible** class on **step-icon** with server-side rendering so that the plugin should understand what all steps are done and are eligible for animation. Please do not put any class on the first element. It is handled by the plugin itself.

#### **How many steps can I add** ?
You can put n number of steps in your code.

#### **How many instances can I use on a single page** ?
You can use n number of instance on a single page using different parent selectors.
