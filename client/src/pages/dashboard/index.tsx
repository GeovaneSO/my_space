import { BiLogOut } from 'react-icons/bi';
import { CgMenuGridO } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import { ButtonAdd, ButtonModal } from "../../components/Button";
import { CreateContact, CreateInformationModal, DetailContact } from "../../components/Form";
import { HeaderDashboard, NavBar } from "../../components/Header";
import { ListContactInformation, ListContacts, ListInformation } from "../../components/List";
import { Task } from '../../components/Task';
import { ClientContext, SessionContext } from "../../contexts";
import { ContactContext } from "../../contexts/contact/contact.context";
import { InformationContext } from '../../contexts/information/information.context';
import { ImageContainer } from '../../styles/global';
import { ContainerDashboard, ContainerMainDashboard, SectionContacts, SectionUserContainer, SectionUser, SectionTasks } from "./style";

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
                            <h1>My Space</h1>
                            
                        <div className="box_bnt">

                            <ButtonModal
                                onClick={() => setOpenModal(!openModal)}
                            >
                               { 
                                    !openModal ? 
                                        <CgMenuGridO className="svg" /> 
                                        : 
                                        <GrFormClose  className="svg" />
                                }
                            </ButtonModal>
                        </div>
                    </HeaderDashboard>
                    
                    <SectionUserContainer>
                        <SectionUser>
                        <ImageContainer >
                            {
                                client.avatarUrl && client.avatarUrl!.length > 10 ?
                                    <img src={client.avatarUrl} alt="Imagem de contato" />
                                :   <FiUser/>
                            }
                        </ImageContainer>
                        <p>{client.name}</p>
                        </SectionUser>
                    </SectionUserContainer>

                    <ContainerMainDashboard>
                        <SectionContacts>
                            <ListContacts />
                        </SectionContacts>

                        <SectionTasks>
                            <Task/>
                        </SectionTasks>
                    </ContainerMainDashboard>
                </ContainerDashboard>
            }
        </>
    );
};

export { Dashboard };
