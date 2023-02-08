import { GrFormClose } from 'react-icons/gr';
import { MdAddIcCall, MdOutlineAutoDelete } from 'react-icons/md';
import { ClientContext } from '../../../../contexts';
import { InformationContext } from '../../../../contexts/information/information.context';
import { ButtonAdd } from '../../../Button';
import { ContainerList, ContainerListInformation } from '../style';

const ListInformation = () => {
    const { informationByClient, setOpenModal, openModal, openModalInformation, setOpenModalInformation } = ClientContext()
    const { createInformationModal, setCreateInformationModal, getInformationById } = InformationContext()

    return (
        <ContainerListInformation>
            <div className='box'>

                <div className='box_title'>
                    <h3>Informações para contato</h3>

                    <div className='box_btsn'>
                        <ButtonAdd
                            onClick={() => {
                                setCreateInformationModal(!createInformationModal)                            
                                setOpenModalInformation(!openModalInformation) 
                            }}
                        >
                            <MdAddIcCall className="svg" />
                        </ButtonAdd>

                        <ButtonAdd
                            onClick={() => setOpenModalInformation(!openModalInformation)}
                        >
                            <GrFormClose className="svg" />
                        </ButtonAdd>
                    </div>
                </div>
                <ContainerList>
                {
                    informationByClient.length > 0 ?
                        informationByClient.map((information) =>
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
        </ContainerListInformation >
    );
};

export { ListInformation };
