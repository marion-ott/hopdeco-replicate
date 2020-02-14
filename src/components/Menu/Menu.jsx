import React from 'react'
import './style.scss'
import { TimelineLite, Power4 } from 'gsap'
import Link from './../UI/Link/Link.jsx'

class Menu extends React.Component {
    
    constructor(props) {
        super(props)
        this.upperContent = []
        this.lowerContent = []
        this.links = []
    }

    componentDidMount() {

        this.tl = new TimelineLite({
            paused: true,
            onReverseComplete: this.toggleProperties
        });

        this.tl
            .fromTo(
                this.background,
                0.6,
                { ease: Power4.easeOut, opacity: 0 },
                { ease: Power4.easeOut, opacity: 1 }
            )
        
        this.upperContent.forEach(el => {
            this.tl.fromTo(el, .5, { ease: Power4.easeOut, opacity: 0, y: 50 }, { ease: Power4.easeOut, opacity: 1, y: 0 },0.01)
        })

        let delay = 0.05
        this.links.forEach(link => {
            this.tl.fromTo(link, .5, { ease: Power4.easeOut, opacity: 0, y: 30 }, { ease: Power4.easeOut, opacity: 1, y: 0}, delay)
            delay+= 0.05
        })

        this.lowerContent.forEach(el => {
            this.tl.fromTo(el, .5, { ease: Power4.easeOut, opacity: 0, y: 50 }, { ease: Power4.easeOut, opacity: 1, y: 0 }, 0.01)
        })
    }

    componentDidUpdate() {
        if(this.props.openNav) {
            this.toggleProperties()
            this.tl.play()
        } else {
            this.tl.reverse()
        }
    }

    toggleProperties = () => {
        this.menu.classList.toggle('visible')
        document.body.classList.toggle('overflow')
    }

    render() {

        return (
            <div ref={el => (this.menu = el)} className='Menu'>
                <div
                    ref={el => (this.background = el)}
                    className='Menu-background'></div>
                <div className='Menu-content'>
                    <div className='Menu-contentUpper'>
                        <div className='Menu-contentBox'>
                            <h3 ref={el => this.upperContent.push(el)}>Service de design d'intérieur<br/>et décoration en ligne</h3>
                        </div>
                        <div className='Menu-contentBox'>
                            <div ref={el => this.upperContent.push(el)}>
                                <Link label="English" href="/"/>
                                <Link label="Mon compte" href="/"/>
                            </div>
                        </div>
                    </div>
                    <div className='Menu-contentLower'>
                        <div className='Menu-contentBox'>
                            <div id="secondaryLinks">
                                <p ref={el => this.links.push(el)}>À propos de Hop Déco</p>
                                <ul>
                                    {
                                        this.props.links.secondary.map((el, key) => (
                                            <li ref={el => this.links.push(el)} key={key}>
                                                <Link label={el.label} href={el.href} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='Menu-contentBox'>
                            <ul id="mainLinks">
                                {
                                    this.props.links.main.map((el, key) => (
                                        <li key={key} ref={el => this.links.push(el)}>
                                            <Link label={el.label} href={el.href} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='Menu-contentBottom'>
                        <div ref={el => this.lowerContent.push(el)} className='Menu-contentBox'>
                            <span>Copyright 2019 Hop Déco inc.</span>
                        </div>
                        <div ref={el => this.lowerContent.push(el)} className='Menu-contentBox'>
                            <span>Copyright 2019 Hop Déco inc.Site web par Locomotive</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu
