import { useMedia } from "react-use-media";
import { NavBarContainer, NavBarSection, BoxBtnNav } from "./style";
import { ButtonAdd, ButtonModal } from "../../../components/Button";
import { ClientContext, ReportContext, SessionContext } from "../../../contexts";

import { TbReportSearch } from 'react-icons/tb';
import { GrFormClose } from "react-icons/gr";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";

const NavBar = (): JSX.Element => {
    const { client, openModal, openModalInformation, setOpenModalInformation, setOpenModal } = ClientContext();
    const { createReportContacts } = ReportContext();
    const { logout } = SessionContext()

    const isWide = useMedia({ maxWidth: "991px" });

    return (
        <NavBarContainer>
            <NavBarSection>
                <ButtonAdd
                    onClick={() => setOpenModal(false)}
                >
                    <GrFormClose className="svg" />
                </ButtonAdd>

                <BoxBtnNav>

                    <ButtonAdd
                        onClick={() => {
                            setOpenModalInformation(!openModalInformation)
                            setOpenModal(false)
                        }}
                    >
                        <FaUserEdit className="svg" />
                        Editar perfil
                    </ButtonAdd>

                    <ButtonAdd
                        onClick={() => {
                            setOpenModalInformation(!openModalInformation)
                            setOpenModal(false)
                        }}
                    >
                        <MdOutlinePermDeviceInformation className="svg" />
                        Informações para contato
                    </ButtonAdd>

                    <ButtonAdd
                        onClick={() => createReportContacts()}
                    >   
                        <TbReportSearch className="svg" />
                        Crie seu relatório de contatos
                    </ButtonAdd>

                </BoxBtnNav>
                
                <ButtonAdd
                    onClick={() => logout()}
                >
                    <BiLogOut className='svg' />
                    Logout
                </ButtonAdd>
            </NavBarSection>


        </NavBarContainer>
    );
};

export { NavBar };
