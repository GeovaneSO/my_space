import { FiMoreVertical,FiUser } from 'react-icons/fi';
import { ContactContext } from "../../../contexts/contact/contact.context";
import { ButtonModal } from '../../Button';
import { ContainerList } from './style';
import { ImageContainer } from '../../../styles/global'
import { ButtonAdd } from "../../Button";
import { AiOutlineUserAdd } from 'react-icons/ai';

const ListContacts = () => {
    const { 
        contactsByClient, 
        openCreateContact, 
        setOpenCreateContact, 
        openModalDetail,
    } = ContactContext()
    console.log(contactsByClient )
    return (
        <>
        
        <ContainerList>
            <div className='box_title'>
                <h3>Seus contatos</h3>
                <ButtonAdd
                    onClick={() => setOpenCreateContact(!openCreateContact)}
                >
                    <AiOutlineUserAdd className="svg"/>
                </ButtonAdd>
            </div>
            {
                contactsByClient && contactsByClient.length > 0 ?
                    contactsByClient.map((contact) =>
                        <li
                            className="card"
                            key={contact.id}
                        >
                            <div className='box_name_contact'>
                                <ImageContainer >
                                    {
                                        contact.avatarUrl.length > 10 ?
                                            <img src={contact.avatarUrl} alt="Imagem de contato" />
                                        :   <FiUser/>
                                        }
                                </ImageContainer>
                                <p>{contact.name}</p>
                            </div>
                            <ButtonModal
                                id={contact.id}
                                className='btn_detail'
                            onClick={
                                () => openModalDetail(contact.id)
                            }
                            >
                                <FiMoreVertical className='svg'/>
                            </ButtonModal>
                        </li>

                    ) :
                    <div>
                        <h2>
                            Adicione um contato!
                        </h2>

                    </div>

            }
        </ContainerList>
        </>
    );
};

export { ListContacts };
