let Picker = {
    init: () => {
        Picker._Start()
        Picker._Move()
    },
    _Start: () => {
        let _this = this
        let dragEl = document.querySelector('.drag')
        dragEl.addEventListener('touchstart', (e) => {
            e.stopPropagation();
            e.preventDefault();

            let touches = e.touches ? e.touches[0] : e;


            let startPageX = touches.pageX;//起始触摸点
            let startPageY = touches.pageY;//起始触摸点
            console.log(e)
            console.log(touches)
            console.log(startPageX)
            console.log(startPageY)
        })
    },
    _Move: () => {
        let dragEl = document.querySelector('.drag')
        dragEl.addEventListener('touchmove', (e) => {
            e.stopPropagation();
            e.preventDefault();

            let touches = e.touches ? e.touches[0] : e;
            
            let moveX = touches.pageX;

            console.log(moveX)
        })
    }
}

module.exports = Picker

// self.scroller.addEventListener('touchstart', function (e) {
//     e.stopPropagation();
//     e.preventDefault();
//     self.startTime = self.getTime();
//     var touches = e.touches ? e.touches[0] : e;
//     self.startPageY = touches.pageY;//起始触摸点

//     self.browserVendor('transition', 'none');
//   }, false);