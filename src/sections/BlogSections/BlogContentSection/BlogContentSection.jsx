import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledBlogContentSectionWrapper,
  StyledCartInfoWrapper,
  StyledCenterSide,
  StyledLeftSide,
  StyledRightSide,
} from './BlogContentSection.styled'
import Linkedin from '@/assets/icons/linkedin.svg'
import Twitter from '@/assets/icons/twitter.svg'
import Facebook from '@/assets/icons/facebook.svg'
import Line from '@/assets/images/blog-detail/list-line.svg'
import Image1 from '@/assets/images/blog-detail/image1.jpg'
import AuthorImage from '@/assets/images/blog-detail/author-image.png'

export default function BlogContentSection() {
  return (
    <StyledBlogContentSectionWrapper>
      <div className='container'>
        <LeftSide />
        <CenterSide />
        <RightSide />
      </div>
    </StyledBlogContentSectionWrapper>
  )
}

const leftSideList = [
  { id: 0, title: 'Backstory and the Goals', href: '#' },
  { id: 1, title: 'What Did We Get at the Stage of Data', href: '#' },
  { id: 2, title: 'Analysis?', href: '#' },
  {
    id: 3,
    title:
      'What Did We Get after CustDev, Which Was Tested on the Audience of a Potential Consumer?',
    href: '#',
  },
  { id: 4, title: 'What MVP Do We Want to Develop as a Result?', href: '#' },
  { id: 5, title: 'Conclusion', href: '#' },
]

const share = [
  { id: 0, icon: <Facebook />, href: '#' },
  { id: 1, icon: <Twitter />, href: '#' },
  { id: 2, icon: <Linkedin />, href: '#' },
]

function LeftSide() {
  return (
    <StyledLeftSide>
      <StyledTypographyUrbanistH5>Contents</StyledTypographyUrbanistH5>
      <ul className='blog-content-nav'>
        {leftSideList.map(({ href, id, title }) => (
          <Link key={id} href={href}>
            <li
              className={clsx({
                ['active']: id === 0,
              })}
            >
              <Line className='line' />
              <StyledTypographyUrbanistBody className='title'>
                {title}
              </StyledTypographyUrbanistBody>
            </li>
          </Link>
        ))}
      </ul>

      <div className='share-wrapper'>
        <StyledTypographyUrbanistBody className='share-title'>
          Share
        </StyledTypographyUrbanistBody>

        <ul className='share'>
          {share.map(({ id, icon, href }) => (
            <li key={id}>
              <Link href={href}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledLeftSide>
  )
}

function CenterSide() {
  return (
    <StyledCenterSide>
      <StyledTypographyUrbanistBody className='description'>
        This article provides a beginner-friendly introduction to
        cryptocurrencies, explaining their basics and significance in the
        financial world.{' '}
        <Link className='link' href='#1'>
          Discover how Inqud
        </Link>
        , a trusted financial technology company, contributes to the world of
        cryptocurrencies and international payments.
      </StyledTypographyUrbanistBody>

      <StyledTypographyUrbanistH4 className='title'>
        What are Cryptocurrencies?
      </StyledTypographyUrbanistH4>

      <StyledTypographyUrbanistBody className='description'>
        This article provides a beginner-friendly introduction to
        cryptocurrencies, explaining their basics and significance in the
        financial world.{' '}
        <Link className='link' href='#1'>
          Discover how Inqud
        </Link>
        , a trusted financial technology company, contributes to the world of
        cryptocurrencies and international payments.
        <br />
        <br />
        Cryptocurrencies are based on blockchain technology, a decentralized and
        transparent ledger that records all transactions. Each transaction is
        verified and added to the blockchain, ensuring transparency and
        immutability. This decentralized nature empowers individuals by giving
        them control over their finances and eliminating the need for
        traditional financial institutions.
        <br />
        <br />
        Cryptocurrencies, also known as digital currencies, have revolutionized
        the financial world with their decentralized nature and use of
        cryptographic technology. providing individuals and businesses with a
        new way to transact.
      </StyledTypographyUrbanistBody>

      <Image
        className='image'
        src={Image1}
        width={680}
        height={448}
        alt='image'
      />

      <StyledTypographyUrbanistH4 className='title'>
        What are Cryptocurrencies?
      </StyledTypographyUrbanistH4>

      <StyledTypographyUrbanistBody>
        Cryptocurrencies are based on blockchain technology, a decentralized and
        transparent ledger that records all transactions. Each transaction is
        verified and added to the blockchain, ensuring transparency and
        immutability. This decentralized nature empowers individuals by giving
        them control over their finances and eliminat need for traditional
        financial institutions. Cryptocurrencies are based on blockchain
        technology, a decentralized and transparent ledger that records all
        transactions. Each transaction is verified and added to the blockchain,
        ensuring transparency and immutability. This decentralized nature
        empowers individuals by giving them control over their finances and
        eliminating the need for traditional financial institutions.
      </StyledTypographyUrbanistBody>

      <StyledTypographyUrbanistH5 className='separated'>
        Each transaction is verified and added to the
        <br className='br-desktop' /> blockchain, ensuring transparency and
        immutability <br className='br-desktop' /> and added to the blockchain,
        ensuring transparency <br className='br-desktop' /> and immutability.
      </StyledTypographyUrbanistH5>

      <StyledTypographyUrbanistBody className='description'>
        Cryptocurrencies, also known as digital currencies, have revolutionized
        the financial world with their decentralized nature and use of
        cryptographic technology. providing individuals and businesses with a
        new way to transact.
      </StyledTypographyUrbanistBody>

      <StyledTypographyUrbanistH4 className='title'>
        What are Cryptocurrencies?
      </StyledTypographyUrbanistH4>

      <StyledTypographyUrbanistBody className='description'>
        Cryptocurrencies are based on blockchain technology, a decentralized and
        transparent ledger that records all transactions. Each transaction is
        verified and added to the blockchain, ensuring transparency and
        immutability. This decentralized nature empowers individuals by giving
        them control over their finances and eliminating the need for
        traditional financial institutions.
      </StyledTypographyUrbanistBody>
    </StyledCenterSide>
  )
}

const blogInfo = [
  { id: 0, title: 'Industries', description: 'SMB' },
  { id: 1, title: 'Products', description: 'Crypto widget, API, card2crypto' },
  { id: 2, title: 'Tags', description: 'Cryptocurrency, payment methods' },
  {
    id: 3,
    title: 'Author',
    description: 'Mike Kim, VP of finance',
    imageSrc: AuthorImage.src,
  },
]

function RightSide() {
  return (
    <StyledRightSide>
      {blogInfo.map((info) => (
        <CartInfo
          key={info.id}
          title={info.title}
          description={info.description}
          imageSrc={info?.imageSrc}
        />
      ))}
    </StyledRightSide>
  )
}

function CartInfo({ title, description, imageSrc = '' }) {
  return (
    <StyledCartInfoWrapper>
      <div className='info'>
        <StyledTypographyUrbanistBody className='title'>
          {title}
        </StyledTypographyUrbanistBody>
        <StyledTypographyUrbanistBody className='description'>
          {description}
        </StyledTypographyUrbanistBody>
      </div>

      {imageSrc ? (
        <Image
          className='author-image'
          src={imageSrc}
          alt={title}
          width={40}
          height={40}
        />
      ) : null}
    </StyledCartInfoWrapper>
  )
}
