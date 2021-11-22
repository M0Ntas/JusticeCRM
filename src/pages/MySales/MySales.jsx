import React, {useState} from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import plus from "../../images/icons/plus.svg";

const MySales = () => {

    const [open, setOpen] = useState(false)

    const inputs = [
        {
            type: 'text',
            id: 0,
            placeholder: 'Store'
        },
        {
            type: 'number',
            id: 1,
            placeholder: 'Price'
        },
        {
            type: 'text',
            id: 2,
            placeholder: 'Product name'
        },
        {
            type: 'text',
            id: 3,
            placeholder: 'Product Category'
        },
        {
            type: 'number',
            id: 4,
            placeholder: 'Quantity of goods'
        },
        {
            type: 'number',
            id: 5,
            placeholder: 'Weight/Volume of one item'
        },
    ]

    return (
        <div className="container">
            <TitleHeader
                title={"Editing a product"}
                subtitle={"Sales table"}
                onClick={() => setOpen(true)}
                button="Save changes"
            />

            {open && <Modal
                onClick={setOpen}
                title="Editing a product">
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
                    <Button onClick={() => console.log('====>Save<====')}>
                        <span>Save changes</span>
                    </Button>
                </div>
            </Modal>
            }

        </div>
    );
};

export default MySales;