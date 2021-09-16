
window.onload = function f() {
    new Vue({
        el: '#carousel',
        data: {
            slides: 7
        },
        components: {
            'carousel-3d': Carousel3d.Carousel3d,
            'slide': Carousel3d.Slide
        }
    })
    new Vue({
        el: '#carousel1',
        data: {
            slides: 7
        },
        components: {
            'carousel-3d': Carousel3d.Carousel3d,
            'slide': Carousel3d.Slide
        }
    });
    new Vue({
        el: '#carousel2',
        data: {
            slides: 7
        },
        components: {
            'carousel-3d': Carousel3d.Carousel3d,
            'slide': Carousel3d.Slide
        }
    });
    new Vue({
        el: '#carousel3',
        data: {
            slides: 7
        },
        components: {
            'carousel-3d': Carousel3d.Carousel3d,
            'slide': Carousel3d.Slide
        }
    });
    new Vue({
        el: '#carousel4',
        data: {
            slides: 7
        },
        components: {
            'carousel-3d': Carousel3d.Carousel3d,
            'slide': Carousel3d.Slide
        }
    });
}