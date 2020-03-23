import React from 'react';

var iconStyle = {
    background : '#335080',
    color:'#fff'
}

var textStyle = {
  background: '#5281CC',
  color:'#fff'
}

const Item = () => {
    return <div className="ui two column grid item">
        <div className="row">
            <div className="three wide column" style = {
                iconStyle
            }>
                <i class="tty icon"></i>
            </div> 
            <div className="thirteen wide column" style = {
                textStyle
            }>
                <p>Hello</p>
            </div>
        </div>
    </div>
}

export default Item