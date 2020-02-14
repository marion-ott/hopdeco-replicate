import React from 'react'
import ReactDOM from 'react-dom'
import { TweenLite, Power2, TimelineLite } from 'gsap'
import './style.scss'

class Loader extends React.Component {

    componentDidMount() {
        // Get DOM elements required for TimeLine animation
        const staticLetters = ReactDOM.findDOMNode(this).querySelectorAll('.Loader-logo--staticLetters')
        const logoContainer = ReactDOM.findDOMNode(this).querySelector('.Loader-logoContainer')
        const logoBorder = ReactDOM.findDOMNode(this).querySelector('#logoBorder')

        // Init TimeLine
        let tl = new TimelineLite({ onComplete: () => {
            // Add logo opacity switch once the previous actions are done
            // Then call the function to trigger the dropdown columns
            TweenLite.to(logoContainer, 0.8, { ease: Power2.easeOut, y: 50, opacity: 0 })
            TweenLite.delayedCall(0.2, this.props.animationIsComplete)
        } })

        // Add actions for various elements
        tl.to(logoBorder, 1.5, { ease: Power2.easeOut, strokeDashoffset: 0 })
        staticLetters.forEach(letter => tl.fromTo(letter, 1, { ease: Power2.easeOut, y: -45 }, { y: 0 }, 2))
        tl.fromTo(this.movingLetter, 1, { ease: Power2.easeOut, y: 45}, {y: 0}, 2)
    }

    render() {
        return (
            <div className="Loader">
                <div className="Loader-logoContainer">
                    <svg ref={el => this.logo = el} className="Loader-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310.68 257.57">
                        <path ref={el => this.movingLetter = el} className="Loader-logo--movingLetter" d="M155.8,0a24.29,24.29,0,1,1-24.32,24.32A24.24,24.24,0,0,1,155.8,0Zm0,40.8a16.18,16.18,0,0,0,16.08-16.48c0-9.18-7-16.55-16.08-16.55s-16.08,7.37-16.08,16.55A16.17,16.17,0,0,0,155.8,40.8Z"></path>
                        <path className="Loader-logo--staticLetters" d="M71.45,105.34h8v19h22v-19h8.05v46.9h-8.05v-20.3h-22v20.3h-8Z"></path>
                        <path className="Loader-logo--staticLetters" d="M241,119.67c0,9-6.63,14.28-16.21,14.28h-7.17v18.29h-8v-46.9h15.21C234.34,105.34,241,110.56,241,119.67Zm-23.38,7.11h7.3c4.69,0,8-2.61,8-7.11s-3.35-7.1-8-7.1h-7.3Z"></path>
                        <path className="Loader-logo--staticLetters" d="M15.34,256.77H0v-46.9H15.34a23.45,23.45,0,1,1,0,46.9Zm-.2-39.4H8v31.9h7.1c8.91,0,15.55-7,15.55-16S24.05,217.37,15.14,217.37Z"></path>
                        <path className="Loader-logo--staticLetters" d="M92.57,209.87h26.8v7.3H100.61V229.1H117.9v7.1H100.61v13.27H119.5v7.3H92.57Z"></path>
                        <path className="Loader-logo--staticLetters" d="M197.75,209a24,24,0,0,1,12.8,3.82v8.64c-4.09-3.08-8.11-4.62-12.74-4.62-9,0-15.94,7.23-15.94,16.48s6.9,16.42,15.94,16.42a21.8,21.8,0,0,0,12.87-4.49v8.64a25.32,25.32,0,0,1-13,3.68,24.29,24.29,0,0,1,.07-48.57Z"></path>
                        <path className="Loader-logo--staticLetters" d="M286.36,209A24.29,24.29,0,1,1,262,233.32,24.23,24.23,0,0,1,286.36,209Zm0,40.8a16.17,16.17,0,0,0,16.08-16.48c0-9.18-7-16.55-16.08-16.55s-16.08,7.37-16.08,16.55A16.18,16.18,0,0,0,286.36,249.8Z"></path>
                    </svg>
                    <div className="Loader-border">
                        <svg>
                            <rect id="logoBorder" fill="transparent" width="150px" height="150px" />
                        </svg>
                    </div>
                </div>
                <div className="Loader-columns">
                    <div className="Loader-center"></div>
                </div>
            </div>
        )
    }
}
    

export default Loader
