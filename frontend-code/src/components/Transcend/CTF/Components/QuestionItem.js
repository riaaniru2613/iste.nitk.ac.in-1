import React from "react";
import styles from "../css/QuestionItem.module.css";

import Modal from "../../../UtilityComponents/Modal";
import ModalContent from "./ModalContent";
class QuestionItem extends React.Component {
    state = { isModalOpen: false };
    modalOpenHandler = () => {
        this.setState({ isModalOpen: true });
    };
    modalCloseHandler = () => {
        this.setState({ isModalOpen: false });
    };
    render() {
        const {
            questionId,
            status,
            Title,
            description,
            points,
            url,
            hint1Url,
            hint2Url,
        } = this.props.item;
        return (
            <>
                <div
                    onClick={this.modalOpenHandler}
                    className={`${styles.box} ${
                        status ? styles.attempted : null
                    }`}
                >
                    <h3 className={styles.title}>{Title}</h3>
                    <h5>{points}</h5>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onCloseHandler={this.modalCloseHandler}
                >
                    <ModalContent
                        title={Title}
                        desc={description}
                        questionLink={url}
                        onCloseHandler={this.modalCloseHandler}
                    />
                </Modal>
            </>
        );
    }
}
export default QuestionItem;