import { CgMenuGridO } from 'react-icons/cg';
import { TbReportSearch } from 'react-icons/tb';
import { BiLogOut } from 'react-icons/bi';
import { ButtonAdd, ButtonModal } from "../../components/Button";
import { CreateContact, CreateInformationModal, DetailContact } from "../../components/Form";
import { HeaderDashboard } from "../../components/Header";
import { ListContacts, ListInformation, ListContactInformation } from "../../components/List";
import { ClientContext, ReportContext, SessionContext } from "../../contexts";
import { ContactContext } from "../../contexts/contact/contact.context";
import { InformationContext } from '../../contexts/information/information.context';
import { ContainerDashboard, SectionContacts } from "./style";

const Dashboard = () => {

    const { client, openModal, setOpenModal } = ClientContext();
    const { openCreateContact, openDetailContact, openContactInformation } = ContactContext();
    const { createReportContacts } = ReportContext();
    const { createInformationModal } = InformationContext()
    const { logout } = SessionContext()


    return (
        <>
            {openModal && <ListInformation />}
            {openCreateContact && <CreateContact />}
            {openDetailContact && <DetailContact />}
            {createInformationModal && <CreateInformationModal />}
            {openContactInformation && <ListContactInformation />}
            {
                client &&
                <ContainerDashboard>
                    <HeaderDashboard >
                        <div className='box_logout'>
                        <ButtonAdd 
                            onClick={() => logout()}
                        >
                            <BiLogOut className='logout'/>
                        </ButtonAdd>
                        <h2>Olá, {client.username}</h2>

                        </div>

                        <div className="box_bnt">
                            <ButtonAdd
                                onClick={() => createReportContacts()}
                            >
                                <TbReportSearch className="svg" />
                            </ButtonAdd>

                            <ButtonModal
                                onClick={() => setOpenModal(true)}
                            >
                                <CgMenuGridO className="svg" />
                            </ButtonModal>
                        </div>
                    </HeaderDashboard>
                    <main>
                        <SectionContacts>
                            <ListContacts />
                        </SectionContacts>
                    </main>
                </ContainerDashboard>
            }
        </>
    );
};

export { Dashboard };
