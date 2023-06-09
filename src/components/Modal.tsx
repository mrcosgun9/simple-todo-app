
"use client"
interface IProps {
  isModalOpen: boolean,
  setIsModalOpen: (open: boolean) => boolean | void,
  children: React.ReactNode
}
const Modal = ({ isModalOpen, setIsModalOpen, children }: IProps) => {
  return (
    <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <button className="btn btn-circle btn-xs absolute right-3 top-3" onClick={() => { setIsModalOpen(false) }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal