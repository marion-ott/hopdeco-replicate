import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import Cta from './../UI/Cta/Cta.jsx'

// Slick slider imports
import Slider from 'react-slick'
import { TweenLite, TimelineLite, Power2, Power4 } from 'gsap'

class HomeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.slides = [];
        this.tl = new TimelineLite({ paused: true })
        this.sliderSpeed = 6000
    }
    componentDidMount() {
        this.sliderContainer = ReactDOM.findDOMNode(this);
        this.firstSlide = ReactDOM.findDOMNode(this.sliderContainer).querySelector('.slick-active')
        // activeSlide.classList.remove('slick-active')
        // activeSlide.classList.add('reset-animation')
        // setTimeout(() => {
        //     // activeSlide.classList.remove('reset-animation')
        //     activeSlide.classList.add('slick-active')
        // }, 400)

        const imageBorder = ReactDOM.findDOMNode(this.firstSlide).querySelector(
            '.Slide-imageBorder'
        );
        const imageCenter = ReactDOM.findDOMNode(this.firstSlide).querySelector(
            '.Slide-imageCenter > div'
        );

        TweenLite.fromTo(
            this.sliderContainer,
            1,
            { ease: Power2.easeOut, opacity: 0 },
            { opacity: 1, delay: 1 }
        );
        TweenLite.fromTo(
            imageBorder,
            0.1,
            { ease: Power4.easeOut, scale: 1.5, rotation: -15 },
            { ease: Power4.easeOut, scale: 1, rotation: 0, delay: 1.2 }
        )
        TweenLite.fromTo(
            imageCenter,
            0.1,
            { ease: Power4.easeOut, scale: 0.95, rotation: 10 },
            { ease: Power4.easeOut, scale: 1, rotation: 0, delay: 1.2 }
        );
        // this.sliderSpeed = 6000
    }

    // rotateIn = (index, direction, delay = 0) => {
    //     const imageBorder = ReactDOM.findDOMNode(this.sliderContainer).querySelector(
    //         `.slick-slide[data-index='${index}'] .Slide-imageBorder`
    //     );

    //     const imageCenter = ReactDOM.findDOMNode(this.sliderContainer).querySelector(
    //         `.slick-slide[data-index='${index}'] .Slide-imageCenter > div`
    //     );

    //     this.tl
    //         .fromTo(
    //             imageBorder,
    //             1,
    //             { ease: Power4.easeOut, scale: 1.5, rotation: -15 },
    //             { ease: Power4.easeOut, scale: 1, rotation: 0, delay: delay }
    //         )
    //         .fromTo(
    //             imageCenter,
    //             1,
    //             { ease: Power4.easeOut, scale: 0.95, rotation: 10 },
    //             { ease: Power4.easeOut, scale: 1, rotation: 0 },
    //             delay
    //         );
            
    //     switch(direction) {
    //         case 'in':
    //             this.tl.play()
    //             break;
    //         case 'out':
    //             this.tl.reverse()
    //             break;
    //         default:
    //             break;
    //     }
    // };

    updateSlide = (direction) => {
        // if(this.firstSlide) {
        //     const backgroundAttr = this.firstSlide.getAttribute('style').split(';')[0]
        //     this.firstSlide.setAttribute('style', backgroundAttr);
        //     console.log(this.firstSlide.getAttribute('style'));
        //     this.firstSlide = null
        // }

        switch(direction) {
            case 'prev':
                this.slider.slickPrev()
                break;
            case 'next':
                this.slider.slickNext()
                break;
            default:
                break;
        }
    }

    render() {
        const settings = {
            // autoplay: true,
            infinite: true,
            // speed: this.sliderSpeed,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='Slide'>
                <div className='Slide-circleContainer'>
                    <div className='Slider-circle'></div>
                </div>
                <div className='Slide--overlay'></div>
                <Slider ref={el => this.slider = el} {...settings}>
                    {this.props.slides.map((slide, key) => (
                        <div
                            ref={el => this.slides.push(el)}
                            key={key}
                            className='Slide-container'>
                            <div className='Slide-image'>
                                <div
                                    className='Slide-imageBorder'
                                    style={{
                                        backgroundImage: `url(${slide.src})`
                                    }}></div>
                                <div className='Slide-imageCenter'>
                                    <div
                                        style={{
                                            backgroundImage: `url(${slide.src})`
                                        }}></div>
                                </div>
                            </div>
                            <div className='Slide-textContent'>
                                <p className='Slide-quote'>{slide.quote}</p>
                                <p className="Slide-author">{slide.author}</p>
                                <Cta />
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className='Slide-controls'>
                    <div onClick={() => this.updateSlide('prev')}>
                        <svg id='arrow-previous' viewBox='0 0 69.32 69.32'>
                            <title>arrow-previous</title>
                            <rect y='33.37' width='59.63' height='2.58'></rect>
                            <polygon points='57.98 34.66 57.98 27.16 63.65 30.91 69.31 34.66 63.65 38.41 57.98 42.16 57.98 34.66'></polygon>
                        </svg>
                    </div>
                    <div onClick={() => this.updateSlide('next')}>
                        <svg id='arrow-next' viewBox='0 0 69.32 69.32'>
                            <title>arrow-next</title>
                            <rect y='33.37' width='59.63' height='2.58'></rect>
                            <polygon points='57.98 34.66 57.98 27.16 63.65 30.91 69.31 34.66 63.65 38.41 57.98 42.16 57.98 34.66'></polygon>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeSlider
