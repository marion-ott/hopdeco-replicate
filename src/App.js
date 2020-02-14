import React from 'react';
import ReactDOM from 'react-dom'
import './App.scss';

// Components import
import Header from './components/Header/Header.jsx'
import Loader from './components/Loader/Loader.jsx'
import Grid from './components/Grid/Grid.jsx'
import HomeSlider from './components/HomeSlider/HomeSlider.jsx'
import TitleText from './components/TitleText/TitleText.jsx'
import InfoSlider from './components/InfoSlider/InfoSlider.jsx'
import TopNav from './components/TopNav/TopNav';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaderIsComplete: false
        }
    }
    async componentDidMount() {
        await fetch('json/content.json')
            .then(data => data.json())
            .then(content => this.setState({
                content
        }))
    }

    componentWillUnmount() {
        clearTimeout(this.loaderTimeOut)
    }

    animationIsComplete = () => {
        if(this.state.content) {
            // Trigger dropdown columns once logo loader animation is complete
            const dropdownColumns = ReactDOM.findDOMNode(this).querySelector('.Loader-columns')
            dropdownColumns.classList.toggle('--animated')
            
            // Avoid SetTimeout multiplication 
            if(this.loaderTimeOut) {
                clearTimeout(this.loaderTimeOut)
            }

            // Await CSS transition completion before rendering content
            this.loaderTimeOut = setTimeout(() => {
                this.setState({
                    loaderIsComplete: true
                })
            }, 1200)
        }
    }

    render() {
        return (
            <div id='app'>
                <Grid />
                {this.state.content && this.state.loaderIsComplete ? (
                    <div className='content'>
                        <Header links={this.state.content.nav} />
                        <TopNav links={this.state.content.nav.main} />
                        <HomeSlider slides={this.state.content.slider} />
                        <TitleText
                            index='1'
                            title={this.state.content.titleText.title}
                            underline={this.state.content.titleText.underline}
                            text={this.state.content.titleText.text}
                        />
                        <InfoSlider slides={this.state.content.steps} />
                    </div>
                ) : (
                    <Loader animationIsComplete={this.animationIsComplete} />
                )}
            </div>
        );
    }
}

export default App;
