// import { useMedia } from "react-use-media";
import { ButtonAdd } from "../../../components/Button";
import { ClientContext, ReportContext, SessionContext } from "../../../contexts";
import { BoxBtnNav, NavBarContainer, NavBarSection } from "./style";
import { BiLogOut } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { TbReportSearch } from 'react-icons/tb';
import { AnimatePresence } from "framer-motion";
import { MatrixContext } from "../../../contexts/matrix.context";

const NavBar = (): JSX.Element => {

    const {
        openModal,
        openModalInformation,
        setOpenModalInformation,
        setOpenModal,
        openModalDetailClient,
        setOpenModalDetailClient 
    } = ClientContext();
    const { createReportContacts } = ReportContext();
    const { logout } = SessionContext();
    const { setInformationOwner } = MatrixContext()


    return (
        <AnimatePresence>
            { openModal && 
                (<NavBarContainer
                    onClick={() => setOpenModal(false)}

                >
                    <NavBarSection
                        initial={{ x: 300 }}
                        animate={
                        {              x: -1,
                                transition: {
                                    type: "spring",
                                    stiffness: 30}
                    }
                        }
                        exit={{x: 300, transition: {
                            type: "spring",
                            stiffness: 30}}}
                            onClick={(e) =>  e.stopPropagation()}

                    >
                        <ButtonAdd
                            onClick={() => setOpenModal(false)}
                        >
                            <GrFormClose className="svg" />
                        </ButtonAdd>

                        <BoxBtnNav>

                            <ButtonAdd
                                onClick={() => {
                                    setOpenModalDetailClient(!openModalDetailClient)
                                    setOpenModal(false)
                                }}
                            >
                                <FaUserEdit className="svg" />
                                Editar perfil
                            </ButtonAdd>

                            <ButtonAdd
                                onClick={() => {
                                    setOpenModalInformation(!openModalInformation)
                                    setInformationOwner('client')
                                    setOpenModal(false)
                                }}
                            >
                                <MdOutlinePermDeviceInformation className="svg" />
                                Informações para contato
                            </ButtonAdd>

                            <ButtonAdd
                                onClick={() => {
                                    setOpenModal(false)
                                    createReportContacts()}
                                }
                            >
                                <TbReportSearch className="svg" />
                                Crie seu relatório de contatos
                            </ButtonAdd>

                        </BoxBtnNav>

                        <ButtonAdd
                            onClick={() => {
                                logout()
                                setOpenModal(false)
                            }}
                        >
                            <BiLogOut className='svg' />
                            Logout
                        </ButtonAdd>
                    </NavBarSection>


                </NavBarContainer>)
            }
        </AnimatePresence>
    );
};

export { NavBar };
