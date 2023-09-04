import clsx from 'clsx';
import { useContext } from 'react';
import Image from 'next/image';
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled';
import { StyledPickSectionSection } from './PickSection.styled';
import Check from '@/assets/icons/check-green-background.svg';
import Pick from '@/assets/icons/pick.svg';
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled';
import { PageContext } from '@/contexts/PageContext/PageContext';

export default function PickSection({ variant, className }) {
  const {
    dataPage: { homePage: data, pickLeadForm: leadFormData },
  } = useContext(PageContext);

  return (
    <StyledPickSectionSection className={clsx(className, 'container')}>
      <StyledTypographyUrbanistH2 className="pickTitle">
        {variant === 'dontLose' ? (
          <div className="pickTitleDontLose">{data.leadForm1Title}</div>
        ) : (
          <div className="pickTitle10Minutes">{data.leadForm2Title}</div>
        )}
      </StyledTypographyUrbanistH2>

      <div className="pickListWrapper">
        {variant === 'dontLose' ? (
          <>
            <div className="pickListMobile">
              <PickListDontLose
                data={{
                  list: data.leadForm1List,
                  title: data.leadForm1ListTitle,
                }}
              />
            </div>
            <div className="pickListDontLose">
              <PickListDontLose
                data={{
                  list: data.leadForm1List,
                  title: data.leadForm1ListTitle,
                }}
              />
            </div>
          </>
        ) : (
          <PickList10Minutes
            data={{
              list: data.leadForm2List,
            }}
          />
        )}
      </div>

      <div className="pickPick">
        <Pick />

        <StyledTypographyUrbanistBody className="pickPickDescription">
          {leadFormData.pickDescription}
        </StyledTypographyUrbanistBody>

        <StyledButtonSecondaryLight className="pickPickButton">
          {leadFormData.buttonText}
        </StyledButtonSecondaryLight>
      </div>
    </StyledPickSectionSection>
  );
}

export function PickListDontLose({ data }) {
  return (
    <div className="pickList pickList_dontLose">
      <StyledTypographyUrbanistH5 className="pickListTitle">
        {data.title}
      </StyledTypographyUrbanistH5>
      <ul>
        {data.list.map((text) => (
          <li key={text}>
            <Check />
            <StyledTypographyUrbanistBody className="pickListItemText">
              {text}
            </StyledTypographyUrbanistBody>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PickList10Minutes({ data }) {
  return (
    <div className="pickList pickList10Minutes">
      <ul>
        {data.list.map(({ id, title, image: { url } }) => (
          <li key={id}>
            <Image src={url} alt={title} width={48} height={48} />
            <StyledTypographyUrbanistBody className="pickListItemText">
              {title}
            </StyledTypographyUrbanistBody>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PickApiSection({ className }) {
  const {
    dataPage: { apiPage: data, pickLeadForm: leadFormData },
  } = useContext(PageContext);

  return (
    <StyledPickSectionSection className={clsx(className, 'container')}>
      <StyledTypographyUrbanistH3 className="pickTitle pickTitleApi">
        {data.lead1Title}
      </StyledTypographyUrbanistH3>

      <div className="pickListWrapper">
        <PickListApi list={data.leadForm1List} />
      </div>

      <div className="pickPick">
        <Pick />

        <StyledTypographyUrbanistBody className="pickPickDescription">
          {leadFormData.pickDescription}
        </StyledTypographyUrbanistBody>

        <StyledButtonSecondaryLight className="pickPickButton pickPickButtonApi-1">
          {leadFormData.buttonText}
        </StyledButtonSecondaryLight>

        <StyledButtonSecondaryLight className="pickPickButton pickPickButtonApi-2">
          {leadFormData.buttonText}
        </StyledButtonSecondaryLight>
      </div>
    </StyledPickSectionSection>
  );
}

function PickListApi({ list }) {
  return (
    <div className="pickList pickListApi">
      <ul>
        {list.map(({ id, title, image }) => (
          <li key={id}>
            <Image src={image?.url} alt={title} width={48} height={48} />
            <StyledTypographyUrbanistBody className="pickListItemText">
              {title}
            </StyledTypographyUrbanistBody>
          </li>
        ))}
      </ul>
    </div>
  );
}
