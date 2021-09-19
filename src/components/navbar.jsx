import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <div className="navbar">
                Lets make new habit {this.props.totalCount}
            </div>
        );
    }
}

export default Navbar;