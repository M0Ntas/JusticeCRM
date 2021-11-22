import React, {useState} from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const MyProducts = () => {
    const [open, setOpen] = useState(false)

    const inputs = [
        {
            type: 'number',
            id: 0,
            placeholder: 'Number of products'
        },
        {
            type: 'date',
            id: 1,
            placeholder: 'Date of sale'
        },
    ]

    return (
        <div className="container">
            <TitleHeader
                title={"My product"}
                subtitle={"Product table"}
                onClick={() => setOpen(true)}
            />

            {open && <Modal
                onClick={setOpen}
                title="sdfsdfsfdf">
                {inputs.map((item) => {
                    return (
                        <div className="modal-input-wrap" key={item.id}>
                            <Input
                                placeholder={item.placeholder}
                                type={item.type}
                            />
                        </div>
                    )
                })}
                <div className="modal-button">
                    <Button onClick={() => console.log('====>Add<====')}>
                        <span>xyi</span>
                    </Button>
                </div>
            </Modal>
            }
        </div>

    )
};

export default MyProducts;