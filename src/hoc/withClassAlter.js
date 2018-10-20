import React, {Component} from 'react';

//const withClassAlter = (WrappedComponent, className) => {
//    return(props) => (
//        <div className={className}>
//            <WrappedComponent {...props} />
//        </div>
//    )
//}

const WithClassAlter = (WrappedComponent, className) => {
    const WithClassAlter = class extends Component {
        render(){
            return(
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }
    
    return React.forwardRef((props, ref) => {
        return <WithClassAlter {...props} forwardedRef={ref} />
    });
}

export default WithClassAlter;