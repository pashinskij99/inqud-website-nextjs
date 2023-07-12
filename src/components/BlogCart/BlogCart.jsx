import Image from 'next/image';
import {StyledBlogCartWrapper} from '@/components/BlogCart/BlogCart.styled';
import {
  StyledTypographyIBMH5, StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4
} from '@/components/UI/Typography/Typography.styled';
import Dot from '@/assets/icons/dot.svg'

function BlogCart({imageSrc, date, time, subTitle, title}) {
  return (
    <StyledBlogCartWrapper>
      <Image
        src={imageSrc}
        className="image"
        alt={title}
        width={440}
        height={250}
      />

      <StyledTypographyIBMH5 className="subTitle">
        {subTitle}
      </StyledTypographyIBMH5>
      <StyledTypographyUrbanistH4 className="title">
        {title}
      </StyledTypographyUrbanistH4>

      <div className="footer">
        <StyledTypographyUrbanistBody className="date">
          {date}
        </StyledTypographyUrbanistBody>
        <Dot/>
        <StyledTypographyUrbanistBody className="time">
          {time}
        </StyledTypographyUrbanistBody>
      </div>
    </StyledBlogCartWrapper>
  );
}

export default BlogCart;