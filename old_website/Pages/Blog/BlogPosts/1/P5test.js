import React from 'react';
import styled from 'styled-components'
import p5 from 'p5'


class P5test extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.sketch = this.sketch.bind(this);
        
        this.state = {
            canvasHeight: 200,
            canvasWidth: 200
        }
    }

    sketch(p){
        p.setup = () => {
            p.createCanvas(this.state.canvasHeight, this.state.canvasWidth);
        }

        p.draw = () => {
            p.fill('red');
            p.circle(this.state.canvasWidth/2,this.state.canvasHeight/2,this.state.canvasWidth/3);
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    render() {
        return (
            <div ref={this.myRef}/>
        )
    }
}

export default P5test;