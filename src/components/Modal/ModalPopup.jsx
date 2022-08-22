import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal, Form, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createPost,
  isModalClose,
  isUpdatingClose,
  updatePost,
} from "../../redux/actions/postActions";

const ModalPopup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isLoading,
    hasError,
    errorMsg,
    isModalOpen,
    isUpdating,
    updatingItem,
  } = useSelector((state) => state.posts);
  const [data, setData] = useState({});

  const handleCreate = () => {
    console.log(data);
    if (!data.title || !data.userId || !data.body) {
      alert("Please fill the details");
      return null;
    } else {
      if (!isUpdating) {
        dispatch(createPost(data));
      } else {
        data.id = updatingItem.id;
        dispatch(updatePost(data));
      }
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      navigate("/");
    }
  }, [isModalOpen]);

  return (
    <>
      <Modal show={isModalOpen}>
        <Modal.Header>
          <Modal.Title>
            {!isUpdating ? "Create Post" : "Update the Post"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!hasError && (
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>User ID: </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="User ID here"
                  autoFocus
                  onChange={(e) =>
                    setData({ ...data, userId: Number(e.target.value) })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Post Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Post title here"
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Post Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Post description here.."
                  rows={3}
                  onChange={(e) => setData({ ...data, body: e.target.value })}
                />
              </Form.Group>
            </Form>
          )}
          {hasError && <h1>{errorMsg}</h1>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(isModalClose());
              dispatch(isUpdatingClose());
            }}
            as={NavLink}
            to="/"
          >
            Cancel
          </Button>
          <Button variant="success" onClick={handleCreate}>
            {isLoading ? (
              <Spinner className="spinner" animation="border" role="status" />
            ) : !isUpdating ? (
              "Create Post"
            ) : (
              "Update post"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPopup;
