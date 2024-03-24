AFRAME.registerComponent("car", {
    schema: {
        speed: {type: 'number', default: 1}
    },
    init: function() {
        this.rotate = () => {
            var rotation = this.el.getAttribute("rotation");
            rotation.y += this.data.speed;
            this.el.setAttribute("rotation", rotation);
        }
    },
    tick: function() {
        this.rotation;
    },
    update: function() {
        window.addEventListener("click", e => {
            this.data.clickCounter = this.data.clickCounter + 1;
            if(this.data.clickCounter === 1) {
                this.rotation = {x: 0, y: 20, z: 0};
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 2) {
                this.rotation = {x: 0, y: 100, z: 0};
            }
        });
    } 
});