import { motion } from 'framer-motion';
import { CgMenuGridO } from 'react-icons/cg';
import { GrFormClose } from 'react-icons/gr';
import { HiUserCircle } from 'react-icons/hi';
import { ButtonModal } from "../../components/Button";
import { HeaderDashboard, NavBar } from "../../components/Header";
import { ListContactInformation, ListContacts, ListInformation } from "../../components/List";
import Loading from '../../components/Loading';
import { CreateContact, CreateInformationModal, DetailContact } from "../../components/Modal";
import { ModalTask } from '../../components/Modal/create.task';
import { DetailClient } from '../../components/Modal/detail.client';
import { DetailTask } from '../../components/Modal/detail.task';
import { Task } from '../../components/Task';
import { ClientContext } from "../../contexts";
import { ImageContainer } from '../../styles/global';
import { ContainerDashboard, ContainerMainDashboard, SectionContacts, SectionTasks, SectionUser, SectionUserContainer } from "./style";

const Dashboard = () => {

    const { client, openModal, setOpenModal, setOpenModalDetailClient, openModalDetailClient } = ClientContext();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {<DetailTask />}
            {<Loading />}
            {<ListInformation />}
            {<DetailClient />}
            {<CreateContact />}
            {<DetailContact />}
            {<CreateInformationModal />}
            {<ListContactInformation />}
            {<ModalTask />}
            {<NavBar />}

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
                                        <GrFormClose className="svg" />
                                }
                            </ButtonModal>
                        </div>
                    </HeaderDashboard>

                    <SectionUserContainer>
                        <SectionUser>
                            <ImageContainer
                                onClick={() => setOpenModalDetailClient(!openModalDetailClient)
                                }
                            >
                                {
                                    client.avatarUrl && client.avatarUrl!.length > 10 ?
                                        <img src={client.avatarUrl} alt="Imagem de contato" />
                                        : <HiUserCircle className='svg' />
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
                            <Task />
                        </SectionTasks>
                    </ContainerMainDashboard>
                </ContainerDashboard>
            }
        </motion.div>
    );
};

export { Dashboard };
