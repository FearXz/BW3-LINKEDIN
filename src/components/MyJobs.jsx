import React, { useEffect, useState } from "react"; // Importa useRef
import { Card, Col, Container, Image, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchJobsAction } from "../redux/actions/actions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { parseISO, formatDistanceToNow } from "date-fns";

function MyJobs() {
  const dispatch = useDispatch();
  const jobsList = useSelector((state) => state.jobs.jobsList);
  const params = useParams();

  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (params.searchquery) dispatch(fetchJobsAction("search", params.searchquery));
    else if (params.searchcompany) dispatch(fetchJobsAction("company", params.searchcompany));
    else dispatch(fetchJobsAction());
  }, [params.searchquery, params.searchcompany]);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {/* INIZIO PARTE SINISTRA */}
        <Col className={selectedJob ? "col-0 d-none" : "col-md-2"}>
          <Row>
            <Col>
              <div className="fs-1 mt-3 w-100">
                <Card className=" rounded rounded-3">
                  <Card.Body className=" pt-0">
                    <Row className="fs-7 mt-4">
                      {/* <hr className="text-gray" /> */}
                      <Col xs={12}>
                        <div>
                          <ul className="list-unstyled fs-6">
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-bookmark-fill fs-5 me-2"></i>
                              <span className="fw-semibold small"> Le mie offerte di lavoro</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-list-task fs-5 me-2"></i>
                              <span className="fw-semibold small"> Preferenze</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-clipboard2-check fs-5 me-2"></i>
                              <span className="fw-semibold small"> Valutazioni delle competenze</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-play-btn-fill fs-5 me-2"></i>
                              <span className="fw-semibold small"> Indicazioni per chi cerca lavoro</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-gear-fill fs-5 me-2"></i>
                              <span className="fw-semibold small"> Impostazioni candidatura</span>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          {/* --- */}
        </Col>
        {/* FINE PARTE SINISTRA */}
        {/* INIZIO PARTE CENTRALE */}
        <Col
          md={5}
          className={
            selectedJob
              ? "col-12 w-100 d-flex align-items-center mt-3"
              : "col-md-5 d-flex flex-column align-items-center mt-3"
          }
        >
          {/* INIZIO --- */}

          <Col className={selectedJob ? "col-6 mb-3 dvh-100 overflow-y-auto rounded-bottom-2 " : "col-12 mb-10"}>
            <Card className="rounded rounded-3">
              <Card.Body className="pb-0">
                <Row>
                  <Col className="d-flex justify-content-between">
                    <div>
                      <h3 className=" h5">Le principali offerte di lavoro per te</h3>
                      <p className=" fs-7 text-gray-600 m-0">
                        Sulla base del tuo profilo e della tua cronologia delle ricerche
                      </p>
                    </div>
                  </Col>
                </Row>
                <TransitionGroup className="row w-100 mt-3 ">
                  {jobsList &&
                    jobsList.map((job) => (
                      <CSSTransition key={job._id} timeout={300} classNames="fade">
                        <Row className=" mt-2">
                          <Col className=" col-auto pe-0">
                            <div>
                              <img
                                src="https://cdn.icon-icons.com/icons2/1377/PNG/512/imagexgeneric_92742.png"
                                alt=""
                                className=" fix-h-50"
                              />
                            </div>
                            <img src="" alt="" />
                          </Col>
                          <Col>
                            <div className="ms-2">
                              <p
                                className="job-hover text-blue-600 fw-semibold m-0"
                                onClick={() => setSelectedJob(job)}
                              >
                                {job.title}
                              </p>
                              <Link
                                className=" text-decoration-none text-gray-600"
                                to={`/jobs/company/${job.company_name}`}
                              >
                                <p className="job-hover fs-7 text-gray-800 m-0">{job.company_name}</p>
                              </Link>
                              <p className=" fs-7 text-gray-600 m-0">{job.candidate_required_location}</p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="#0F7D59"
                                className="mercado-match me-1"
                                width="24"
                                height="24"
                                focusable="false"
                              >
                                <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
                              </svg>
                              <span className="fs-7 text-gray-600">Selezione attiva</span>
                              <p className="fs-8 fw-bold text-green-500">
                                {formatDistanceToNow(parseISO(job.publication_date)) + " ago"}
                              </p>
                            </div>
                          </Col>
                          <Col className=" col-auto ps-0">
                            <div>
                              <i className="bi bi-x-lg fs-5 icon-delete-post"></i>
                            </div>
                          </Col>
                          <hr className=" mb-0" />
                        </Row>
                      </CSSTransition>
                    ))}
                </TransitionGroup>

                <Row className="border-top-5 border-black  hover-gray">
                  <Col xs={12} className="p-0 m-0 ">
                    <Link to={"/"} className=" text-decoration-none text-black">
                      <div className=" text-center py-2">
                        <p className="d-inline">Mostra tutto </p>
                        <i className="bi bi-arrow-right"></i>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* dettagli offerta: */}
          {selectedJob && (
            <Col className={selectedJob ? "col-6 mb-3 dvh-100 overflow-y-auto mb-3 rounded-bottom-2 " : "col-0 d-none"}>
              <Card className="rounded rounded-3">
                <Card.Body className="pb-0">
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <div className=" fs-7 text-gray-700 w-100">
                        <div className=" d-flex justify-content-between">
                          <h3 className=" h4 text-black">{selectedJob.title}</h3>
                          <i className="bi bi-x-lg fs-5 icon-delete-post" onClick={() => setSelectedJob(null)}></i>
                        </div>
                        <span>{selectedJob.company_name}</span>
                        <span> - </span>
                        <span>{selectedJob.candidate_required_location}</span>
                        <span> - </span>
                        <span className="fw-bold text-green-500">
                          {" "}
                          {formatDistanceToNow(parseISO(selectedJob.publication_date)) + " ago"}
                        </span>
                        <span> - </span>
                        <span className="text-gray-600">16 candidati</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <div>
                        <div className="fs-7 mt-2">
                          <i className="text-gray-700 bi bi-briefcase-fill fs-5 me-2"></i>
                          <span className=" bg-green-100 px-1 rounded-1">In sede</span>
                          <span> - </span>
                          <span className=" bg-green-100 px-1 rounded-1">A tempo pieno</span>
                          <span> - </span>
                          <span>Esperienza minima</span>
                        </div>
                        <div className="fs-7">
                          <i className="text-gray-700 bi bi-building fs-5 me-2"></i>
                          <span>Oltre 10.001 dipendenti</span>
                          <span> - </span>
                          <span>Servizi ingegneristici</span>
                        </div>
                        <div className="fs-7">
                          <i className="text-gray-700 bi bi-people-fill fs-5 me-2"></i>
                          <span>7 ex dipendenti lavorano qui</span>
                        </div>
                        <div className="fs-7">
                          <i className="text-gray-700 bi bi-list-check fs-5 me-2"></i>
                          <span>Competenze: Informatica, Ingegneria informatica e altre 2</span>
                          <span> - </span>
                          <span>Servizi ingegneristici</span>
                        </div>
                        <div className="fs-7">
                          <i className="text-gray-700 bi bi-shield-check fs-5 me-2"></i>
                          <span>Visualizza le verifiche relative a questa offerta di lavoro. </span>
                          <a href="#">Mostra tutto</a>
                        </div>
                        <div className="fs-7">
                          <i className="text-gray-700 bi bi-lightbulb fs-5 me-2"></i>
                          <span>Vedi come ti posizioni rispetto a 7 candidati. </span>
                          <a href="#">Prova Premium per 0 EUR</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col className="d-flex justify-content-between">
                      <div>
                        <Button variant="primary" className=" rounded-pill fw-semibold me-2 py-1 px-3">
                          Candidati <i className="bi bi-box-arrow-up-right fs-7"></i>
                        </Button>
                        <Button variant="outline-primary" className=" rounded-pill fw-semibold py-1 px-3">
                          Salva
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col className="d-flex justify-content-between">
                      <div>
                        <h5>Informazioni sull'offerta di lavoro</h5>
                        <p className="fs-7" dangerouslySetInnerHTML={{ __html: selectedJob.description }}></p>
                      </div>
                    </Col>
                  </Row>

                  <hr className="text-gray my-0" />
                  <Row className="border-top-5 border-black  hover-gray">
                    <Col xs={12} className="p-0 m-0 ">
                      <Link to={"/"} className=" text-decoration-none text-black">
                        <div className=" text-center py-2">
                          <p className="d-inline">Visualizza altro</p>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Col>
        {/* FINE PARTE CENTRALE */}
        {/* INIZIO PARTE DESTRA */}
        <Col xs={0} md={3} className={selectedJob ? "col-0 d-none" : "col-0 col-md-3"}>
          <Row className="my-4">
            <Col xs={12}>
              <Card className="rounded rounded-3 bg-transparent border-0">
                {" "}
                <Card.Body className="py-2">
                  <div>
                    <ul className="d-flex list-unstyled justify-content-center align-content-center flex-wrap small">
                      <li>
                        <a href="#" className=" text-gray-600 small text-decoration-none link-blue-500 px-4">
                          <span>Informazioni</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className=" text-gray-600 small text-decoration-none link-blue-500 px-4">
                          <span>Accessibilità</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className=" text-gray-600 small text-decoration-none link-blue-500 px-4">
                          <span>Centro assistenza</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className=" text-gray-600 small text-decoration-none link-blue-500 px-4">
                          <span>Privacy e condizioni</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className=" text-gray-600 small text-decoration-none link-blue-500 px-4">
                          <span>Opzioni per gli annunci pubblicitari</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className=" text-gray-600 small text-decoration-none link-blue-500 px-4">
                          <span>Pubblicità</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className=" text-gray-600 small text-decoration-none link-blue-500 px-4">
                          <span>Servizi alle aziende</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className=" text-gray-600 small text-decoration-none link-blue-500 px-4">
                          <span>Scarica l'app LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className=" text-gray-600 small text-decoration-none link-blue-500 px-4">
                          <span>Altro</span>
                        </a>
                      </li>
                    </ul>
                    <div className="  d-flex justify-content-center align-items-center">
                      <svg
                        role="img"
                        aria-hidden="false"
                        aria-label="LinkedIn"
                        className="global-footer-compact__linkedin-logo mx-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="14"
                        viewBox="0 0 56 14"
                        data-supported-dps="56x14"
                        data-test-icon="linkedin-logo-blue-xxsmall"
                      >
                        <svg display="var(--hue-web-svg-display-light)">
                          <image
                            href="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
                            x="0"
                            y="0"
                            width="56"
                            height="14"
                          ></image>
                        </svg>
                      </svg>
                      <span className="fs-7">LinkedIn Corporation © 2024</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MyJobs;
