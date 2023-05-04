import {FC} from 'react'
import Image from "next/image";
import Link from "next/link";
import Layout from "@/layout/Layout";
import {airpodsProducts} from "@/screens/catalog/airpods/airpodsProducts";
import styles from './Airpods.module.scss'

const Airpods: FC = () => {
    return (
        <Layout
            title='Airpods'
            description='iPhone clothing and accessories'
        >
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">AirPods</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {airpodsProducts.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="min-h-[22rem] aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <Image
                                        src={product.images}
                                        alt={product.slug}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link href={product.link}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <p className="text-sm font-bold text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Airpods