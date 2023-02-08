import { useMedia } from "react-use-media";
import { NavBarContainer, NavBarSection } from "./style";
import { ButtonAdd, ButtonModal } from "../../../components/Button";
import { ClientContext, ReportContext } from "../../../contexts";

import { CgMenuGridO } from 'react-icons/cg';
import { TbReportSearch } from 'react-icons/tb';
import { GrFormClose } from "react-icons/gr";
import { MdOutlinePermDeviceInformation } from "react-icons/md";

const NavBar = (): JSX.Element => {
    const { client, openModal, openModalInformation, setOpenModalInformation, setOpenModal } = ClientContext();
    const { createReportContacts } = ReportContext();

    const isWide = useMedia({ maxWidth: "991px" });

    return (
        <NavBarContainer>
            <NavBarSection>
            <ButtonAdd
                onClick={() => setOpenModal(false)}
            >
                            <GrFormClose className="svg" />
                        </ButtonAdd>
            <div className="box_bnt">

                <ButtonModal
                    onClick={() => {
                        setOpenModalInformation(!openModalInformation)
                        setOpenModal(false)
                    }}
                >
                    Informações para contato
                    <MdOutlinePermDeviceInformation className="svg" />
                </ButtonModal>
                <ButtonAdd
                    onClick={() => createReportContacts()}
                >   
                    Crie seu relatório de contatos
                    <TbReportSearch className="svg" />
                </ButtonAdd>
                </div>
            </NavBarSection>


        </NavBarContainer>
    );
};

export { NavBar };
