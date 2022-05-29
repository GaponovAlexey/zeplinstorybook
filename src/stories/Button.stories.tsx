import { Button } from '../stories/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'components/Button',
  component: Button,
  parameters: {},
}

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.label}</Button>
)

export const MyButton = Template.bind({})
MyButton.args = {
  label: 'Primary',
  backgroundColor: 'red',
}
