import { IsConstructor } from 'es-abstract/es2019';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const portalRoot =  document.getElementById('portal');

export default class Portal extends Component {

    Constructor(){
        super();
        this.el = document.createElement('div');
    }
    comoponentDidMount = () => {
        portalRoot.appendChild(this.el);
    }

    comoponentwillUnmount = () => {
        portalRoot.removeChild(this.el);
    }


    render (){
        const { children } = this.props;

        return ReactDom.createPortal(children, this.el);
    }
}