import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { CheckboxAttrs } from './checkbox.types'
import { Checkbox } from './checkbox.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Checkbox',
  // tags: ['autodocs'],
  render: (args) => Checkbox(args),
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
      defaultValue: 'checkbox-main',
    },
    label: {
      name: 'label',
      control: { type: 'text' },
      defaultValue: '',
    },
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'straight',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'light',
        'muted',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
      ],
      defaultValue: 'straight',
    },
    '?disabled': {
      name: 'disabled',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    error: {
      name: 'error',
      control: { type: 'text' },
      defaultValue: '',
    },
  },
} satisfies Meta<CheckboxAttrs>

export default meta
type Story = StoryObj<CheckboxAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    label: 'Checkbox',
    shape: 'rounded',
    color: 'primary',
    id: 'checkbox-main',
  },
}
// #endregion

// #region Shape: straight
export const StraightDefault: Story = {
  name: 'Straight: default',
  args: {
    label: 'Checkbox',
    shape: 'straight',
    color: 'default',
    id: 'checkbox-straight-default',
    checked: true,
  },
}

export const StraightMuted: Story = {
  name: 'Straight: muted',
  args: {
    label: 'Checkbox',
    shape: 'straight',
    color: 'muted',
    id: 'checkbox-straight-muted',
    checked: true,
  },
}

export const StraightPrimary: Story = {
  name: 'Straight: primary',
  args: {
    label: 'Checkbox',
    shape: 'straight',
    color: 'primary',
    id: 'checkbox-straight-primary',
    checked: true,
  },
}

export const StraightInfo: Story = {
  name: 'Straight: info',
  args: {
    label: 'Checkbox',
    shape: 'straight',
    color: 'info',
    id: 'checkbox-straight-info',
    checked: true,
  },
}

export const StraightSuccess: Story = {
  name: 'Straight: success',
  args: {
    label: 'Checkbox',
    shape: 'straight',
    color: 'success',
    id: 'checkbox-straight-success',
    checked: true,
  },
}

export const StraightWarning: Story = {
  name: 'Straight: warning',
  args: {
    label: 'Checkbox',
    shape: 'straight',
    color: 'warning',
    id: 'checkbox-straight-warning',
    checked: true,
  },
}

export const StraightDanger: Story = {
  name: 'Straight: danger',
  args: {
    label: 'Checkbox',
    shape: 'straight',
    color: 'danger',
    id: 'checkbox-straight-danger',
    checked: true,
  },
}
// #endregion

// #region Shape: rounded
export const RoundedDefault: Story = {
  name: 'Rounded: default',
  args: {
    label: 'Checkbox',
    shape: 'rounded',
    color: 'default',
    id: 'checkbox-rounded-default',
    checked: true,
  },
}

export const RoundedMuted: Story = {
  name: 'Rounded: muted',
  args: {
    label: 'Checkbox',
    shape: 'rounded',
    color: 'muted',
    id: 'checkbox-rounded-muted',
    checked: true,
  },
}

export const RoundedPrimary: Story = {
  name: 'Rounded: primary',
  args: {
    label: 'Checkbox',
    shape: 'rounded',
    color: 'primary',
    id: 'checkbox-rounded-primary',
    checked: true,
  },
}

export const RoundedInfo: Story = {
  name: 'Rounded: info',
  args: {
    label: 'Checkbox',
    shape: 'rounded',
    color: 'info',
    id: 'checkbox-rounded-info',
    checked: true,
  },
}

export const RoundedSuccess: Story = {
  name: 'Rounded: success',
  args: {
    label: 'Checkbox',
    shape: 'rounded',
    color: 'success',
    id: 'checkbox-rounded-success',
    checked: true,
  },
}

export const RoundedWarning: Story = {
  name: 'Rounded: warning',
  args: {
    label: 'Checkbox',
    shape: 'rounded',
    color: 'warning',
    id: 'checkbox-rounded-warning',
    checked: true,
  },
}

export const RoundedDanger: Story = {
  name: 'Rounded: danger',
  args: {
    label: 'Checkbox',
    shape: 'rounded',
    color: 'danger',
    id: 'checkbox-rounded-danger',
    checked: true,
  },
}
// #endregion

// #region Shape: smooth
export const SmoothDefault: Story = {
  name: 'Smooth: default',
  args: {
    label: 'Checkbox',
    shape: 'smooth',
    color: 'default',
    id: 'checkbox-smooth-default',
    checked: true,
  },
}

export const SmoothMuted: Story = {
  name: 'Smooth: muted',
  args: {
    label: 'Checkbox',
    shape: 'smooth',
    color: 'muted',
    id: 'checkbox-smooth-muted',
    checked: true,
  },
}

export const SmoothPrimary: Story = {
  name: 'Smooth: primary',
  args: {
    label: 'Checkbox',
    shape: 'smooth',
    color: 'primary',
    id: 'checkbox-smooth-primary',
    checked: true,
  },
}

export const SmoothInfo: Story = {
  name: 'Smooth: info',
  args: {
    label: 'Checkbox',
    shape: 'smooth',
    color: 'info',
    id: 'checkbox-smooth-info',
    checked: true,
  },
}

