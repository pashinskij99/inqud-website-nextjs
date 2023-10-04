import { useContext, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useWindowSize } from '@uidotdev/usehooks'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { YourNeedsSectionWrapper } from './YourNeedsSection.styled'
import Image1 from '@/assets/images/your-needs/image1.png'
import Image2 from '@/assets/images/your-needs/image2.png'
import Image3 from '@/assets/images/your-needs/image3.png'
import Coins1 from '@/assets/images/your-needs/Coins1.svg'
import Coins2 from '@/assets/images/your-needs/Coins2.svg'
import Coins3 from '@/assets/images/your-needs/Coins3.svg'
import Coins4 from '@/assets/images/your-needs/Coins4.svg'
import Coins5 from '@/assets/images/your-needs/Coins5.svg'
import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { responseBreakPoint } from '@/utils/response'

const DynamicCartRequirement = dynamic(
  () =>
    import('@/components/CartRequirement').then((mod) => mod.CartRequirement),
  {
    ssr: false,
  }
)

const DynamicYourNeedsSectionSwiper = dynamic(
  () =>
    import('./components/YourNeedsSectionSwiper').then((mod) => mod.default),
  {
    ssr: false,
  }
)

const DynamicCoinsList = dynamic(
  () => import('./components/CoinsList').then((mod) => mod.default),
  {
    ssr: false,
  }
)

const DynamicYourNeedsSectionModalForm = dynamic(
  () =>
    import('./components/YourNeedsSectionModalForm').then((mod) => mod.default),
  {
    ssr: false,
  }
)

const coinsList = [
  { id: 3, icon: <Coins4 /> },
  { id: 4, icon: <Coins5 /> },
  { id: 0, icon: <Coins1 /> },
  { id: 1, icon: <Coins2 /> },
  { id: 2, icon: <Coins3 /> },
]

export default function YourNeedsSection() {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   reset,
  // } = useForm({
  //   defaultValues: {
  //     email: '',
  //     message: '',
  //   },
  //   resolver: yupResolver(userSchema2),
  // })

  const [openModalSendRequest, setOpenModalSendRequest] = useState(false)
  const t = useTranslations('home_page_your_needs_section')
  const tList = useTranslations('home_page_your_needs_section_list_item_title')
  const tList2 = useTranslations(
    'home_page_your_needs_section_list_item_description'
  )

  const handleOpen = () => {
    setOpenModalSendRequest(true)
  }

  const handleClose = () => {
    setOpenModalSendRequest(false)
  }

  const {
    dataPage: { homePage: data },
  } = useContext(PageContext)

  // const onSubmit = async (data) => {
  //   const newData = {
  //     email: data.email,
  //     fieldValues: [
  //       {
  //         field: '1',
  //         value: data.message,
  //       },
  //     ],
  //   }

  //   // await toast.promise(
  //   await submitForFormActiveCampaign(newData, '/api/create-contact', 2)
  //   // ,
  //   // {
  //   //   pending: 'Sending data',
  //   //   success: 'Data sent',
  //   // }
  //   // )

  //   await toast.promise(createBlog({ data, modelId: '2537177' }), {
  //     pending: 'Sending data',
  //     success: 'Data sent',
  //   })

  //   handleClose()
  //   reset()
  // }

  const list = [
    {
      id: 0,
      title: tList(keysForLocale.keys3[0]),
      description: tList2(keysForLocale.keys3[0]),
      image: Image1.src,
    },
    {
      id: 1,
      title: tList(keysForLocale.keys3[1]),
      description: tList2(keysForLocale.keys3[1]),
      buttonText: data.buttonScreen2,
      open: openModalSendRequest,
      handleClick: handleOpen,
      image: Image2.src,
    },
    {
      id: 2,
      title: tList(keysForLocale.keys3[2]),
      description: tList2(keysForLocale.keys3[2]),
      image: Image3.src,
    },
  ]

  const size = useWindowSize()

  return (
    <YourNeedsSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title title-desktop'>
          {t('title')}
        </StyledTypographyUrbanistH2>

        <DynamicCoinsList coinsList={coinsList} />

        <StyledTypographyUrbanistH5
          component='p'
          className='subTitle subTitle-desktop'
        >
          {t('paragraph')}
        </StyledTypographyUrbanistH5>

        {size.width && size.width >= responseBreakPoint.desktop ? (
          <div className='listRequirements'>
            {list.map(
              ({ id, buttonText, description, image, title, handleClick }) => (
                <DynamicCartRequirement
                  key={id}
                  buttonText={buttonText}
                  description={description}
                  href='#'
                  handleClick={handleClick}
                  imageSrc={image}
                  title={title}
                />
              )
            )}
          </div>
        ) : null}
        {size.width && size.width <= responseBreakPoint.tablet ? (
          <DynamicYourNeedsSectionSwiper data={data} list={list} />
        ) : null}
      </div>
      {openModalSendRequest ? (
        <DynamicYourNeedsSectionModalForm
          openModalSendRequest={openModalSendRequest}
          handleClose={handleClose}
        />
      ) : null}
    </YourNeedsSectionWrapper>
  )
}
