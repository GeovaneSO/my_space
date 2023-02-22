import { FiMoreVertical } from "react-icons/fi"
import { TaskContext } from "../../../contexts"
import { PropsListTask } from "../../../interfaces/component.interface"
import { List, BoxCheckbox, Content, BoxContent } from "./style"
import { ButtonModal } from "../../Button"

const ListTask = ({ title, description, category, status, id }: PropsListTask) => {
    const { handleChecked, openModalDetail } = TaskContext()
    return (
        <List id={id} status={status} 
            onClick={() => {
                openModalDetail(id)
            }}
            initial={{x: 200}}
            animate={{x: 0,
                transition: { 
                    type: "spring", 
                    stiffness: 30
                }
            }}
        >
            <BoxContent className="box-1">
                <BoxCheckbox>
                    <input 
                        type="checkbox" 
                        name="" 
                        id={id} 
                        checked={status}
                        onChange={
                            (event)=> handleChecked(event.target.checked, id)
                        }
                        onClick={
                            (e) =>  e.stopPropagation()
                        }
                    />
                </BoxCheckbox>
                <Content status={status}>
                    <p>{title}</p>
                </Content>
            </BoxContent>
            <BoxContent className="box-2">
                <Content status={status} className="box-description">
                    <p>{description}</p>
                </Content>
                <Content  className="box-category">
                    <p>{category}</p>
                    <ButtonModal
                        onClick={() => {
                            openModalDetail(id)
                        }}
                    >
                        <FiMoreVertical />
                    </ButtonModal>
                </Content>

            </BoxContent>
            

        </List>
    )
}

export { ListTask }
