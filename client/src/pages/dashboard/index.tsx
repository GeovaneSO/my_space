import { BiLogOut } from 'react-icons/bi';
import { CgMenuGridO } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { ButtonAdd, ButtonModal } from "../../components/Button";
import { CreateContact, CreateInformationModal, DetailContact } from "../../components/Form";
import { HeaderDashboard, NavBar } from "../../components/Header";
import { ListContactInformation, ListContacts, ListInformation } from "../../components/List";
import { ClientContext, SessionContext } from "../../contexts";
import { ContactContext } from "../../contexts/contact/contact.context";
import { InformationContext } from '../../contexts/information/information.context';
import { ImageContainer } from '../../styles/global';
import { ContainerDashboard, ContainerMainDashboard, SectionContacts } from "./style";

const Dashboard = () => {

    const { client, openModal, setOpenModal, openModalInformation } = ClientContext();
    const { openCreateContact, openDetailContact, openContactInformation } = ContactContext();
    const { createInformationModal } = InformationContext()
    // const { logout } = SessionContext()


    return (
        <>
            {openModalInformation && <ListInformation />}
            {openModal && <NavBar />}
            {openCreateContact && <CreateContact />}
            {openDetailContact && <DetailContact />}
            {createInformationModal && <CreateInformationModal />}
            {openContactInformation && <ListContactInformation />}
            {
                client &&
                <ContainerDashboard>

                    <HeaderDashboard >
                        <div className='box_logout'>

                            {/* <h2>Olá, {client.username}</h2> */}
                            <h1>Your Space</h1>
                            <ImageContainer >
                                {
                                    client.avatarUrl && client.avatarUrl!.length > 10 ?
                                        <img src={client.avatarUrl} alt="Imagem de contato" />
                                    :   <FiUser/>
                                }
                            </ImageContainer>


                        </div>

                        <div className="box_bnt">

                            <ButtonModal
                                onClick={() => setOpenModal(!openModal)}
                            >
                                <CgMenuGridO className="svg" />
                            </ButtonModal>
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
