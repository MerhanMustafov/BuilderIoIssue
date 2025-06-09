import { Builder } from '@builder.io/react';
import TestComponent from './components/Test';

Builder.registerComponent(TestComponent, {
  name: 'TestComponent',
  inputs: [
    {
      name: 'image',
      friendlyName: 'Image',
      type: 'object',
      subFields: [
        {
          name: 'desktop',
          friendlyName: 'Desktop',
          type: 'object',
          subFields: [
            {
              name: 'src',
              friendlyName: 'Src',
              type: 'file',
              allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
            },
            {
              name: 'alt',
              friendlyName: 'Alt',
              type: 'string',
            },
          ],
        },
        {
          name: 'mobile',
          friendlyName: 'Mobile',
          type: 'object',
          subFields: [
            {
              name: 'src',
              friendlyName: 'Src',
              type: 'file',
              allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
            },
            {
              name: 'alt',
              friendlyName: 'Alt',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
});
