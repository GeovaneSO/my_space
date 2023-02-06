import { CgMenuGridO } from 'react-icons/cg';
import { TbReportSearch } from 'react-icons/tb';
import { ButtonAdd, ButtonModal } from "../../components/Button";
import { CreateContact, CreateInformationModal, DetailContact } from "../../components/Form";
import { HeaderDashboard } from "../../components/Header";
import { ListContacts, ListInformation } from "../../components/List";
import { ClientContext, ReportContext } from "../../contexts";
import { ContactContext } from "../../contexts/contact/contact.context";
import { InformationContext } from '../../contexts/information/information.context';
import { ContainerDashboard, SectionContacts } from "./style";

const Dashboard = () => {

    const { client, openModal, setOpenModal } = ClientContext();
    const { openCreateContact, openDetailContact } = ContactContext();
    const { createReportContacts } = ReportContext();
    const { createInformationModal } = InformationContext()


    return (
        <>
            {openModal && <ListInformation />}
            {openCreateContact && <CreateContact />}
            {openDetailContact && <DetailContact />}
            {createInformationModal && <CreateInformationModal />}
            {
                client &&
                <ContainerDashboard>
                    <HeaderDashboard >
                        <h2>Olá, {client.username}</h2>

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
