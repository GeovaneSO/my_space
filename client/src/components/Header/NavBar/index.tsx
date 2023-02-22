import { AnimatePresence } from "framer-motion";
import { BiLogOut } from "react-icons/bi";
import { BsLightbulb } from 'react-icons/bs';
import { FaUserEdit } from "react-icons/fa";
import { MdDarkMode, MdOutlinePermDeviceInformation } from "react-icons/md";
import { TbReportSearch } from 'react-icons/tb';
import { ButtonAdd } from "../../../components/Button";
import { ClientContext, ReportContext, SessionContext } from "../../../contexts";
import { MatrixContext } from "../../../contexts/matrix.context";
import { BoxBtnNav, NavBarContainer, NavBarSection } from "./style";

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
    const { setInformationOwner, setCurrentTheme, currentTheme } = MatrixContext()
    
    return (
        <AnimatePresence>
            {openModal &&
                (<NavBarContainer
                    onClick={() => setOpenModal(false)}

                >
                    <NavBarSection
                        initial={{ x: 300 }}
                        animate={
                            {
                                x: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 30
                                }
                            }
                        }
                        exit={{
                            x: 300, transition: {
                                type: "spring",
                                stiffness: 30
                            }
                        }}
                        onClick={(e) => e.stopPropagation()}

                    >
                        <ButtonAdd
                            className="bt"
                            onClick={() => setOpenModal(false)}
                        > X
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
                                    createReportContacts()
                                }
                                }
                            >
                                <TbReportSearch className="svg" />
                                Crie seu relatório de contatos
                            </ButtonAdd>

                            <ButtonAdd
                                onClick={() => {
                                    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme")
                                    localStorage.setItem('theme',
                                        // currentTheme === "lightTheme" ? "darkTheme" : "ligthTheme"
                                        currentTheme
                                    )
                                }}
                            >
                                {
                                    currentTheme === "lightTheme" ?
                                        
                                        <><BsLightbulb /><span>Tema claro</span></> :
                                        <> <MdDarkMode /> <span>Tema escuro</span></>
                                }
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
