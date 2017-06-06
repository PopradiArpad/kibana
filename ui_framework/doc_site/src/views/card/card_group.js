import React from 'react';

import {
  KuiCardGroupContainer,
  KuiCardGroup,
  KuiCard,
  KuiCardDescription,
  KuiCardDescriptionTitle,
  KuiCardDescriptionText,
  KuiCardFooter,
  KuiLinkButton
} from '../../../../components';

export default () => {
  const cardStyle = {
    width: '400px'
  };

  return (
    <div>
      <KuiCardGroupContainer>
        <KuiCardGroup>
          <KuiCard style={cardStyle}>
            <KuiCardDescription>
              <KuiCardDescriptionTitle>
                Get a banana
              </KuiCardDescriptionTitle>

              <KuiCardDescriptionText>
                Bananas are yellow, fit easily in the hand, and have a lot of potassium or something.
              </KuiCardDescriptionText>
            </KuiCardDescription>

            <KuiCardFooter>
              <KuiLinkButton
                buttonType="basic"
                href="#"
               >
                Banana!
              </KuiLinkButton>
            </KuiCardFooter>
          </KuiCard>

          <KuiCard style={cardStyle}>
            <KuiCardDescription>
              <KuiCardDescriptionTitle>
                Get a pteradactyl
              </KuiCardDescriptionTitle>

              <KuiCardDescriptionText>
                Pteradactyls can fly, like to squawk all the time, and are difficult to spell correctly.
              </KuiCardDescriptionText>
            </KuiCardDescription>

            <KuiCardFooter>
              <KuiLinkButton
                buttonType="primary"
                href="https://www.elastic.co/subscriptions/xpack"
                target="_blank"
              >
                Pteradactyl!
              </KuiLinkButton>
            </KuiCardFooter>
          </KuiCard>
        </KuiCardGroup>
      </KuiCardGroupContainer>

      <br className="guideBreak"/>

      <KuiCardGroup isUnited>
        <KuiCard>
          <KuiCardDescription>
            <KuiCardDescriptionTitle>
              Get a banana
            </KuiCardDescriptionTitle>

            <KuiCardDescriptionText>
              Bananas are yellow, fit easily in the hand, and have a lot of potassium or something.
            </KuiCardDescriptionText>
          </KuiCardDescription>

          <KuiCardFooter>
            <KuiLinkButton
              buttonType="basic"
              href="#"
             >
              Banana!
            </KuiLinkButton>
          </KuiCardFooter>
        </KuiCard>

        <KuiCard>
          <KuiCardDescription>
            <KuiCardDescriptionTitle>
              Get a pteradactyl
            </KuiCardDescriptionTitle>

            <KuiCardDescriptionText>
              Pteradactyls can fly, like to squawk all the time, and are difficult to spell correctly.
            </KuiCardDescriptionText>
          </KuiCardDescription>

          <KuiCardFooter>
            <KuiLinkButton
              buttonType="primary"
              href="https://www.elastic.co/subscriptions/xpack"
              target="_blank"
            >
              Pteradactyl!
            </KuiLinkButton>
          </KuiCardFooter>
        </KuiCard>
      </KuiCardGroup>
    </div>
  );
};