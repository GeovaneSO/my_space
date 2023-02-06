import { GrFormClose } from 'react-icons/gr';
import { MdAddIcCall } from 'react-icons/md';
import { TbPlaylistAdd } from 'react-icons/tb';
import { ClientContext } from '../../../../contexts';
import { InformationContext } from '../../../../contexts/information/information.context';
import { ButtonAdd, ButtonModal } from '../../../Button';
import { ContainerList, ContainerListInformation } from '../style';

const ListInformation = () => {
    const { informationByClient, setOpenModal } = ClientContext()
    const { createInformationModal, setCreateInformationModal } = InformationContext()

    return (
        <ContainerListInformation>

            <ContainerList>
                <div className='box_title'>
                    <h3>Informações para contato</h3>


                    <ButtonAdd
                        onClick={() => {
                            setCreateInformationModal(!createInformationModal)
                            
                            
                            setOpenModal(false) }}
                    >
                    <MdAddIcCall className="svg" />
                </ButtonAdd>

                <ButtonAdd
                    onClick={() => setOpenModal(false)}
                >
                    <GrFormClose className="svg" />
                </ButtonAdd>
            </div>
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
                        </li>

                    ) :
                    <div>
                        <h2>
                            Adicione uma informação para contato!
                        </h2>

                        <ButtonModal
                            // id={information.id}
                            className='btn_detail'
                        // onClick={
                        //     () => 
                        // }
                        >
                            <TbPlaylistAdd className='svg' />
                        </ButtonModal>

                    </div>

            }
        </ContainerList>
        </ContainerListInformation >
    );
};

export { ListInformation };
