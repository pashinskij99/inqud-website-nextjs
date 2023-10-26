import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import HeaderDropdown from '@/components/Layout/Header/HeaderDropdown'

function HeaderNav({ data }) {
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
