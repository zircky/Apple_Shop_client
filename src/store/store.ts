import {
	PayloadAction,
	combineReducers,
	configureStore,
	createSlice
} from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userSlice } from '@/store/user/user.slice'

import { cartSlice } from './cart/cart.slice'

interface FilterState {
	filter: {
		storageCapacity: string
		colors: string
		models: string
		communicationOptions: string
		cpu: string
		gpu: string
		diagonal: string
		size: string
		strapType: string
	}
	products: {
		storageCapacity: string
		colors: string
		models: string
		communicationOptions: string
		cpu: string
		gpu: string
		diagonal: string
		size: string
		strapType: string
	}[]
}

const initialState: FilterState = {
	filter: {
		storageCapacity: '',
		colors: '',
		models: '',
		communicationOptions: '',
		cpu: '',
		gpu: '',
		diagonal: '',
		size: '',
		strapType: ''
	},
	products: []
}

const persistConfig = {
	key: 'apple_shop',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	user: userSlice.reducer
})

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		updateFilter(state, action: PayloadAction<Partial<FilterState['filter']>>) {
			state.filter = { ...state.filter, ...action.payload }
		},
		updateProducts(state, action: PayloadAction<FilterState['products']>) {
			state.products = action.payload
		}
	}
})

export const { updateFilter, updateProducts } = filterSlice.actions

export type RootState = {
	filter: FilterState
}
export default configureStore({
	reducer: {
		filter: filterSlice.reducer
	}
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
