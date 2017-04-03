import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

import {
  Tabs,
  Tab,
  Icon
} from 'react-native-elements'

import Clients from './Clients'

export default class HomeView extends Component {
  constructor() {
    super()
    this.state = {
      selectedTab: 'feed',
    }
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  render () {
    const { selectedTab } = this.state
    return (
      <Tabs>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'feed'}
          title={selectedTab === 'feed' ? 'Clientes' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='face' size={30} />}
          onPress={() => this.changeTab('feed')}>
          <Clients />
        </Tab>
      </Tabs>
    )
  }
}
