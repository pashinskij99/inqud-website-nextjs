import clsx from 'clsx'
import Link from 'next/link'

export default function HeaderDropdownList({
  active,
  handleClose,
  dropdownList,
}) {
  return (
    <div
      className={clsx('dropdown-menu', {
        ['show']: active,
        ['hide']: !active,
      })}
    >
      {dropdownList.map(({ id, items }) => (
        <ul key={id}>
          {items.map(({ id: itemId, name, href }) => (
            <li key={itemId}>
              <Link onClick={handleClose} href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
