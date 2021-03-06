# stepper
A CSS and JavaScript based progress-bar for multi step forms

**Note**: Please configure these files as per your own bundler.

## Initializing the Stepper plugin

### HTML Markup
``` HTML
<div class="stepper homepage-stepper">
    <div class="progress-wrapper">
        <hr class="step-progress" />
    </div>
    <div class="steps-box">
        <button class="step-icon">1</button>
        <button class="step-icon active-eligible">2</button>
        <button class="step-icon active-eligible">3</button>
    </div>
</div>
```

### JavaScript

#### Initialize using  multiple elements
``` Javascript
var stepperInstance = ACC.Stepper([{
    selector: document.getElementsByClassName("homepage-stepper")[0],
    speed: 1000,
    conditionForMobile: conditionForMobile
}, {
    selector: document.getElementsByClassName("homepage-stepper2")[0],
    speed: 3000,
    conditionForMobile: conditionForMobile
}, {
    selector: document.getElementsByClassName("homepage-stepper3")[0],
    speed: 5000,
    conditionForMobile: conditionForMobile
}]);
```

#### Initialize using a single element
``` Javascript
var stepperInstance = ACC.Stepper({
    selector: document.getElementsByClassName("homepage-stepper4")[0],
    speed: 500,
    conditionForMobile: conditionForMobile
});
```

#### Initialize using one config with with multiple elements
``` Javascript
var stepperInstance = ACC.Stepper({
    selector: document.getElementsByClassName("my-stepper"),
    speed: 500,
    conditionForMobile: conditionForMobile
});
```

### Configuration properties
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
### How to use
You need to add **active-eligible** class on **step-icon** with server-side rendering so that the plugin should understand what all steps are done and are eligible for animation. Please do not put any class on the first element. It is handled by the plugin itself.

#### **How many steps can I add** ?
You can put n number of steps in your code.

#### **How many instances can I use on a single page** ?
You can use n number of instances on a single page using different parent selectors.

#### **Where can I see a working example** ?
https://codepen.io/aamirabbasnaqvi/pen/MWYPxBz
