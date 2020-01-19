var ACC = ACC || {};

ACC.Stepper = (function (config) {

    "use strict";

    class Stepper {
        constructor(config) {
            this.speed = config.speed || "";
            this.$stepper = document.querySelector(config.selector);
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

        setTimeout(() => {
            if (typeof (conditionForMobile) === "function" && conditionForMobile()) {
                this.$stepProgress.style.height = `${completionPercentage}%`;
            } else {
                this.$stepProgress.style.width = `${completionPercentage}%`;
            }
            this.$stepProgress.style.transitionDuration = `${(this.speed / 1000) * activeStepsCount}s`;
        }, 1);

        let currentCount = 1,
            actualSpeed = (excudedPercentile * this.speed + this.speed);

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

    return function (config) {
        return new Stepper(config);
    }

})();