import { GrFormClose } from 'react-icons/gr';
import { MdAddIcCall, MdOutlineAutoDelete } from 'react-icons/md';
import { ContactContext } from '../../../../contexts/contact/contact.context';
import { ButtonAdd } from '../../../Button';
import { ContainerList, ContainerListInformation } from '../style';
import { InformationContext } from '../../../../contexts/information/information.context';

const ListContactInformation = () => {
    const { createInformationModal, setCreateInformationModal, getInformationById } = InformationContext()
    const { contact, setOpenContactInformation, openContactInformation,  } = ContactContext()

    return (
        <ContainerListInformation>

            <div className='box'>
                <div className='box_title'>
                    <h3>Informações para contato</h3>
                   
                    <div className='box_btsn'>
                        <ButtonAdd
                            onClick={() => {
                                setCreateInformationModal(!createInformationModal)                            
                                setOpenContactInformation(!openContactInformation)
                            }}
                        >
                            <MdAddIcCall className="svg" />
                        </ButtonAdd>

                        <ButtonAdd
                            onClick={() => setOpenContactInformation(!openContactInformation)}
                        >
                            <GrFormClose className="svg" />
                        </ButtonAdd>
                    </div>

                </div>
                <ContainerList>
                    {
                        contact.contactInformation!.length > 0 ?
                        contact.contactInformation!.map((information) =>
                        <li
                            className="card"
                            key={information.id}
                        >
                            <div className='box_information'>
                                <p>E-mail: {information.email}</p>
                                <p>Telefone: {information.phone}</p>
                            </div>
                            <ButtonAdd
                                    onClick={() => {
                                        getInformationById(information.id)
                                    }}
                                >
                                    <MdOutlineAutoDelete />
                                </ButtonAdd>
                        </li>
                        ) :
                        <div>
                            <span>
                                Adicione uma informação para contato!
                            </span>
                        </div>
                    }
                </ContainerList>
            </div>
        </ContainerListInformation>
    );
};

export { ListContactInformation };
