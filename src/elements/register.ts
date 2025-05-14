import { create } from 'zustand'
interface IIsRegister {
	isRegister: boolean
	isRegisterTrue: () => void
}
const useRegister = create<IIsRegister>(set => ({
	isRegister: false,
	isRegisterTrue: () => set(() => ({ isRegister: true })),
}))
export default useRegister
