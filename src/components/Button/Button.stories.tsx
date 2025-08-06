import type {Meta, StoryObj} from "@storybook/react-vite"
import Button from "./Button"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Click Me',
    variant: 'primary',
    onClick: () => alert('Button clicked!'),
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click Me',
    variant: 'secondary',
    onClick: () => alert('Button clicked!'),
  },
};

export const Danger: Story = {
  args: {
    label: 'Click Me',
    variant: 'danger',
    onClick: () => alert('Button clicked!'),
  },
};