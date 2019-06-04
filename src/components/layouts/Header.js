import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <div className="flex-fill" >Mano planai</div>
                <a style={linkStyle} href="/">Pradžia</a>
                <a style={linkStyle} href="/info">Info</a>
            </div>

        );
    }
}
const headerStyle = {
    width: '100%',
    backgroundColor: '#ccc',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    display: 'flex'
}
const linkStyle = {
    width: '12.5%',
    backgroundColor: '#ccc',
    color: '#fff',
    textAlign: 'center',
}
export default Header;