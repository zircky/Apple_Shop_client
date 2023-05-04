import { createAsyncThunk } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { rootActions } from '@/store/root-actions'

import { AuthService } from '@/services/auth/auth.service'

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

// export const logout = createAsyncThunk('auth/logout', async () => {
// 	await AuthService.logout()
// })
