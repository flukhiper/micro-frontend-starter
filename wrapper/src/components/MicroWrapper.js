import React from 'react'

class MicroWrapper extends React.Component{
    constructor(props) {
      super(props)
      this.microRef = React.createRef();
    }
  
    componentDidMount() {
        // add event from prop that have 'on' as prefix
        Object.keys(this.props)
            .filter(key => /on([A-Z].*)/.exec(key))
            .forEach((key) => {
                this.microRef.current.addEventListener(key, this.props[key]);
            })
    }
    
    componentWillUnmount() {
        // add event from prop that have 'on' as prefix
        Object.keys(this.props)
            .filter(key => /on([A-Z].*)/.exec(key))
            .forEach((key) => {
                this.microRef.current.removeEventListener(key, this.props[key]);
            })
    }

    render(){
        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                ref:this.microRef,
                ...this.props
            })
        })
        return (
            <div>
                {children}
            </div>
        )
    }
}

export default MicroWrapper