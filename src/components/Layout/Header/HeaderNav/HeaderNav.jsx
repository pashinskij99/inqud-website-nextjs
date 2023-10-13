import Link from 'next/link'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { keysForLocale } from '@/config/keysForLocale'
import HeaderDropdown from '@/components/Layout/Header/HeaderDropdown'

function HeaderNav() {
  const navListTranslate = useTranslations('header_items')

  const navList = [
    { id: 0, name: navListTranslate(keysForLocale.keys3[0]), href: '/company' },
    { id: 1, name: navListTranslate(keysForLocale.keys3[1]), href: '/blog' },
    {
      id: 2,
      name: navListTranslate(keysForLocale.keys3[2]),
      href: '/help-centre',
    },
  ]

  const pathname = usePathname()

  return (
    <nav className='navSection'>
      <ul>
        <HeaderDropdown />

        {navList.map(({ id, name, href }) => (
          <li key={id}>
            <Link
              className={clsx({
                ['active']: pathname.search(href) !== -1,
              })}
              href={href}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNav
