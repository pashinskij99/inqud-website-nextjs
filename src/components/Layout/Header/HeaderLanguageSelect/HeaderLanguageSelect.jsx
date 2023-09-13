import { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next-intl/client';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { StyledHeaderLanguageSelectWrapper } from './HeaderLanguageSelect.styled';
import Planet from '@/assets/icons/planet.svg';
import Check from '@/assets/icons/check.svg';
import Arrow from '@/assets/icons/arrow-down.svg';

const languages = [
  { id: 0, name: 'English (US)', value: 'EN', locale: 'en' },
  { id: 1, name: 'Ukrainian', value: 'UK', locale: 'uk' },
  { id: 3, name: 'Español', value: 'ES', locale: 'es' },
  { id: 2, name: 'Russian', value: 'RU', locale: 'ru' },
];

export default function HeaderLanguageSelect({ className }) {
  const [active, setActive] = useState(false);
  const locale = useLocale();
  const [language, setLanguage] = useState(locale.toUpperCase());
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  const handleClose = () => {
    setActive(false);
  };

  const handleLangClick = (value, locale) => {
    setLanguage(value.toUpperCase());
    router.replace(pathname, { locale, scroll: false });
    handleClose();
  };

  return (
    <StyledHeaderLanguageSelectWrapper
      onMouseEnter={handleClick}
      onMouseLeave={handleClose}
      onClick={handleClick}
      className={className}
    >
      <button
        className={clsx('button-select', {
          ['active']: active,
        })}
      >
        <Planet className="planet" />
        <span>
          {language} <Arrow />
        </span>
      </button>

      <div
        className={clsx('select', {
          ['show']: active,
        })}
      >
        <div className="trigger" />
        <ul
          className={clsx({
            ['show']: active,
            ['hide']: !active,
          })}
        >
          {languages.map(({ id, name, value, locale: localeLang }) => (
            <li key={id}>
              <button onClick={() => handleLangClick(value, localeLang)}>
                {language.toLowerCase() === localeLang && <Check />} {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </StyledHeaderLanguageSelectWrapper>
  );
}
