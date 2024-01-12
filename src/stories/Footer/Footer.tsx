'use client';
import React from 'react';
import PaddingContainer from '../PaddingContainer/paddingContainer';
import {
  FooterContainer,
  FooterCopyrigt,
  FooterDigiDreams,
  FooterDigiDreamsIconWrapper,
  FooterContent,
  FooterItems,
  FooterWrapper,
} from './Footer.style';

import Image from 'next/image';
import Instagram from './assets/Instagram';
import WhatsApp from './assets/WhatsApp';
import Text from '../Text/text';
import Phone from './assets/Phone.svg';
import Email from './assets/Email.svg';
import Map from './assets/Map.svg';
import Youtube from './assets/Youtube';
import LinkedIn from './assets/LinkedIn';
import X from './assets/X';
import Link from 'next/link';
import WorkTogetherCard from './WorkTogetherCard';

export interface FooterProps {
  card?: boolean;
}

export default function Footer({ card = true }: FooterProps) {
  return (
    <PaddingContainer>
      <FooterContainer data-testid="footer">
        {card && <WorkTogetherCard />}
        <FooterContent>
          <FooterDigiDreams
            data-testid="footer-digi-dreams"
            id="footer-digi-dreams"
          >
            <Text
              color="#383838"
              tag="h3"
              family="Lato"
              weight="900"
              type="subtitle2"
            >
              Digi Dreams
            </Text>
            <Text
              color="#A7ABB6"
              tag="p"
              family="Satoshi"
              weight="400"
              type="regular2"
            >
              Crafting Beloved Digital Journeys. Unleash the power of creativity
              and technology with our digital agency.
            </Text>
            <FooterDigiDreamsIconWrapper data-testid="footer-digi-dreams-icons">
              <Link href="/">
                <Instagram />
              </Link>
              <Link href="/">
                <WhatsApp />
              </Link>
              <Link href="/">
                <Youtube />
              </Link>
              <Link href="/">
                <LinkedIn />
              </Link>
              <Link href="/">
                <X />
              </Link>
            </FooterDigiDreamsIconWrapper>
          </FooterDigiDreams>
          <FooterWrapper data-testid="footer-services">
            <Text
              color="#000000"
              tag="p"
              family="Satoshi"
              weight="700"
              type="regular2"
              styles={{ marginBottom: '24px' }}
            >
              Services
            </Text>
            <FooterItems data-testid="footer-services-items">
              <Text
                color="#A7ABB6"
                tag="p"
                family="Satoshi"
                weight="400"
                type="regular2"
              >
                UI/UX Design
              </Text>
              <Text
                color="#A7ABB6"
                tag="p"
                family="Satoshi"
                weight="400"
                type="regular2"
              >
                Web Design
              </Text>
              <Text
                color="#A7ABB6"
                tag="p"
                family="Satoshi"
                weight="400"
                type="regular2"
              >
                Landing Page
              </Text>
              <Text
                color="#A7ABB6"
                tag="p"
                family="Satoshi"
                weight="400"
                type="regular2"
              >
                Development
              </Text>
            </FooterItems>
          </FooterWrapper>
          <FooterWrapper data-testid="footer-company">
            <Text
              color="#000000"
              tag="p"
              family="Satoshi"
              weight="700"
              type="regular2"
              styles={{ marginBottom: '24px' }}
            >
              Company
            </Text>
            <FooterItems data-testid="footer-company-items">
              <Text
                color="#A7ABB6"
                tag="p"
                family="Satoshi"
                weight="400"
                type="regular2"
              >
                Blog
              </Text>
              <Text
                color="#A7ABB6"
                tag="p"
                family="Satoshi"
                weight="400"
                type="regular2"
              >
                About Us
              </Text>
              <Text
                color="#A7ABB6"
                tag="p"
                family="Satoshi"
                weight="400"
                type="regular2"
              >
                Internship
              </Text>
              <Text
                color="#A7ABB6"
                tag="p"
                family="Satoshi"
                weight="400"
                type="regular2"
              >
                Portfolio
              </Text>
            </FooterItems>
          </FooterWrapper>
          <FooterWrapper data-testid="footer-contact" id="service">
            <Text
              color="#000000"
              tag="p"
              family="Satoshi"
              weight="700"
              type="regular2"
              styles={{ marginBottom: '24px' }}
            >
              Contact
            </Text>
            <FooterItems data-testid="footer-contact-items" className="service">
              <div>
                <Image src={Phone} alt="phone" />
                <Text
                  color="#A7ABB6"
                  tag="p"
                  family="Satoshi"
                  weight="400"
                  type="regular2"
                >
                  +62 813 1000 7533
                </Text>
              </div>
              <div>
                <Image src={Email} alt="email" />
                <Text
                  color="#A7ABB6"
                  tag="p"
                  family="Satoshi"
                  weight="400"
                  type="regular2"
                >
                  digidreamsz@gmail.com
                </Text>
              </div>
              <div>
                <Image src={Map} alt="map" />
                <Text
                  color="#A7ABB6"
                  tag="p"
                  family="Satoshi"
                  weight="400"
                  type="regular2"
                >
                  Jl. Pramuka No.12, Tanjungsari, Sukoharjo, Jawa Tengah 57512
                </Text>
              </div>
            </FooterItems>
          </FooterWrapper>
        </FooterContent>
        <FooterCopyrigt>
          <Text color="#a7abb6" tag="p" family="Asap" weight="400" type="small">
            &copy; 2024 DigiDreams. All rights reserved.
          </Text>
        </FooterCopyrigt>
      </FooterContainer>
    </PaddingContainer>
  );
}
