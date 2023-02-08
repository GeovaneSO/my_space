import { CgMenuGridO } from 'react-icons/cg';
import { TbReportSearch } from 'react-icons/tb';
import { BiLogOut } from 'react-icons/bi';
import { ButtonAdd, ButtonModal } from "../../components/Button";
import { CreateContact, CreateInformationModal, DetailContact } from "../../components/Form";
import { HeaderDashboard, NavBar } from "../../components/Header";
import { ListContacts, ListInformation, ListContactInformation } from "../../components/List";
import { ClientContext, ReportContext, SessionContext } from "../../contexts";
import { ContactContext } from "../../contexts/contact/contact.context";
import { InformationContext } from '../../contexts/information/information.context';
import { ContainerDashboard, ContainerMainDashboard, SectionContacts } from "./style";

const Dashboard = () => {

    const { client, openModal, setOpenModal, openModalInformation, setOpenModalInformation } = ClientContext();
    const { openCreateContact, openDetailContact, openContactInformation } = ContactContext();
    const { createReportContacts } = ReportContext();
    const { createInformationModal } = InformationContext()
    const { logout } = SessionContext()


    return (
        <>
            {openModalInformation && <ListInformation />}
            {openModal && <NavBar/>}
            {openCreateContact && <CreateContact />}
            {openDetailContact && <DetailContact />}
            {createInformationModal && <CreateInformationModal />}
            {openContactInformation && <ListContactInformation />}
            {
                client &&
                <ContainerDashboard>
                    
                    <HeaderDashboard >
                        <div className='box_logout'>
                        <h2>Olá, {client.username}</h2>
                        <ButtonAdd 
                            onClick={() => logout()}
                        >
                            <BiLogOut className='logout'/>
                        </ButtonAdd>

                        </div>

                        <div className="box_bnt">

                            <ButtonModal
                                onClick={() => setOpenModal(!openModal)}
                            >
                                <CgMenuGridO className="svg" />
                            </ButtonModal>
                            {/* <ButtonAdd
                                onClick={() => createReportContacts()}
                            >
                                <TbReportSearch className="svg" />
                            </ButtonAdd> */}
                        </div>
                    </HeaderDashboard>
                    <ContainerMainDashboard>
                        <SectionContacts>
                            <ListContacts />
                        </SectionContacts>
                    </ContainerMainDashboard>
                </ContainerDashboard>
            }
        </>
    );
};

export { Dashboard };
