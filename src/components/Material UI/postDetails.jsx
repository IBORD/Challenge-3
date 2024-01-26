import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostModal from '../modal';

const PostDetails = ({ postId }) => {
    const [post, setPost] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [postId]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Show Post Details</button>
            {post && <PostModal isOpen={modalIsOpen} onRequestClose={closeModal} post={post} />}
        </div>
    );
};

export default PostDetails;