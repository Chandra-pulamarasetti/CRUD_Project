import React, { useEffect } from "react";
import { ListGroup, Button, Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deletePost,
  isModalOpen,
  isUpdatingOpen,
} from "../../redux/actions/postActions";

const Body = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, hasError, errorMsg, isUpdating } = useSelector(
    (state) => state.posts
  );

  

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };
  const handleUpdating = (item) => {
    dispatch(isUpdatingOpen(item));
  };

  return (
    <Container>
      <ListGroup variant="flush">
        {isLoading && (
          <Spinner className="spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {hasError && (
          <>
            {" "}
            <h1 className="display-6">{errorMsg}</h1>
          </>
        )}
        {posts.length &&
          posts.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-around align-items-center"
            >
              <Container className="text-left">
                <h6>Title : {item?.title?.slice(0, 15)}</h6>
                <p>Body : {item.body}</p>
              </Container>
              <div
                className="d-flex justify-content-end"
                style={{ width: " 30%" }}
              >
                <Button
                  variant="outline-info"
                  className="m-2"
                  as={NavLink}
                  onClick={() => handleUpdating(item)}
                  to="/update"
                >
                  Update
                </Button>
                <Button
                  variant="outline-danger"
                  className="m-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
};

export default Body;
