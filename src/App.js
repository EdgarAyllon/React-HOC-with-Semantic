import React, { PureComponent } from 'react'
import { Container, Grid, Header, Icon } from 'semantic-ui-react'
import Notifications from './Components/Notifications'
import withResponsive from './HOC/withResponsive'

class App extends PureComponent {
    render() {
        return (
                <Container>
                    <Grid centered verticalAlign='middle' padded>
                        <Grid.Row>
                            <Header as='h2' icon>
                                <Icon name='cloudversify' color='teal' inverse/>
                                HOC withConnectionStatus
                                <Header.Subheader>
                                    Disconect your internet connection to show message
                                </Header.Subheader>
                            </Header>
                        <Notifications />
                        </Grid.Row>
                        <Grid.Row>
                            <Header as='h2' icon>
                                <Icon name={ this.props.responsive ? 'mobile alternate' : 'desktop' } color='teal' inverse/>
                                HOC withResponsive
                                <Header.Subheader>
                                    Resize you browser to change the icon above
                                </Header.Subheader>
                            </Header>
                        </Grid.Row>
                    </Grid>
                </Container>
        )
    }
}
export default withResponsive(App)