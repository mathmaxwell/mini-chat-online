import { create } from 'zustand'
interface IidStore {
	id: string
	setId(newId: string): void
}
const idStore = create<IidStore>(set => ({
	id: localStorage.getItem('toMessage') || '',
	setId: newId => {
		set(() => ({ id: newId }))
		localStorage.setItem('toMessage', newId)
	},
}))
export default idStore
