import { refreshComment, setCommentList } from "../reducers/commentReducer";
import { refreshHomePost, setAllPost } from "../reducers/homePageReducer";
import { setJobsList } from "../reducers/jobsReducer";
import { refreshExperience, setMyExperience, setMyProfile, setRandomProfile } from "../reducers/profileReducer";
const token = process.env.REACT_APP_TOKEN;
/* FETCH GET PROFILE */
export const fetchProfileAction = () => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setMyProfile(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH PUT PROFILE */
export const fetchPutProfileAction = (newProfileObject) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfileObject),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setMyProfile(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH GET EXPERIENCE */
export const fetchExpAction = (idProfile) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setMyExperience(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH POST EXPERIENCE */
export const fetchPostExpAction = (idProfile, ExperienceToPost) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ExperienceToPost),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(refreshExperience());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH PUT EXPERIENCE */
export const fetchPutExpAction = (idProfile, idExperience, updatedExperience) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences/" + idExperience,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExperience),
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(refreshExperience());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH DELETE EXPERIENCE */
export const fetchDeleteExpAction = (idProfile, idExperience) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences/" + idExperience,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      /*       const data = await response.json(); */
      dispatch(refreshExperience());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH GET HOMEPAGE */
export const fetchHomeAction = () => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setAllPost(data.reverse().slice(0, 50)));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH POST HOMEPAGE */
export const fetchPostHomeAction = (myPostToPost) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myPostToPost),
    });

    if (response.ok) {
      /* const data = await response.json(); */
      dispatch(refreshHomePost());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH DELETE HOMEPAGE */
export const fetchDeleteHomeAction = (idPost) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + idPost, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      /*       const data = await response.json(); */
      dispatch(refreshHomePost());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH PUT HOMEPAGE */
export const fetchPutHomeAction = (idPost, myPostToUpdate) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + idPost, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myPostToUpdate),
    });

    if (response.ok) {
      // const data = await response.json();
      dispatch(refreshHomePost());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH GET JOBS */
export const fetchJobsAction =
  (searchType = "", query = "") =>
  async (dispatch) => {
    try {
      let url;
      switch (searchType) {
        case "company":
          url = `https://strive-benchmark.herokuapp.com/api/jobs?limit=20&company=${query}`;
          break;
        case "search":
          url = `https://strive-benchmark.herokuapp.com/api/jobs?limit=20&search=${query}`;
          break;
        default:
          url = `https://strive-benchmark.herokuapp.com/api/jobs?limit=20`;
          break;
      }

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobsList(data));
      } else {
        throw new Error("Errore nel recupero dei risultati");
      }
    } catch (error) {
      console.error("Errore nel fetch:", error.message);
    }
  };
/* FETCH POST IMAGE ON POST */
export const fetchPostImageHomeAction = (idPost, formData) => async (dispatch) => {
  try {
    // Make the POST request using fetch
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/` + idPost, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      dispatch(refreshHomePost());
    } else {
      throw new Error(`Failed to upload profile picture: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error uploading profile picture:", error);
  }
};
/* FETCH GET COMMENT */
export const fetchCommentAction = () => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setCommentList(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH POST COMMENT */
export const fetchPostCommentAction = (commentObj) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentObj),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(fetchCommentAction());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH DELETE COMMENT */
export const fetchDeleteCommentAction = (postId) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + postId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      /* const data = await response.json(); */
      dispatch(fetchCommentAction());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};

/* Fetch utenti */
export const fetchRandomProfilesAction = () => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();

      let randomUsers = [];
      while (randomUsers.length < 5) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedUser = data.splice(randomIndex, 1)[0];
        randomUsers.push(selectedUser);
      }

      dispatch(setRandomProfile(randomUsers));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
