import {useState} from 'react'
import clsx from 'clsx'
import {StyledHeaderLanguageSelectWrapper} from './HeaderLanguageSelect.styled'
import Planet from '@/assets/icons/planet.svg'
import Check from '@/assets/icons/check.svg'
import Arrow from '@/assets/icons/arrow-down.svg'

const languages = [
  {id: 0, name: 'English (US)', value: 'EN'},
  {id: 1, name: 'Deutsch', value: 'DEU'},
  {id: 2, name: 'Polski', value: 'PL'},
  {id: 3, name: 'Español', value: 'ES'},
  {id: 4, name: 'Français', value: 'FR'},
]

export default function HeaderLanguageSelect({className}) {
  const [active, setActive] = useState(false)
  const [language, setLanguage] = useState(languages[0].value)

  const handleClick = () => {
    setActive((prev) => !prev)
  }
  const handleClose = () => {
    setActive(false)
  }

  const handleLangClick = (value) => {
    setLanguage(value)
    handleClose()
  }

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
        <Planet className="planet"/>
        <span>
          {language} <Arrow/>
        </span>
      </button>

      <div
        className={clsx('select', {
          ['show']: active,
        })}
      >
        <div className="trigger"/>
        <ul
          className={clsx({
            ['show']: active,
            ['hide']: !active,
          })}
        >
          {languages.map(({id, name, value}) => (
            <li key={id}>
              <button onClick={() => handleLangClick(value)}>
                {language === value && <Check/>} {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </StyledHeaderLanguageSelectWrapper>
  )
}
