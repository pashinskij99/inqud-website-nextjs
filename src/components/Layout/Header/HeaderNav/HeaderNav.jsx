import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import HeaderDropdown from '@/components/Layout/Header/HeaderDropdown'

function HeaderNav({ data }) {
  // const navListTranslate = useTranslations('header_items')

  // const navList = [
  //   { id: 0, name: navListTranslate(keysForLocale.keys3[0]), href: '/company' },
  //   { id: 1, name: navListTranslate(keysForLocale.keys3[1]), href: '/blog' },
  //   {
  //     id: 2,
  //     name: navListTranslate(keysForLocale.keys3[2]),
  //     href: '/help-center',
  //   },
  // ]

  const pathname = usePathname()

  return (
    <nav className='navSection'>
      <ul>
        <HeaderDropdown data={data} />

        {data.nav.map(({ id, name, link }) => (
          <li key={id}>
            <Link
              className={clsx({
                ['active']: pathname.search(link) !== -1,
              })}
              href={link}
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
