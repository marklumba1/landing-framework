import type {Meta, StoryObj} from "@storybook/react-vite"
import Toast from "./Toast"

const meta: Meta<typeof Toast> = {
    title: "Components/Toast",
    component: Toast
}

export default meta

type Story = StoryObj<typeof Toast>

export const Primary: Story = {
  args: {
    text: 'Toast Message ',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Toast Message ',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    text: 'Toast Message ',
    variant: 'danger',
  },
};