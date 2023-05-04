import {FC} from "react";
import Column from "@/ui/grid/Column";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo:FC = () => {
    return (
        <>
            <Link href='/' className='flex flex-shrink-0 items-center'>
                <Image
                    src='/images/logo.svg'
                    width={85}
                    height={23}
                    alt='logo'
                    className='hidden h-8 w-auto lg:block'
                />
            </Link>
            <Image
                src='/images/logo.svg'
                width={85}
                height={23}
                alt='logo'
                className='block mr-3 h-8 w-auto lg:hidden'
            />
        </>
    // <Column size={2}>
    //     </Column>
    )
}
export default HeaderLogo;