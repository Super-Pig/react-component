/*
 * Copyright © 2020-2023 Ocean Galaxy Inc. All Rights Reserved.
 * @Description: 
 * @LastEditors: garry彭
 * @LastEditTime: 2023-02-15 11:05:43
 */
import React from 'react'
import Input from '../packages/input/lib/input'

export default {
    title: 'Example/Input',
    component: Input,
    parameters: {
        docs: {
          page: ''
        },
      },
}

const Template = args => (<Input {...args} />)

export const Primary = Template.bind({})
Primary.args = {
    value: 123
}