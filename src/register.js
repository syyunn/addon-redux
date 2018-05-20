import React from 'react'
import addons from '@storybook/addons'
import HistoryPanel from './components/HistoryPanel'
import StatePanel from './components/StatePanel'

addons.register('storybook/with_redux', api => {
  const channel = addons.getChannel()
  const apiProps = {channel, api}

  addons.addPanel('storybook/with_redux/state', {
    title: 'Redux State',
    render: () => <StatePanel {...apiProps} />
  })

  addons.addPanel('storybook/with_redux/history', {
    title: 'Redux History',
    render: () => <HistoryPanel {...apiProps} />
  })
})