import { Meta, StoryObj } from "@storybook/react";

import { Home } from "./Home";
import { AuthProvider } from "../components/AuthProvider";

const meta = {
  component: Home,
  decorators: [
    (Story) => {
      return (
        <AuthProvider>
          <Story />
        </AuthProvider>
      );
    },
  ],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