export const SmoothSuccess: Story = {
  name: 'Smooth: success',
  args: {
    label: 'Checkbox',
    shape: 'smooth',
    color: 'success',
    id: 'checkbox-smooth-success',
    checked: true,
  },
}

export const SmoothWarning: Story = {
  name: 'Smooth: warning',
  args: {
    label: 'Checkbox',
    shape: 'smooth',
    color: 'warning',
    id: 'checkbox-smooth-warning',
    checked: true,
  },
}

export const SmoothDanger: Story = {
  name: 'Smooth: danger',
  args: {
    label: 'Checkbox',
    shape: 'smooth',
    color: 'danger',
    id: 'checkbox-smooth-danger',
    checked: true,
  },
}
// #endregion

// #region Shape: curved
export const CurvedDefault: Story = {
  name: 'Curved: default',
  args: {
    label: 'Checkbox',
    shape: 'curved',
    color: 'default',
    id: 'checkbox-curved-default',
    checked: true,
  },
}

export const CurvedMuted: Story = {
  name: 'Curved: muted',
  args: {
    label: 'Checkbox',
    shape: 'curved',
    color: 'muted',
    id: 'checkbox-curved-muted',
    checked: true,
  },
}

export const CurvedPrimary: Story = {
  name: 'Curved: primary',
  args: {
    label: 'Checkbox',
    shape: 'curved',
    color: 'primary',
    id: 'checkbox-curved-primary',
    checked: true,
  },
}

export const CurvedInfo: Story = {
  name: 'Curved: info',
  args: {
    label: 'Checkbox',
    shape: 'curved',
    color: 'info',
    id: 'checkbox-curved-info',
    checked: true,
  },
}

export const CurvedSuccess: Story = {
  name: 'Curved: success',
  args: {
    label: 'Checkbox',
    shape: 'curved',
    color: 'success',
    id: 'checkbox-curved-success',
    checked: true,
  },
}

export const CurvedWarning: Story = {
  name: 'Curved: warning',
  args: {
    label: 'Checkbox',
    shape: 'curved',
    color: 'warning',
    id: 'checkbox-curved-warning',
    checked: true,
  },
}

export const CurvedDanger: Story = {
  name: 'Curved: danger',
  args: {
    label: 'Checkbox',
    shape: 'curved',
    color: 'danger',
    id: 'checkbox-curved-danger',
    checked: true,
  },
}
// #endregion

// #region Shape: full
export const FullDefault: Story = {
  name: 'Full: default',
  args: {
    label: 'Checkbox',
    shape: 'full',
    color: 'default',
    id: 'checkbox-full-default',
    checked: true,
  },
}

export const FullMuted: Story = {
  name: 'Full: muted',
  args: {
    label: 'Checkbox',
    shape: 'full',
    color: 'muted',
    id: 'checkbox-full-muted',
    checked: true,
  },
}

export const FullPrimary: Story = {
  name: 'Full: primary',
  args: {
    label: 'Checkbox',
    shape: 'full',
    color: 'primary',
    id: 'checkbox-full-primary',
    checked: true,
  },
}

export const FullInfo: Story = {
  name: 'Full: info',
  args: {
    label: 'Checkbox',
    shape: 'full',
    color: 'info',
    id: 'checkbox-full-info',
    checked: true,
  },
}

export const FullSuccess: Story = {
  name: 'Full: success',
  args: {
    label: 'Checkbox',
    shape: 'full',
    color: 'success',
    id: 'checkbox-full-success',
    checked: true,
  },
}

export const FullWarning: Story = {
  name: 'Full: warning',
  args: {
    label: 'Checkbox',
    shape: 'full',
    color: 'warning',
    id: 'checkbox-full-warning',
    checked: true,
  },
}

export const FullDanger: Story = {
  name: 'Full: danger',
  args: {
    label: 'Checkbox',
    shape: 'full',
    color: 'danger',
    id: 'checkbox-full-danger',
    checked: true,
  },
}
// #endregion

// #region State: disabled
export const StraightDisabled: Story = {
  name: 'Straight: disabled',
  args: {
    label: 'Checkbox',
    shape: 'straight',
    color: 'default',
    id: 'checkbox-disabled-straight',
    checked: true,
    '?disabled': true,
  },
}

export const RoundedDisabled: Story = {
  name: 'Rounded: disabled',
  args: {
    label: 'Checkbox',
    shape: 'rounded',
    color: 'default',
    id: 'checkbox-disabled-rounded',
    checked: true,
    '?disabled': true,
  },
}

export const SmoothDisabled: Story = {
  name: 'Smooth: disabled',
  args: {
    label: 'Checkbox',
    shape: 'smooth',
    color: 'default',
    id: 'checkbox-disabled-smooth',
    checked: true,
    '?disabled': true,
  },
}

export const CurvedDisabled: Story = {
  name: 'Curved: disabled',
  args: {
    label: 'Checkbox',
    shape: 'curved',
    color: 'default',
    id: 'checkbox-disabled-curved',
    checked: true,
    '?disabled': true,
  },
}

export const FullDisabled: Story = {
  name: 'Full: disabled',
  args: {
    label: 'Checkbox',
    shape: 'full',
    color: 'default',
    id: 'checkbox-disabled-full',
    checked: true,
    '?disabled': true,
  },
}
// #endregion
