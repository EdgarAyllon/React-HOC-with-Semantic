import React, { Component } from 'react'
import { Responsive } from 'semantic-ui-react'

const
    withResponsive = WrappedComponent => {
    
        class WithResponsive extends Component{
            constructor(props){
                super(props)
                this.state= { responsive: props.responsive }
            }
            changeSize = () =>  this.setState( { responsive: window.innerWidth < Responsive.onlyTablet.minWidth } )
            
            componentDidMount(){
                window.addEventListener( 'resize', this.changeSize )
            }
            componentWillUnmount(){
                window.removeEventListener( 'resize', this.changeSize )
            }
            render(){
                const
                    { responsive } = this.state;
                
                return(
                    <WrappedComponent {...this.props} responsive={ responsive } />
                )
            }
        }
        withResponsive.displayName=`withResponsive(${WrappedComponent.displayName || WrappedComponent.name})`
        WithResponsive.defaultProps = { responsive : window.innerWidth < Responsive.onlyTablet.minWidth }
        return WithResponsive
}
export default withResponsive