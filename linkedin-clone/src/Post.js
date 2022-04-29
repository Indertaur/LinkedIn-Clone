import React, { forwardRef, useState } from 'react'
import "./Post.css"
import Avatar from '@mui/material/Avatar';
import Feedoption from './Feedoption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { db } from './firebase'
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Modal.css'
import { useSnackbar } from 'notistack';


const Post = forwardRef(({ id, name, description, message, }, ref) => {
    //  user
    const user = useSelector(selectUser)
    // Toggle state
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //Snackbar
    const { enqueueSnackbar } = useSnackbar();

    const deleteHandler = () => (

        db.collection('posts').doc(id).delete().then(() => {
            enqueueSnackbar(`Your Post is successfully deleted`, { variant: "success" }
            );
        })

    )

    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={user.profileUrl}> {user.email[0]} </Avatar>
                <div className="post__info">
                    <h4>{name}</h4>
                    <p >{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
                <span onClick={handleOpen} type="submit" className="delete__button"> <DeleteIcon /> </span>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box className="style">
                        <Typography variant="h6" component="h2">
                            Are you sure you want to delete this post ?
                        </Typography>
                        <div className="buttons">
                            <button className="button" onClick={deleteHandler}>
                                Confirm Delete
                            </button>
                            <button className="button" onClick={handleClose}>
                                Cancel
                            </button>
                        </div>
                    </Box>
                </Modal>
            </div>
            <div className="post__options">
                <Feedoption Icon={ThumbUpIcon} optionName="Like" style={{ color: '#70B5F8' }} />
                <Feedoption Icon={CommentIcon} optionName="Comment" style={{ color: '#70B5F8' }} />
                <Feedoption Icon={ShareIcon} optionName="Share" style={{ color: '#70B5F8' }} />
                <Feedoption Icon={SendIcon} optionName="Send" style={{ color: '#70B5F8' }} />
            </div>
        </div>
    )
})

export default Post