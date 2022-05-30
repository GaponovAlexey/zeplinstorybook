import { Button } from '../stories/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import React from 'react'

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  type: 'figma',
  url: 'https://www.figma.com/file/APEIbjDToVzYVy1SdRkhVt/Untitled?node-id=11%3A18',
}
