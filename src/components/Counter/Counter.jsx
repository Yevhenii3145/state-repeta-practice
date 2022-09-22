import React from 'react';
import Value from './Value'
import Controls from './Controls'
import './Counter.css';

class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    }

    state = { value: this.props.initialValue};
 
    handleIncrement = () => {
        // НЕ ДЕЛАЙ ТАК!!!
        // this.setState({
        //     value: 1488,
        // },() => {console.log('Я сделяль!!!!')})
        this.setState((prevState) => {
            return {
                value: prevState.value + 1,
            }
        }, () => { console.log('Я сделяль!!! gg)))') })
         
    }

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value -1,
        }))
    }
    // handleIncrement = (event) => {
    //     console.log('Пррроизошла кррража')
    //     console.log(event.target)
    //     setTimeout(() => {
    //         console.log(event.target)
    //     }, 3000);
    // }
    // handleDecrement = (event) => {
    //     console.log('росия уничтожена gg))')
    //     console.log(event.target)
    // }

    render() {
        const { value } = this.state;
        return (
            <div className='Counter'>
                <Value value={value } />
                <Controls onIcrement={this.handleIncrement} onDecrement={this.handleDecrement } />
            </div>
        )
    }
}

export default Counter;