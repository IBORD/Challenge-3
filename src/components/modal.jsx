import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const PostModal = ({ isOpen, onRequestClose, post }) => (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
        <h2>Post Details</h2>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
    </Modal>
);

export default PostModal;