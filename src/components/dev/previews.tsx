import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next'
import React from 'react'

import { PaletteTree } from './palette'
import HomePage from '@/pages'

const ComponentPreviews = () => {
	return <Previews palette={<PaletteTree />}>
		<ComponentPreview path='/HomePage'>
			<HomePage />
		</ComponentPreview>
	</Previews>
}

export default ComponentPreviews
