import Image from 'next/image'
import clsx from 'clsx'
import Check from '@/assets/icons/check.svg'

export default function HeaderLanguageSelectList({
  active,
  languages,
  handleLangClick,
  language,
}) {
  return (
    <ul
      className={clsx({
        ['show']: active,
        ['hide']: !active,
      })}
    >
      {languages.map(({ id, name, value, locale: localeLang }) => (
        <li key={id}>
          <button
            onTouchStart={() => handleLangClick(value, localeLang)}
            onClick={() => handleLangClick(value, localeLang)}
          >
            {language.toLowerCase() === localeLang && (
              <Image src={Check} alt='check' />
            )}{' '}
            {name}
          </button>
        </li>
      ))}
    </ul>
  )
}
