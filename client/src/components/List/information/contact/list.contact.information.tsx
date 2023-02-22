import { AnimatePresence, motion } from 'framer-motion';
import { MdAddIcCall, MdOutlineAutoDelete } from 'react-icons/md';
import { ContactContext } from '../../../../contexts/contact/contact.context';
import { InformationContext } from '../../../../contexts/information/information.context';
import { ButtonAdd } from '../../../Button';
import { BoxTitle, Container, ContainerList, ContainerListInformation } from '../style';

const ListContactInformation = () => {
    const { createInformationModal, setCreateInformationModal, getInformationById } = InformationContext()
    const { contact, setOpenContactInformation, openContactInformation, } = ContactContext()

    return (
        <AnimatePresence>
            {openContactInformation &&
                <Container
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setOpenContactInformation(!openContactInformation)}
                >
                    <ContainerListInformation
                        initial={{ scale: 0.5 }}
                        animate={{
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 30
                            }
                        }}
                        exit={{
                            scale: 0.5,
                            transition: {
                                type: "spring",
                                stiffness: 30
                            }
                        }}

                        onClick={(e) => e.stopPropagation()}
                    >
                        <BoxTitle>
                            <h3>Informações de {contact.name}</h3>

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
                                    X
                                </ButtonAdd>
                            </div>

                        </BoxTitle>
                        <ContainerList>
                            {
                                contact.contactInformations!.length > 0 ?
                                    contact.contactInformations!.map((information) =>
                                        <motion.li
                                            className="card"
                                            key={information.id}
                                            initial={{ x: 200 }}
                                            animate={{
                                                x: 0,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 30
                                                }
                                            }}
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
                                        </motion.li>
                                    ) :
                                    <div>
                                        <span>
                                            Adicione uma informação para contato!
                                        </span>
                                    </div>
                            }
                        </ContainerList>
                    </ContainerListInformation>
                </Container>
            }
        </AnimatePresence>
    );
};

export { ListContactInformation };
