import React from 'react';
import Image from 'next/image';
import Circle from './assets/Circle.svg';
import { LetsTalkButton, WorkTogether, WorkTogetherBg } from './Footer.style';
import Text from '../Text/text';

export default function WorkTogetherCard() {
  return (
    <WorkTogether data-testid="work-together">
      <WorkTogetherBg>
        <Image src={Circle} alt="circle" />
      </WorkTogetherBg>
      <div id="work-together-content">
        <Text
          color="#fff"
          tag={'h2'}
          family="Satoshi"
          weight="700"
          type="subtitle2"
        >
          Work Together with Digi Dreams
        </Text>
        <Text color="#fff" tag={'p'} family="Asap" type="regular2" weight="400">
          Explore Boundless Opportunities as We Work Together with Digi Dreams
          to Shape Your Digital Success Story.
        </Text>
      </div>
      <div id="work-together-socials">
        <LetsTalkButton>Let{"'"}s Talk</LetsTalkButton>
      </div>
    </WorkTogether>
  );
}
