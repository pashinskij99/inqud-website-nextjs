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
      {languages.map(
        ({ id, name, value }, i) =>
          i === 0 && (
            <li key={id}>
              <button
                onTouchStart={() => handleLangClick(value, value.toLowerCase())}
                onClick={() => handleLangClick(value, value.toLowerCase())}
              >
                {language.toLowerCase() === value.toLowerCase() && (
                  <Image src={Check} alt='check' />
                )}{' '}
                {name}
              </button>
            </li>
          )
      )}
    </ul>
  )
}
