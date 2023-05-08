import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { useProfile } from '@/hooks/useProfile'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()
	return (
		<Layout title='Favorites'>
			<Catalog products={profile?.favorites || []} title='Favorite' />
		</Layout>
	)
}
FavoritesPage.isOnlyUser = true
export default FavoritesPage
