import { Button } from '../stories/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    zeplinLink:
      'zpl://components?pid=62927166afb23d1511bff773&coid=6292716a1a8dbc1219fc647f',
  },
}

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.label}</Button>
)

export const MyButton = Template.bind({})
MyButton.args = {
  label: 'Primary',
  backgroundColor: 'red',
  zeplinLink:
    'zpl://components?pid=62927166afb23d1511bff773&coid=6292716a1a8dbc1219fc647f',
}
MyButton.parameters = {
  zeplinLink:
    'zpl://components?pid=62927166afb23d1511bff773&coid=6292716a1a8dbc1219fc647f',
}
