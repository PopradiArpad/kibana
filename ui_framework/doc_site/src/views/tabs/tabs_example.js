import React from 'react';
import { renderToHtml } from '../../services';

import {
  GuideDemo,
  GuidePage,
  GuideSection,
  GuideSectionTypes,
  GuideText,
} from '../../components';

import Tabs from './tabs';
const tabsSource = require('!!raw!./tabs');
const tabsHtml = renderToHtml(Tabs);

export default props => (
  <GuidePage title={props.route.name}>
    <GuideSection
      title="Tabs"
      source={[{
        type: GuideSectionTypes.JS,
        code: tabsSource,
      }, {
        type: GuideSectionTypes.HTML,
        code: tabsHtml,
      }]}
    >
      <GuideText>
        The children of the KuiTabs can be anything that can be rendered: they will be wrapped into KuiTab components.
      </GuideText>

      <GuideDemo>
        <Tabs />
      </GuideDemo>
    </GuideSection>

  </GuidePage>
);
