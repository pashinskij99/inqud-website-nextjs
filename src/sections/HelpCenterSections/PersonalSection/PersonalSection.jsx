import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Element, Link } from 'react-scroll';
import {
  StyledCenterSideWrapper,
  StyledContentItemAccordion,
  StyledContentItemAccordionDetails,
  StyledContentItemAccordionSummary,
  StyledLeftSideWrapper,
  StyledPersonalSectionWrapper,
  StyledRightSideWrapper,
} from '@/sections/HelpCenterSections/PersonalSection/PersonalSection.styled';
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled';
import DislikeIcon from '@/assets/images/help-center/dislike.svg';
import LikeIcon from '@/assets/images/help-center/like.svg';
import MessageIcon from '@/assets/images/help-center/message.svg';
import { StyledButtonLearnMore } from '@/components/UI/Button/Button.styled';
import Plus from '@/assets/icons/plus.svg';
import Minus from '@/assets/icons/minus.svg';
import { ArticleContext } from '@/contexts/ArticleContext/ArticleContext';

const list = [
  {
    id: 0,
    text: 'How to start using INQUD?',
    description: [
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
    ],
  },
  {
    id: 7,
    text: 'What is INQUD?',
    description: [
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
    ],
  },
  {
    id: 1,
    text: 'Can anyone use INQUD?',
    description: [
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API. ',
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
    ],
  },
  {
    id: 2,
    text: 'Where is Inqud registered?',
    description: [
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
    ],
  },
  {
    id: 3,
    text: 'How to sign-up for Swapin?',
    description: [
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
    ],
  },
  {
    id: 4,
    text: 'How I can log in to my Inqud account?',
    description: [
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
    ],
  },
  {
    id: 5,
    text: 'How do I reset my Password?',
    description: [
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
    ],
  },
  {
    id: 6,
    text: 'What countries are supported by Inqud?',
    description: [
      'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
    ],
  },
];

function PersonalSection() {
  const [expanded, setExpanded] = useState('');
  const { activeHeader, setActiveHeader } = useContext(ArticleContext);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setActiveHeader(list[0].text);
  }, []);

  return (
    <StyledPersonalSectionWrapper>
      <div className="container">
        <StyledLeftSideWrapper>
          <StyledTypographyUrbanistH5 className="title">
            General
          </StyledTypographyUrbanistH5>
          <ul className="list">
            {list.map(({ id, text }) => (
              <li
                key={id}
                className={clsx('list-item', {
                  ['active']: activeHeader === text,
                })}
              >
                <Link to={text} offset={-100} spy smooth duration={500}>
                  <StyledTypographyUrbanistBody
                    className={clsx('list-item-text', {
                      ['active']: activeHeader === text,
                    })}
                  >
                    {text}
                  </StyledTypographyUrbanistBody>
                </Link>
              </li>
            ))}
          </ul>
        </StyledLeftSideWrapper>
        <StyledCenterSideWrapper>
          {list.map(({ id, description, text }) => (
            <Content
              key={id}
              title={text}
              description={description}
              expanded={expanded}
              handleChange={handleChange}
            />
          ))}
        </StyledCenterSideWrapper>
        <StyledRightSideWrapper>
          <div className="cart">
            <div className="cart-left-side">
              <MessageIcon />
            </div>
            <div className="cart-right-side">
              <StyledTypographyUrbanistBody className="cart-title">
                Didn’t get an answers?
              </StyledTypographyUrbanistBody>

              <StyledButtonLearnMore className="cart-button">
                <StyledTypographyUrbanistBody className="cart-button-text">
                  Contact us
                </StyledTypographyUrbanistBody>
              </StyledButtonLearnMore>
            </div>
          </div>
        </StyledRightSideWrapper>
      </div>
    </StyledPersonalSectionWrapper>
  );
}

function Content({ title, description, expanded, handleChange }) {
  const { setActiveHeader } = useContext(ArticleContext);

  return (
    <>
      <Element className="content content-1" name={title}>
        <InView
          threshold={0}
          as="div"
          id={title}
          rootMargin="-30% 0px -70% 0px"
          onChange={(inView) => (inView ? setActiveHeader(title) : null)}
        >
          <div className="">
            <StyledTypographyUrbanistH4 className="content-title">
              {title}
            </StyledTypographyUrbanistH4>
            <div className="content-description-wrapper">
              {description.map((text, i) => (
                <StyledTypographyUrbanistBody
                  // eslint-disable-next-line react/no-array-index-key
                  key={text + i}
                  className="content-description"
                >
                  {text}
                </StyledTypographyUrbanistBody>
              ))}
            </div>

            <div className="content-footer">
              <StyledTypographyUrbanistBody className="content-footer-text">
                Did this answer your question?
              </StyledTypographyUrbanistBody>

              <div className="likeOrDislike">
                <DislikeIcon />
                <LikeIcon />
              </div>
            </div>
          </div>
        </InView>
      </Element>
      <div className="content content-2">
        <ContentAccordionItem
          title={title}
          description={description}
          expanded={expanded}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

function ContentAccordionItem({ title, expanded, description, handleChange }) {
  return (
    <StyledContentItemAccordion
      expanded={expanded === title}
      onChange={handleChange(title)}
    >
      <StyledContentItemAccordionSummary
        expanded={expanded === title}
        expandIcon={expanded === title ? <Minus /> : <Plus />}
      >
        <StyledTypographyUrbanistH5 className="questionsAccordionTitle">
          {title}
        </StyledTypographyUrbanistH5>
      </StyledContentItemAccordionSummary>
      <StyledContentItemAccordionDetails expanded={expanded === title}>
        <StyledTypographyUrbanistBody className="questionsAccordionBodyText">
          {description ||
            'Get on board with the future of payments - our embeddable crypto widget for your website makes it simple to accept cryptocurrency payments including Bitcoin, Ethereum and other crypto.'}
        </StyledTypographyUrbanistBody>
        <div className="content-footer">
          <StyledTypographyUrbanistBody className="content-footer-text">
            Did this answer your question?
          </StyledTypographyUrbanistBody>

          <div className="likeOrDislike">
            <DislikeIcon />
            <LikeIcon />
          </div>
        </div>
      </StyledContentItemAccordionDetails>
    </StyledContentItemAccordion>
  );
}

export default PersonalSection;
