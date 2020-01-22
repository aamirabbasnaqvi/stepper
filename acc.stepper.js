var ACC = ACC || {};

ACC.Stepper = (function (config) {

    "use strict";
    class Stepper {
        constructor(config) {
            this.speed = config.speed || "";
            this.$stepper = config.selector;
            this.$stepProgress = this.$stepper.querySelector(".step-progress");
            this.$totalSteps = this.$stepper.querySelectorAll(".step-icon");
            this.$allActiveSteps = this.$stepper.querySelectorAll(".step-icon.active-eligible");
            this.handleAnimation();
        }
    }

    Stepper.prototype.defaultSpeed = 2000;

    Stepper.prototype.handleAnimation = function () {
        this.speed || (this.speed = this.defaultSpeed);

        const activeStepsCount = this.$allActiveSteps.length,
            totalStepsCount = this.$totalSteps.length - 1,
            completionPercentage = (activeStepsCount / totalStepsCount) * 100,
            excudedPercentile = (10 * totalStepsCount) / 100;

        let currentCount = 1,
            actualSpeed = (excudedPercentile * this.speed + this.speed);

        if (currentCount > activeStepsCount) {
            return;
        }

        setTimeout(() => {
            if (typeof (conditionForMobile) === "function" && conditionForMobile()) {
                this.$stepProgress.style.height = `${completionPercentage}%`;
            } else {
                this.$stepProgress.style.width = `${completionPercentage}%`;
            }
            this.$stepProgress.style.transitionDuration = `${(this.speed / 1000) * activeStepsCount}s`;
        }, 1);

        const animateSteps = () => {

            setTimeout(() => {
                const $currentIcon = this.$stepper.querySelectorAll(".step-icon")[currentCount];

                $currentIcon.classList.remove("active-eligible");
                $currentIcon.classList.add("active");

                if (currentCount < activeStepsCount) {
                    currentCount = currentCount + 1;
                    actualSpeed = this.speed;
                    animateSteps();
                }
            }, actualSpeed);
        };

        animateSteps();
    }

    function init(config) {

        if (config.constructor === Array) {

            const stepperInstances = [];

            config.forEach((config) => {

                if (config.selector) {
                    let thisConfig = Object.assign({}, config);
                    thisConfig.selector = config.selector;
                    stepperInstances.push(new Stepper(thisConfig));
                } else {
                    console.warn("Hey, you should pass a proper selector");
                }
            });

            return stepperInstances;

        } else if (config.constructor === Object) {

            if (!config.selector) {
                console.warn("Hey, you should pass a proper selector");
                return;
            }

            const stepperInstances = [];

            if (config.selector.length > 1) {

                Array.from(config.selector).forEach((thisSelector) => {
                    let thisConfig = Object.assign({}, config);
                    thisConfig.selector = thisSelector;
                    stepperInstances.push(new Stepper(thisConfig));
                });
                return stepperInstances;
            }

            if (config.selector) {
                return new Stepper(config);
            }
        }

    }

    return function (config) {
        return init(config);
    }

})();
