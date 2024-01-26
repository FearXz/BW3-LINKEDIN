import React, { useEffect, useState } from "react"; // Importa useRef
import { Card, Col, Container, Image, NavLink, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchExpAction, fetchProfileAction, fetchRandomProfilesAction } from "../redux/actions/actions";
import MyModal from "./ProfileModal";
import ExperienceModal from "./ExperiencePutModal";
import ExperienceDeleteModal from "./ExperienceDeleteModal";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ExperiencePostModal from "./ExperiencePostModal";
import ProfilePictureModal from "./ProfilePictureModal";
import ImageSlider from "./ImageSlider";

function MyProfile() {
  const dispatch = useDispatch();

  const myProfile = useSelector((state) => state.profile.myProfile);
  const myExperience = useSelector((state) => state.profile.myExperience);
  const refreshExperience = useSelector((state) => state.profile.refreshExp);
  const randomProfiles = useSelector((state) => state.profile.randomProfile);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("../assets/meme", false, /\.(png|jpe?g|svg)$/));

  useEffect(() => {
    dispatch(fetchProfileAction());
    dispatch(fetchRandomProfilesAction());
  }, []);

  useEffect(() => {
    if (myProfile) dispatch(fetchExpAction(myProfile._id));
  }, [refreshExperience, myProfile]);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showExperiencePostModal, setShowExperiencePostModal] = useState(false);
  const [showExperienceDeleteModal, setShowExperienceDeleteModal] = useState(false);
  const [showProfilePictureModal, setShowProfilePictureModal] = useState(false);

  const [experienceData, setExperienceData] = useState(null);

  const handleProfileModal = () => setShowProfileModal(true);
  const handleProfilePictureModal = () => setShowProfilePictureModal(true);
  const handleExperiencePostModal = () => setShowExperiencePostModal(true);

  const handleExperienceDeleteModal = (exp) => {
    setExperienceData(exp);
    setShowExperienceDeleteModal(true);
  };
  const handleExperienceModal = (exp) => {
    setExperienceData(exp);
    setShowExperienceModal(true);
  };
  const handleClose = () => {
    setExperienceData(null);
    setShowProfileModal(false);
    setShowExperienceModal(false);
    setShowExperienceDeleteModal(false);
    setShowExperiencePostModal(false);
    setShowProfilePictureModal(false);
  };

  return (
    <Container>
      <Row className="justify-content-center ">
        <Col xs={12} md={7} className="d-flex flex-column align-items-center">
          {/* INIZIO CARD PROFILO */}
          <Row className="w-100">
            <Col>
              <div className="fs-1 mt-3">
                {myProfile && (
                  <Card className=" rounded rounded-3">
                    <Card.Img
                      variant="top"
                      src="https://media.licdn.com/dms/image/C4D12AQHMPBvE3avWzg/article-inline_image-shrink_1000_1488/0/1616872522462?e=1710979200&v=beta&t=hhn-eWVAK9wum9gmaZ8u5RRmJ03jBBRP2CaD4yQqqxA"
                      className="object-fit-cover rounded-top-3"
                      style={{ height: "201px", objectPosition: "0 16%" }}
                    />
                    <Card.Body className=" pt-0">
                      <Row>
                        <Col className="d-flex justify-content-between">
                          <div className=" position-relative">
                            <Image
                              src={myProfile.image}
                              roundedCircle
                              className="object-fit-cover position-absolute border border-4 border-white"
                              style={{ height: "152px", width: "152px", top: "-105px" }}
                            />
                            <i
                              className="bi bi-pencil-square  cursor-pointer fs-4 position-absolute text-gray-800"
                              style={{ bottom: "25px", right: "-170px" }}
                              onClick={handleProfilePictureModal}
                            ></i>
                          </div>
                          <div>
                            <button className=" border-0 bg-white" onClick={handleProfileModal}>
                              <i className="bi bi-pencil fs-5"> </i>
                            </button>
                            <ProfilePictureModal show={showProfilePictureModal} handleClose={handleClose} />
                            <MyModal show={showProfileModal} handleClose={handleClose} />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={8}>
                          <div className="mt-1">
                            <h2 className=" fs-4 mb-0">{myProfile.name + " " + myProfile.surname}</h2>
                            <h4 className=" fs-6 fw-normal mb-0">{myProfile.title}</h4>
                            <p className="d-inline fs-6 text-muted">{myProfile.area} · </p>
                            <a href="#" className="text-primary fs-7 fw-bold text-decoration-none">
                              Informazioni di contatto
                            </a>
                            <a href="#" className="d-block text-primary fs-7 fw-bold text-decoration-none">
                              100 Kebab collegati
                            </a>
                          </div>
                          <div className="">
                            <button className="btn btn-primary fw-bold rounded-5 py-1 me-2">Disponibile per</button>
                            <button className="btn btn-outline-primary fw-bold rounded-5 me-2 py-1">
                              Aggiungi sezione del profilo
                            </button>
                            <button className="btn btn-outline-gray-600 fw-bold rounded-5 me-2 py-1">Altro</button>
                          </div>
                        </Col>
                        <Col xs={12} md={4}>
                          <div className=" mt-3">
                            {" "}
                            <h3 className=" fs-6">Formazione presso</h3>{" "}
                            <h4 className=" fs-6 text-uppercase">Epicode</h4>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )}
              </div>
            </Col>
          </Row>
          {/* FINE CARD PROFILO */}

          {/* INIZIO ANALISI */}
          <Row className="w-100 mt-3">
            <Col>
              <Card className="rounded rounded-3">
                <Card.Body className="pb-0">
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <div>
                        <h3 className=" h5">Analisi</h3>
                        <i className="bi bi-eye-fill fs-6 text-muted"></i>
                        <span className=" fs-7 text-muted"> Solo per te</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <div className="d-flex">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            className="mercado-match me-2"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                          </svg>{" "}
                        </div>
                        <div>
                          <h4 className="h6">7 visualizzazioni di Pippo</h4>
                          <p className="fs-7">Scopri chi ha visitato il tuo profilo</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className="d-flex mx-2">
                        <div>
                          <i className="bi bi-search fs-5 me-2"></i>
                        </div>
                        <div>
                          <h4 className="h6">2 comparse nei motori di ricerca</h4>
                          <p className="fs-7">Vedi quante volte compari nei risultati di ricerca.</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}></Col>
                  </Row>
                  <hr className="text-gray my-0" />
                  <Row className="border-top-5 border-black  hover-gray">
                    <Col xs={12} className="p-0 m-0 ">
                      <Link to={"/"} className=" text-decoration-none text-black">
                        <div className=" text-center py-2">
                          <p className="d-inline">Mostra tutte le analisi </p>
                          <i className="bi bi-arrow-right"></i>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* FINE ANALISI */}

          {/* INIZIO ESPERIENZE */}
          <Row className="w-100 mt-3 mb-5">
            <Col>
              <Card className="rounded rounded-3">
                <Card.Body className="pb-0">
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <div className="d-flex justify-content-between w-100">
                        <h3 className=" h5">Esperienza</h3>
                        <i className=" icon-post bi bi-plus-lg fs-4" onClick={handleExperiencePostModal}></i>
                      </div>
                    </Col>
                  </Row>
                  <ExperiencePostModal show={showExperiencePostModal} handleClose={handleClose} />
                  <Row>
                    <Col>
                      <TransitionGroup>
                        {myExperience &&
                          myExperience.map((exp) => (
                            <CSSTransition key={exp._id} timeout={300} classNames="fade">
                              <Row className="mt-2">
                                <Col className=" col-auto">
                                  <div className="d-flex flex-column align-items-center justify-content-center">
                                    <img
                                      src="https://cdn.icon-icons.com/icons2/1377/PNG/512/imagexgeneric_92742.png"
                                      alt=""
                                      className=" fix-h-60"
                                    />
                                    <i
                                      className="icon-edit bi bi-pencil-square text-gray fs-5 mt-1"
                                      onClick={() => handleExperienceModal(exp)}
                                    ></i>
                                    <i
                                      className="icon-delete bi bi-x-square text-gray fs-5"
                                      onClick={() => handleExperienceDeleteModal(exp)}
                                    ></i>
                                  </div>
                                </Col>
                                <Col className="ps-0 pe-2">
                                  <p className="fw-semibold pt-2 mb-0">{exp.role}</p>
                                  <p className="small mb-0">{exp.company}</p>
                                  <p className="text-gray small mb-0">
                                    {new Date(exp.startDate).toLocaleDateString("it-IT", {
                                      month: "short",
                                      year: "numeric",
                                    }) +
                                      " - " +
                                      new Date(exp.endDate).toLocaleDateString("it-IT", {
                                        month: "short",
                                        year: "numeric",
                                      })}
                                  </p>
                                  <p className="text-gray small  mb-0">{exp.area}</p>
                                  <p className="small mt-2">{exp.description}</p>
                                </Col>
                                <hr className="text-gray my-0" />
                              </Row>
                            </CSSTransition>
                          ))}
                      </TransitionGroup>
                    </Col>
                  </Row>
                  {experienceData && (
                    <ExperienceDeleteModal
                      expData={experienceData}
                      show={showExperienceDeleteModal}
                      handleClose={handleClose}
                    />
                  )}
                  {experienceData && (
                    <ExperienceModal expData={experienceData} show={showExperienceModal} handleClose={handleClose} />
                  )}
                  {/* <hr className="text-gray my-0" /> */}
                  <Row className="border-top-5 border-black  hover-gray">
                    <Col xs={12} className="p-0 m-0 ">
                      <Link to={"/"} className=" text-decoration-none text-black">
                        <div className=" text-center py-2">
                          <p className="d-inline">Mostra tutte le esperienze </p>
                          <i className="bi bi-arrow-right"></i>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* FINE ESPERIENZE */}
        </Col>
        {/* COL DX */}
        <Col xs={0} md={3}>
          <Row className="mt-3">
            <Col xs={12} className="mb-2">
              <Card className="rounded rounded-3">
                {" "}
                <Card.Body>
                  <div className=" d-flex justify-content-between">
                    <div>
                      {" "}
                      <h3 className="h6">Lingua del profilo</h3>
                      <p className=" text-gray-600 fs-7 m-0">Italiano</p>
                    </div>

                    <div>
                      <i className="bi bi-pencil fs-5"></i>
                    </div>
                  </div>
                  <hr />
                  <div className=" d-flex justify-content-between">
                    <div>
                      {" "}
                      <h3 className="h6"> Public profile & URL</h3>
                      <p className=" text-gray-600 fs-7 m-0">www.linkedin.com/in/</p>
                    </div>
                    <div>
                      <i className="bi bi-pencil fs-5"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* <div className=" position-sticky" style={{ top: "75px" }}> */}
          <Row>
            <Col xs={12} className="mb-2">
              <Card className="rounded rounded-3">
                {" "}
                <Card.Body>
                  <div>
                    <ImageSlider images={images} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* </div> */}
          {/* LISTA PERSONE */}
          <Row>
            <Col xs={12}>
              <Card className="rounded rounded-3">
                <Card.Body className="pb-0">
                  <h6 className="mt-2 mb-4">Persone che potresti conoscere</h6>
                  {randomProfiles &&
                    randomProfiles.map((profile) => (
                      <div key={profile._id}>
                        <Col xs={12} className="d-flex mb-1 mt-2">
                          <Col className=" col-auto ">
                            <div>
                              <Image
                                src={profile.image}
                                roundedCircle
                                className="object-fit-cover border border-2 border-white"
                                style={{ height: "48px", width: "48px" }}
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="d-flex justify-content-between py-1 px-2">
                              <div className="fs-6">
                                <p className="fw-semibold m-0">
                                  {profile.name} {profile.surname}
                                </p>
                                <p className="small m-0">{profile.title}</p>
                                <Button variant="outline-secondary" className=" rounded-pill py-1 my-2">
                                  <i className="bi bi-person-plus-fill"></i> Collegati
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Col>
                        <hr className="my-0" />
                      </div>
                    ))}

                  <Row className="border-top-5 border-black  hover-gray">
                    <Col xs={12} className="p-0 m-0 ">
                      <Link to={"/"} className=" text-decoration-none text-black">
                        <div className=" text-center py-2 text-gray-600">
                          <p className="d-inline">Mostra tutto</p>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* FINE LISTA PERSONE */}
        </Col>
        {/* --- */}

        {/* FINE COL DX */}
      </Row>
    </Container>
  );
}

export default MyProfile;
