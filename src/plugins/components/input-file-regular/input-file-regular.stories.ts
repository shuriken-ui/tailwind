import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { InputFileRegularAttrs } from './input-file-regular.types'
import { InputFileRegular } from './input-file-regular.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Input File Regular',
  // tags: ['autodocs'],
  render: (args) => InputFileRegular(args),
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
      defaultValue: '',
    },
    label: {
      name: 'label',
      control: { type: 'text' },
      defaultValue: '',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'none',
    },
    contrast: {
      control: { type: 'select' },
      options: ['default', 'default-contrast'],
      defaultValue: 'default',
    },
    colorFocus: {
      name: 'color focus',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    loading: {
      name: 'loading',
      control: { type: 'boolean' },
      defaultValue: false,
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
} satisfies Meta<InputFileRegularAttrs>

export default meta
type Story = StoryObj<InputFileRegularAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    label: 'Upload files',
    size: 'md',
    rounded: 'sm',
    id: 'input-file',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}
// #endregion

// #region Rounded
export const Straight: Story = {
  name: 'Rounded: none',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'none',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}

export const Rounded: Story = {
  name: 'Rounded: sm',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'sm',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}

export const Smooth: Story = {
  name: 'Rounded: md',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'md',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}

export const Curved: Story = {
  name: 'Rounded: lg',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'lg',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}

export const Full: Story = {
  name: 'Rounded: full',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'full',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}
// #endregion

// #region Sizes
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'sm',
    rounded: 'sm',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'sm',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'lg',
    rounded: 'sm',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SizeXl: Story = {
  name: 'Size: xl',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'xl',
    rounded: 'sm',
    placeholder: 'Select files',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region State: color focus
export const ColorFocusSm: Story = {
  name: 'Color focus: sm',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'sm',
    rounded: 'sm',
    colorFocus: true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ColorFocusMd: Story = {
  name: 'Color focus: md',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'sm',
    colorFocus: true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ColorFocusLg: Story = {
  name: 'Color focus: lg',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'lg',
    rounded: 'sm',
    colorFocus: true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ColorFocusXl: Story = {
  name: 'Color focus: xl',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'xl',
    rounded: 'sm',
    colorFocus: true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region State: disabled
export const DisabledSm: Story = {
  name: 'Disabled: sm',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'sm',
    rounded: 'sm',
    '?disabled': true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const DisabledMd: Story = {
  name: 'Disabled: md',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'sm',
    '?disabled': true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const DisabledLg: Story = {
  name: 'Disabled: lg',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'lg',
    rounded: 'sm',
    '?disabled': true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const DisabledXl: Story = {
  name: 'Disabled: xl',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'xl',
    rounded: 'sm',
    '?disabled': true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region State: loading
export const LoadingSm: Story = {
  name: 'Loading: sm',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'sm',
    rounded: 'sm',
    loading: true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LoadingMd: Story = {
  name: 'Loading: md',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'sm',
    loading: true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LoadingLg: Story = {
  name: 'Loading: lg',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'lg',
    rounded: 'sm',
    loading: true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LoadingXl: Story = {
  name: 'Loading: xl',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'xl',
    rounded: 'sm',
    loading: true,
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region State: error
export const ErrorSm: Story = {
  name: 'Error: sm',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'sm',
    rounded: 'sm',
    error: 'Please select valid files',
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ErrorMd: Story = {
  name: 'Error: md',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'md',
    rounded: 'sm',
    error: 'Please select valid files',
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ErrorLg: Story = {
  name: 'Error: lg',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'lg',
    rounded: 'sm',
    error: 'Please select valid files',
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ErrorXl: Story = {
  name: 'Error: xl',
  args: {
    id: 'input-file',
    label: 'Upload files',
    size: 'xl',
    rounded: 'sm',
    error: 'Please select valid files',
    placeholder: 'Select file',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion
