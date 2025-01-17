import React from "react";
import type { ComponentStory } from "@storybook/react";
import Toaster from "./Toaster";

// eslint-disable-next-line import/no-default-export -- deprecated usage
export default {
  title: "Dashboard/Toaster",
  component: Toaster,
};

const Template: ComponentStory<typeof Toaster> = args => {
  return <Toaster {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  message: "Would you like to be notified when this dashboard is done loading?",
  isShown: true,
  onConfirm: () => {
    alert("Confirmed");
  },
  onDismiss: () => {
    alert("Dismissed");
  },
};
