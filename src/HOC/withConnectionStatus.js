import React, { Component } from 'react'
import Notification from '../Components/Notification'

const
    withConnectionStatus = ( WrappedComponent ) => {
    
        class WithConnectionStatus extends Component{
            constructor(props){
                super(props)
                this.state={
                    isConnected: navigator.onLine
                }
            }

            setOnline = () => this.setState( { isConnected: true } )
            setOffline = () => this.setState( { isConnected: false } )

            componentDidMount(){
                window.addEventListener('online', this.setOnline )
                window.addEventListener('offline', this.setOffline )
            }
            componentWillUnmount(){
                window.removeEventListener('online', this.setOnline);
                window.removeEventListener('offline', this.setOffline);                
            }
            render(){
                const
                    { isConnected } = this.state
                
                return isConnected ? <WrappedComponent {...this.props} /> : <Notification {...this.props } />
            }
        }
        WithConnectionStatus.displayName=`withConnectionStatus(${WrappedComponent.displayName || WrappedComponent.name})`
        WithConnectionStatus.defaultProps = {
            
                type: 'ERROR',
                header: 'No internet available',
                content: 'Check your internet connection.'
               
        }
        return WithConnectionStatus
    }
export default withConnectionStatus