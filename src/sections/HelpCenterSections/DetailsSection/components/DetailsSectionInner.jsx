import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-scroll'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import {
  StyledCenterSideWrapper,
  StyledLeftSideWrapper,
  StyledPersonalSectionWrapper,
  StyledRightSideWrapper,
} from '@/sections/HelpCenterSections/DetailsSection/DetailsSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import MessageIcon from '@/assets/images/help-center/message.svg'
import { StyledButtonLearnMore } from '@/components/UI/Button/Button.styled'
import { ArticleContext } from '@/contexts/ArticleContext/ArticleContext'
import { HelpCentreDetailsContext } from '@/contexts/HelpCentreDetailsContext/HelpCentreDetailsContext'

export function DetailsSectionInner() {
  const [openModalSendRequest, setOpenModalSendRequest] = useState(false)

  const [expanded, setExpanded] = useState('')
  const { activeHeader, setActiveHeader } = useContext(ArticleContext)
  const { data } = useContext(HelpCentreDetailsContext)
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  useEffect(() => {
    if (data.content) {
      setActiveHeader(data.content[0].title)
    }
  }, [data])

  const handleOpen = () => {
    setOpenModalSendRequest(true)
  }

  const handleClose = () => {
    setOpenModalSendRequest(false)
  }

  const handleClick = async (title) => {
    const scroller = await import('react-scroll').then((res) => res.scroller)
    scroller.scrollTo(title, {
      offset: -100,
      spy: true,
      smooth: true,
      duration: 500,
    })
  }

  return (
    <StyledPersonalSectionWrapper>
      <div className='container'>
        <StyledLeftSideWrapper>
          <StyledTypographyUrbanistH5 className='title'>
            {data.mainTitle}
          </StyledTypographyUrbanistH5>
          <ul className='list'>
            {data?.content?.map(({ id, title }) => (
              <li
                key={id}
                className={clsx('list-item', {
                  ['active']: activeHeader === title,
                })}
              >
                {/* <Link to={title} offset={-100} spy smooth duration={500}> */}
                <StyledTypographyUrbanistBody
                  onClick={() => handleClick(title)}
                  className={clsx('list-item-text', {
                    ['active']: activeHeader === title,
                  })}
                >
                  {title}
                </StyledTypographyUrbanistBody>
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </StyledLeftSideWrapper>
        <StyledCenterSideWrapper>
          {data?.content?.map(({ id, descriptions, title }) => (
            <DynamicDetailsSectionModalFormContent
              key={id}
              title={title}
              description={descriptions}
              expanded={expanded}
              handleChange={handleChange}
            />
          ))}
        </StyledCenterSideWrapper>
        <StyledRightSideWrapper>
          <div className='cart'>
            <div className='cart-left-side'>
              <Image src={MessageIcon} alt={MessageIcon} />
            </div>
            <div className='cart-right-side'>
              <StyledTypographyUrbanistBody className='cart-title'>
                Didn’t get an answers?
              </StyledTypographyUrbanistBody>

              <StyledButtonLearnMore
                onClick={handleOpen}
                className='cart-button'
              >
                <StyledTypographyUrbanistBody className='cart-button-text'>
                  Contact us
                </StyledTypographyUrbanistBody>
              </StyledButtonLearnMore>
              {openModalSendRequest ? (
                <DynamicDetailsSectionModalForm
                  handleClose={handleClose}
                  openModal={openModalSendRequest}
                />
              ) : null}
            </div>
          </div>
        </StyledRightSideWrapper>
      </div>
    </StyledPersonalSectionWrapper>
  )
}

const DynamicDetailsSectionModalFormContent = dynamic(
  () =>
    import('./DetailsSectionModalFormContent').then(
      (res) => res.DetailsSectionModalFormContent
    ),
  {
    ssr: false,
  }
)

const DynamicDetailsSectionModalForm = dynamic(
  () => import('./DetailsSectionModalForm').then((res) => res.default),
  {
    ssr: false,
  }
)
