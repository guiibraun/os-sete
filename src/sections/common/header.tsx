import Image from 'next/image'
import logo from '@/assets/roxo_reduzida.png'
import Link from 'next/link'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Sobre Nós', href: '#sobre-nos', current: false },
  { name: 'Conteúdo', href: '#conteudo', current: false }
]

export function Header() {
  return (
    <Disclosure as="nav" className="">
      <div className="container sticky top-0">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch">
            <Link href="/" className="flex flex-shrink-0 items-center">
              <Image alt="Os Site" src={logo} className="h-24 w-auto" />
            </Link>
            <div className="hidden items-center sm:ml-6 sm:flex">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={cn(
                      item.current ? '' : '',
                      'text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={cn(
                item.current
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
