
import React,{Component} from 'react';
class App extends Component{
    state={
        isBulbOn: true

    };

    handleClick =(action)=>{
        // if(this.state.isBulbOn)
        // {
        //     this.setState({isBulbOn:'true'})
        // }else{
        //     this.setState({isBulbOn:'false'})
        // }
        this.setState({isBulbOn: this.state.isBulbOn ?  false : true});

    }
    render(){
        return(
            <>
            <div style={{width:"30px",height:"30px",backgroundColor:this.state.isBulbOn ? 'yellow' : 'white'}}></div>
            <button onClick={this.handleClick.bind(this)}>Turn Bulb {this.state.isBulbOn ? 'off' : 'on'}</button>
            </>
        );
    }
}

export default App;