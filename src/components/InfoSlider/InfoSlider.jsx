import React from 'react'
import './style.scss'
import Slider from 'react-slick';


class InfoSlider extends React.Component {

    customNavigation = (event) => {
        const nextId = event.target.dataset.index
        this.slider.slickGoTo(nextId)
    }

    updateSlide = (direction) => {
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
            arrows: false,
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (prev, next) => {
                const width = (100 / 5) * (next * 1 + 1)
                this.progressBar.style.width = width + '%'
            }
        };
        return (
            <div className='InfoSlider layout'>
                <div className='InfoSlider-nav'>
                    {this.props.slides.map((slide, index) => (
                        <div onClick={this.customNavigation} data-index={index} className='InfoSlider-navItem' key={index}>
                            <span>0{index + 1}</span>
                            <span>{slide.label}</span>
                        </div>
                    ))}
                    <div className='InfoSlider-navProgressBar'></div>
                    <div ref={el => this.progressBar = el} className='InfoSlider-navProgressBar --filled'></div>
                </div>
                <div className="InfoSlider-container">
                    <Slider ref={el => this.slider = el} {...settings}>
                        {this.props.slides.map((slide, key) => (
                            <div key={key}>
                                <div className='InfoSlider-item'>
                                    <div className='InfoSlider-content'>
                                        <div className='InfoSlider-textContent'>
                                            <blockquote>
                                                <h3
                                                    dangerouslySetInnerHTML={{
                                                        __html: slide
                                                            .title
                                                    }}></h3>
                                                <p>{slide.text}</p>
                                            </blockquote>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: slide.svg
                                                }}></div>
                                        </div>
                                        <div className='InfoSlider-visualContent'>
                                            <div
                                                style={{
                                                    backgroundImage: `url(${process
                                                        .env.PUBLIC_URL +
                                                        slide.src})`
                                                }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='InfoSlider-controls'>
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
            </div>
        );
    }
}

export default InfoSlider
