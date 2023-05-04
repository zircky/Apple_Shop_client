import {FC} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import ch from "clsx";
import {IMenuLink} from "@/layout/header/menu/menu-item/menu-item.interface";

interface IMobilMenuItem {
    item: IMenuLink
}

const MobileMenuItem: FC<IMobilMenuItem> = ({item }) => {
    return (
        <Disclosure.Button
            key={item.name}
            as="a"
            href={item.link}
            className={ch(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}>
            {item.name})
        </Disclosure.Button>
    )}
export default MobileMenuItem